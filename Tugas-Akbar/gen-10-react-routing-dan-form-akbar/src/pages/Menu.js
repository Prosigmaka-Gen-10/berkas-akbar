import React from "react";
import { Menulist } from '../helpers/Menulist';
import MenuItem from '../components/MenuItem';

function Menu() {
    return (
        <div className="menu">
            <div style={{ textAlign: "center" }}>
                <h1 className="menuTitle">Hidangan Syurga</h1>;
            </div>
            <div className="menuList">
                {Menulist.map((menuItem, key) => {
                return <MenuItem 
                key = {key}
                image = {menuItem.image} 
                name = {menuItem.name} 
                harga = {menuItem.harga} />
            })}</div>
        </div>
    )
}

export default Menu;