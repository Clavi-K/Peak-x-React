import '../css/style2.css';
import ArraySet from '../utilities/ArraySet';
import { useState, useEffect } from 'react';
import Item from './Item';

function ItemList() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        ArraySet
            .then(response => setItems(response));
    }, []);

    for (const i of items) {
        console.log(i.amount);
    }

    return (<ul className="ItemList">

        {items.map(item => <Item Item={item} />)}

    </ul>)
}

export default ItemList;