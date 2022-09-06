import { Link } from "react-router-dom";
import React from "react";

function Navigation() {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>React Router and Form</h1>
            <nav>
                <Link to='/'>Home</Link> | {" "}
                <Link to='login'>Login</Link> | {" "}
                <Link to='menu'>Menu</Link> |
            </nav>
            <br></br>
            <hr></hr>
        </div>
    )
}

export default Navigation