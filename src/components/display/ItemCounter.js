import React, { useState } from 'react';
import '../css/style2.css';
import { NavLink } from 'react-router-dom';

export default function ItemCounter(props) {
    let stock = parseInt(props.stock);
    let name = props.name;
    let price = props.price;
    let button;

    const [counter, setCounter] = useState(0);
    const [sCounter, setSCounter] = useState(stock);

    if (props.id != undefined) {

        if (counter == 0) {
            button = <NavLink to={`/details/${props.id}`}><button className="addToCartButton">Añadir al carrito</button></NavLink>;
        }

        button = <NavLink to={`/cart/${props.id}/${counter}`}><button className="addToCartButton">Añadir al carrito</button></NavLink>;

    }

    function plusItem() {
        if (counter < stock) {
            setCounter(counter + 1);
            setSCounter(sCounter - 1);

        }
    }

    function minusItem() {

        if (counter > 0) {

            setCounter(counter - 1);
            setSCounter(sCounter + 1);

        }

    }

    return (
        <div className="itemCounter">

            <h3>{name}</h3>
            <h3 className="cprice">Precio: ${price}</h3>
            <p id="cstock">Stock: {stock - counter}</p>

            <div className="cDisplay">
                <button className="cButtons" onClick={minusItem}>-</button>
                <p>{counter}</p>
                <button className="cButtons" onClick={plusItem}>+</button>
            </div>

            {button}

        </div>
    )

}