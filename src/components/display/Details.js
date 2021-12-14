import React from 'react';
import '../css/style2.css';
import ArraySet from '../utilities/ArraySet';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ItemCounter from './ItemCounter';

export default function Details() {
    
    const { id } = useParams();
    let ID = parseInt(id);
    const [Item, setItem] = useState([]);

    useEffect(() => {
        ArraySet
            .then(response => setItem(itemReturner(response, ID)));
    }, []);

    return (
        <section className="details">
            <img src={"../../../" + Item.img} className=""></img>
            <ItemCounter name={Item.name} stock={Item.amount} />
            <h4>Descripción</h4>
            <p>{Item.desc}</p>
        </section>
    )

}

function itemReturner(response, id) {

    let value;

    for(const i of response) {

        if(i.id == id) {

            value = i;

        }

    }

    return value;

}
