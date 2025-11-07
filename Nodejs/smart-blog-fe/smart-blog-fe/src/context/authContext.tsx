import {createContext, useContext, useEffect, useState} from 'react'
import { getMydetails } from '../services/auth'
//solution for props drilling =>  is context creating...

// context eka create krnn create context eka one wenwa
const AuthContext = createContext<any>(null)

export const AuthProvider = ({children} : any)=>{
    const [user,setUser] = useState<any>(null)

    // component eka render wena time allaganna puluwn
    // dependency array dala nattam render wenw hamawlema component eka..
    // note krgnna theory parts tika and revise those
    useEffect(()=>{
        const token =localStorage.getItem("token")
        if(token){
            getMydetails().then((res) =>{
                setUser(res.data)
            }).catch((err)=>{
                // if user token or user data expired... or the api call fail moment
                setUser(null)
                console.error(err)
            })
        }
    },[])
    
    return(
        <AuthContext.Provider value={{user , setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

// user , setUser 
// context eka use krnn useContext eka one
export const useAuth = ()=>{
    const context = useContext(AuthContext)
    return context
}
