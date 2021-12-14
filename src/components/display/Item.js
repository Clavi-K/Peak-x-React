import React from 'react';
import '../css/style2.css';
import { Link } from 'react-router-dom'; 

export default function Item({ Item }) {

    let route = Item.img;
    
    return (
        <li className="Item">
            <img src={Item.img} className="ItemImg"></img>
            <h2>{Item.name}</h2>
            <Link to={`/Test/${Item.id}`}><button className="itemButton">Ver detalles</button></Link>
        </li>
    )

}

