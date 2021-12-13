import React from 'react';
import '../css/style2.css';
import ItemCounter from './ItemCounter';

export default function Details({Item}) {

    return(
        <div className="details">
            <img src={Item.img}></img>
            <ItemCounter name={Item.name} stock={Item.amount} />
            <p className="description">{Item.desc}</p>
        </div>
    )

}