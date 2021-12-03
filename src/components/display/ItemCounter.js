import React, { useState } from 'react';
import '../css/style2.css';

function ItemCounter(props) {

    let stock = parseInt(props.stock);
    let name = props.name;

    const [counter, setCounter] = useState(0);
    const [sCounter, setSCounter] = useState(props.stock);

    function plusItem() {
        if (counter < stock) {

            setCounter(counter+1);
            setSCounter(sCounter-1);

        }
    }

    function minusItem() {

        if (counter > 0) {

            setCounter(counter-1);
            setSCounter(sCounter+1);

        }
        
    }

    return (
        <div className="itemCounter">

            <h3>{name}</h3>
            <p>Stock: {sCounter}</p>

            <div className="cDisplay">
                <button className="cButtons" onClick={minusItem}>-</button>
                <p>{counter}</p>
                <button className="cButtons" onClick={plusItem}>+</button>
            </div>

            <button className="addToCartButton">Add to Cart</button>

        </div>
    )

}

export default ItemCounter;