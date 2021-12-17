import React from 'react';
import '../css/style2.css';
import { useParams } from 'react-router-dom';
import ItemCounter from './ItemCounter';
import { useContext } from 'react/cjs/react.development';
import { CartContext } from '../../context/CartContext';

export default function Details() {

    const { items } = useContext(CartContext);
    const { id } = useParams();
    let ID = parseInt(id);

    let Item = itemReturner(items, ID);

    return (
        <section className="details">
            {
                Item != undefined ?

                    <>
                        <img src={"../../../" + Item.img} className=""></img>
                        {Item.sizes ? <ItemCounter Item={Item} key={Item.id} /> : null}
                        <h4>Descripción</h4>
                        <p>{Item.desc}</p>
                    </>

                :

                    null

            }

        </section>
    )

}

function itemReturner(response, id) {

    let value;

    for (const i of response) {

        if (i.id === id) {

            value = i;

        }

    }

    return value;

}
