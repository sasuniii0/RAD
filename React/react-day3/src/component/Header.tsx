import React from "react";
import {Link} from "react-router-dom";

export default function Header(){
    return(
        <nav
            style={{
                display: "flex",
                gap: "20px",
                borderBottom: "1px solid black",
                paddingBottom: "20px",
                marginBottom: "20px",
                justifyContent: "space-around"
            }}
        >
            <Link to="/">Default</Link>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
        </nav>
    )
}