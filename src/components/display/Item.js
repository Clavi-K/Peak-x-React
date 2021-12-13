import React from 'react';
import '../css/style2.css';
import { NavLink } from 'react-router-dom'; 

export default function Item({ Item }) {
    
    return (
        <li className="Item">
            <img src={Item.img} className="ItemImg"></img>
            <h2>{Item.name}</h2>
            <NavLink to={`/details/${Item.id}`}><button className="itemButton">Ver detalles</button></NavLink>
        </li>
    )

}

