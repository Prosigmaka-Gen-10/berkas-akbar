import React from "react";

function menuItem ({image, name, harga}) {
    return (
        <div className="menuItem">
<div style={{backgroundImage: `url(${image})`}}></div>
<h1>{name}</h1>
<p>${harga}</p>
        </div>
    )
}

export default menuItem;