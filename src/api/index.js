import axios from 'axios'

export const BASE_URL = 'https://kidslike-v1-backend.goit.global/'

export const api = axios.create({
    baseURL: BASE_URL,
})
