import { apiCall, URL } from "../api-lib";

const userUrl = URL + "users/"

export async function getAllUsers(): Promise<any> {
    try {
        return await apiCall(userUrl, "GET", null);
    } catch (error: any) {
        console.error("Error retrieving users:", error);
        throw error;
    }
}

export async function getSingleUser(id: number): Promise<any> {
    const url = userUrl + id;

    try {
        return await apiCall(url, "GET", null);
    } catch (error: any) {
        console.error("Error retrieving user:", error);
        throw error;
    }
}

export async function searchUser(searchString: string): Promise<any> {
    const url = `${userUrl}search?q=${searchString}`;

    try {
        return await apiCall(url, "GET", null);
    } catch (error: any) {
        console.error("Error searching user:", error);
        throw error;
    }
}