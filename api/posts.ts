import { IComment, IPost } from "@/interfaces/posts"
import api from "."

export const getPosts = (page?: number) => {
    const response = api<IPost[]>(`posts?page=${page}`)
    return response
} 

export const getPostById = async (id: string) => {
    const response = await api<IPost>(`posts/${id}`)
    return response
}

export const getCommentsByPostId = async (id: string):Promise<IComment[]> => {
    const response = await api<IComment[]>(`posts/${id}/comments`)
    return response
}