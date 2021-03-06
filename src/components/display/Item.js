import React from 'react';
import '../css/style2.css';
import { Link } from 'react-router-dom';

export default function Item({ Item }) {

    return (
        <li className="Item">
            <img src={"../../" + Item.img} className="ItemImg" alt=""></img>
            <h2>{Item.name}</h2>
            <Link to={`/details/${Item.id}`}><button className="itemButton">Ver detalles</button></Link>
        </li>
    )

}

