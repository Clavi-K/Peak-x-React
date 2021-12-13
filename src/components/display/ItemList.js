import '../css/style2.css';
import ArraySet from '../utilities/ArraySet';
import { useState, useEffect } from 'react';
import Item from './Item';

export default function ItemList(props) {

    const [items, setItems] = useState([]);
    let arr = [];

    useEffect(() => {
        ArraySet
            .then(response => setItems(response));
    }, []);

    if (props.cat === "shoes") {
        arr = items.filter(shoesFilter);
    }

    if (props.cat === "hoodies") {
        arr = items.filter(hoodiesFilter);
    }

    return (<ul className="ItemList">

        {arr.map(item => <Item Item={item} key={item.id} />)}

    </ul>)
}

function shoesFilter(item) {
    return (item.cat === "shoes");
}

function snapsFilter(item) {
    return (item.cat === "snaps");
}

function hoodiesFilter(item) {
    return (item.cat === "hoodies");
}
