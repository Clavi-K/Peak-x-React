import '../css/style2.css';
import ArraySet from '../utilities/ArraySet';
import { useState, useEffect } from 'react';
import Details from './Details';
import { useParams } from 'react-router-dom';

export default function ItemDetails() {

    const { id } = useParams();
    const [Item, setItem] = useState([]);

    useEffect(() => {
        ArraySet
            .then(response => setItem(itemReturner(response, id)));
    }, [id]);

    console.log(Item.name);

    return (<img src={Item.img}></img>);

    function itemReturner(response, id) {

        let value;

        for (const i of response) {

            if (i.id == id) {

                value = i;

            }

        }

        return value;

    }
}