import { IUser } from "@/interfaces/users"
import api from "."

export const getUserById = async (id: string) => {
    const response = await api<IUser>(`users/${id}`)
    return response
}
