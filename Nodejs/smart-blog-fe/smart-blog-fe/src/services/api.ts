// axios content api.ts -> api services

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api/v1', // Base URL for your API
    headers: {
        'Content-Type': 'application/json',
    },
})

const PUBLIC_ENDPOINTS = ["/auth/login", "/auth/register"]

api.interceptors.request.use((config) => {
    // config.headers // show the headers
    // config.url // show the destination of the url

    const token =localStorage.getItem("token")

    const isPublic = PUBLIC_ENDPOINTS.some((url) =>config.url?.includes(url))

    if (token && !isPublic){
        config.headers.Authorization = `Bearer ${token} `
    }
    return config
})

export default api;