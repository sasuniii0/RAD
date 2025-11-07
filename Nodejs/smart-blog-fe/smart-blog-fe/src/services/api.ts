// axios content api.ts -> api services

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api/v1', // Base URL for your API
    headers: {
        'Content-Type': 'application/json',
    },
})

export default api;