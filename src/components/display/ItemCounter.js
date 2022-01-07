import React, { useState } from 'react';
import '../css/style2.css';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function Finishp() {

    return <NavLink to={`/cart`}><button className="addToCartButton">Finalizar compra</button></NavLink>;

}

function Addp({ handler}) {


    return <button className="addToCartButton" onClick={handler} >Añadir al carrito</button>;
}

export default function ItemCounter({ Item }) {
    let stock = parseInt(Item.amount);
    let name = Item.name;
    let price = Item.price;

    const [counter, setCounter] = useState(0);
    const [sCounter, setSCounter] = useState(stock);
    const [sizeS, setSize] = useState(Item.sizes[0]);
    const [input, setInput] = useState('button');
    const { addToCart } = useContext(CartContext);

    function plusItem() {

        if (counter < stock) {

            setCounter(counter + 1);
            setSCounter(sCounter - 1);

        }
    };

    function minusItem() {

        if (counter > 0) {

            setCounter(counter - 1);
            setSCounter(sCounter + 1);

        }

    }

    function handler() {

        if (counter !== 0) {

            setInput('input');
            addToCart(Item, sizeS, counter);

        }
    }

    function sizeHandler(e) {
        setSize(e.target.value);
    }

    return (
        <div className="itemCounter">

            <h3>{name}</h3>
            <h3 className="cprice">Precio: ${price}</h3>

            <p id="cstock">Stock: {stock - counter}</p>

            <div className="cDisplay">
                <button className="cButtons" onClick={minusItem}>-</button>
                <p className='counter'>{counter}</p>
                <button className="cButtons" onClick={plusItem}>+</button>
            </div>

            <div className="selectDiv">

                <span className="selectText">Talle:</span>

                <select className="itemSelect" defaultValue={Item.sizes[0].toString()} onChange={sizeHandler}>
                    {Item.sizes.map(size => <option className="selectOption" value={size} key={size}>{size}</option>)}
                </select>

            </div>

            {
                input === 'button' ?

                    <Addp handler={handler} />

                    :

                    <Finishp />

            }

        </div>
    )

}