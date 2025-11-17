// axios content api.ts -> api services

import axios, { Axios, AxiosError } from 'axios';
import { handleRefreshToken } from './auth';

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

api.interceptors.response.use(
    (response) => {return response} ,
    async (err: AxiosError) => {
        const originalRequest : any = err.config

        const isPublic = PUBLIC_ENDPOINTS.some((url) =>
            originalRequest.url?.includes(url)
        )

        if(err.response?.status === 401 && !isPublic && !originalRequest._retry){
            originalRequest._retry = true
            try{
                const refreshToken = localStorage.getItem("refreshToken")

                if(!refreshToken) {
                    throw new Error("No refresh token available")
                }
                const res = await handleRefreshToken(refreshToken)
                localStorage.setItem("accessToken" , res.accessToken)

                originalRequest.headers.Authorization = `Bearer ${res.accessToken}`
                return axios(originalRequest)
            } catch (err){
                localStorage.removeItem("accessToken")
                localStorage.removeItem("refreshToken")
                window.location.href = "/login"
                return Promise.reject(err)
            }
        }
        return Promise.reject(err)
    }
)

export default api;