//Just ment as an example
//Function is exported to main.ts
//Run the project and see in console.

//Import these into your file
import { apiCall } from "./apiCall.ts";
import { URL } from "./apiCall.ts";

//Define endpoint
const ListProducts = `${URL}products`

export async function getProducts() {
   
    try{

        const response = await apiCall(ListProducts, "GET", null);
    
        console.log(response);
        return response;
    }catch(error){
    
    // Log any errors that occurred during the API call to the console
    console.error("Error retrieving products:", error);
    throw error;
    }
}
//getProducts();