import { apiCall, URL } from "../api-lib";

const userUrl = URL + "users/"

export async function deleteUser(id: number): Promise<any>  {
    try {
        return await apiCall(userUrl + id, "DELETE", null);
    } catch (error: any) {
        console.error("Error deleting user:", error);
        throw error;
    }
}