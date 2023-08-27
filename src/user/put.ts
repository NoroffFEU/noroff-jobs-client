import { apiCall, URL } from "../api-lib";
import { UserData} from "./post";

const userUrl = URL + "users/"

export async function updateUser(id: number, data: UserData): Promise<any> {
    try {
        return await apiCall(userUrl + id, "PUT", data);
    } catch (error: any) {
        console.error("Error updating user:", error);
        throw error;
    }
}