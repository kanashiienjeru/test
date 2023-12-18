export interface Empty {

}

export default async function api<T>(url: string): Promise<T> {
    return fetch('https://jsonplaceholder.typicode.com/' + url)
    .then(response => {
        if (!response.ok) throw new Error('Error o_O')
        return response.json() as Promise<T>
    })
}

export const myApi = async<T>(url: string):Promise<T> => {
    return fetch('http://localhost:3000/api/' + url)
    .then(response => {
        if (!response.ok) throw new Error('Error o_O')
        return response.json() as Promise<T>
    })
}


export const post = async<T>(url: string, body?: any): Promise<T> => {
    return fetch('http://localhost:3000/api/' + url, {
        method: 'POST',
        body: JSON.stringify(body)
    })
    .then(response => {
        if (!response.ok) throw new Error('Error o_O')
        return response.json() as Promise<T>
    })
}