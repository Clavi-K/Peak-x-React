import React from 'react';
import '../css/style2.css';
import ItemCounter from './ItemCounter';

function Item({Item}) {
    return(
        <li className="Item">
            <img src=".../data/img/items/shoes/shoes0.jpg"></img>
            <ItemCounter name={Item.name} stock={Item.amount} />
        </li>
    )

}

export default Item;
