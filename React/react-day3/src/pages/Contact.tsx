import React from "react";
import { useParams } from "react-router-dom";


export default function Contact(){
    // const {id} = useParams()

    const param = useParams()
    console.log(param);

    return(
        <div>
            Contact : {param.id}
        </div>
    )
    
}