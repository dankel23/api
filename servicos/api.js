import axios from "axios"

export const api = axios.create({
    baseURL: 'https://www.narutodb.xyz/api/character'
})
