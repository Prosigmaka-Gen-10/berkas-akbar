import { useState, useEffect } from "react";
import React from "react";
import Image from '../assets/makanan.jpg'
import { Link } from "react-router-dom";
import '../style/Home.css'

function Home() {
    return (
        <div className="home">
            <div
            className="headerContainer"
            style={{backgroundImage: `url(${Image})`}}>
                <h1>Warung Cilacap Bercahaya</h1>
                <p> MAKANAN LEJAAD DAN BERGIJII</p>
                <Link to="/menu">
                    <button>ORDER</button>
                </Link>
            </div>

        </div>
    )
}

export default Home;