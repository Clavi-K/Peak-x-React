import '../css/style2.css';
import ArraySet from '../utilities/ArraySet';
import { useState, useEffect } from 'react';
import Item from './Item';

export default function ItemList() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        ArraySet
            .then(response => setItems(response));
    }, []);
 
    return (<ul className="ItemList">

        {items.map(item => <Item Item={item} key={item.id} />)}

    </ul>)
}
