import React from 'react';
import '../css/style2.css';
import { useParams } from 'react-router-dom';
import ItemCounter from './ItemCounter';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import Loader from "react-loader-spinner";

export default function Details() {

    const { id } = useParams();
    const [Item, setItem] = useState();

    useEffect(() => {
        const db = getFirestore();
        const querydb = doc(db, 'Items', id);
        getDoc(querydb)
            .then(response => setItem({ id: response.id, ...response.data() }));

    }, []);

    return (
        <section className="details">
            {
                Item !== undefined ?

                    <>
                        <img src={"../../../" + Item.img} alt=""></img>
                        {Item.sizes ? <ItemCounter Item={Item} key={Item.id} /> : null}
                        <h4>Descripción</h4>
                        <p className='itemDesc'>{Item.desc}</p>
                    </>

                    :

                    <Loader className="spinner" type="Puff" color="#a11600" loading />

            }

        </section>
    )

}
