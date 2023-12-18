import { IUser } from "@/interfaces/users"
import api, { Empty, myApi, post } from "."

export interface LoginResponse {
    status: string
    user: IUser
}

export const login = async (login: string, password: string) => {
    const response = await post<LoginResponse>('login', { login, password })
    return response
}

export const logout = async () => {
    const response = await myApi<Empty>('logout')
    return response
}