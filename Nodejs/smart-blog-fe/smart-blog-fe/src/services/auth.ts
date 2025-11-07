import api from '../services/api';

type RegisterData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
}   

export const register = async(data:RegisterData) =>{
    const res = await api.post('/auth/register', data);
    return res.data;
}

export const login = async(email:string, password:string) =>{
    const res = await api.post('/auth/login', {email, password});
    return res.data;
}

export const getMydetails = async()=>{
    const res = await api.get('/auth/me')
    return res.data;
}

