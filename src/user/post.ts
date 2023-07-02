import { apiCall, URL } from "../api-lib";

const userUrl = URL + "users/"

export interface UserData {
    firstName: string;
    lastName: string;
    age?: number;
    image?: string;
    hobbies?: string[];
}

export async function newUser(data: UserData): Promise<any> {
    try {
        return await apiCall(userUrl + "add", "POST", data);
    } catch (error: any) {
        console.error("Error creating user:", error);
        throw error;
    }
}