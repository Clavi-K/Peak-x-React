import '../css/style2.css';
import ArraySet from '../utilities/ArraySet';
import { useState, useEffect } from 'react';
import Details from './Details';

export default function ItemDetails(props) {

    let intId = parseInt(props.id);

    const [items, setItems] = useState([]);

    useEffect(() => {
        ArraySet
            .then(response => response[intId])
            .then(data => setItems(data));
    }, []);

    console.log(items.name);

    return ( <Details item={items} /> );

}