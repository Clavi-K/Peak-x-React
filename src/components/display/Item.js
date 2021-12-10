import React from 'react';
import '../css/style2.css';

export default function Item({ Item }) {

    return (
        <li className="Item">
            <img src={Item.img} className="ItemImg"></img>
            <h2>{Item.name}</h2>
            <button className="itemButton">Ver detalles</button>
        </li>
    )

}

