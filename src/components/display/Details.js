import React from 'react';
import '../css/style2.css';
import ItemCounter from './ItemCounter';

export default function Details({item}) {

    return(
        <div className="details">
            <img src={item.img}></img>
            <ItemCounter name={item.name} stock={item.amount} />
            <p className="description">{item.desc}</p>
        </div>
    )

}