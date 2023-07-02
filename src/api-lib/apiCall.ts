//Main Api function call for all the other functions
//PLEASE SEE example.ts to understand how to utilize this

// Base API URL
export const URL = "https://dummyjson.com/";
//API token
const token = ''

/**
Performs an API call.

@param {string} URL - The URL of the API endpoint.
@param {string} method - The HTTP method to be used (GET, POST, PUT, DELETE).
@param {object} body - The request body (optional).
@returns {Promise} - A promise that resolves to the API response data or rejects with an error.
@throws {Error} - Throws an error if an invalid HTTP method is provided.
 */


export function apiCall (URL: string, method: string, body: object){
    //Methods allowed to use in this functions
    const methods = ["GET", "POST", "PUT", "DELETE"]
    

     // If the method is invalid, throw an error
    if (!methods.includes(method)){
        throw new Error ("Use GET, POST, PUT or DELETE")
    }
    //Create request object
    const request = {
        method:method,
        headers: {
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            "content-type" : "application/json",
        },
        ...(body ? {body: JSON.stringify(body)} : {}),
    };
    return new Promise((resolve, reject) => {
            // API Fetch request
              fetch(URL, request)
                .then((response) => {
                // If the response is successful, parse JSON data
                  if (response.ok) return response.json();
                // If there is an error response
                  else reject({ status: response.status, message: response.statusText });
                })
                .then((data) => {
                    // Resolve promise with API response data
                  resolve(data);
                })
                .catch((error) => {
                    // Catch any error that occurred during the API call 
                  reject(error);
                });
            });
}
