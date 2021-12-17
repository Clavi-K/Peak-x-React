import '../css/style2.css';
import Item from './Item';
import { useContext } from 'react/cjs/react.development';
import { CartContext } from '../../context/CartContext';

export default function ItemList(props) {

    const {items} = useContext(CartContext);

    let arr = [];

    if (props.cat === "shoes") {
        arr = items.filter(shoesFilter);
    }

    if (props.cat === "hoodies") {
        arr = items.filter(hoodiesFilter);
    }

    if (props.cat === "snaps") {
        arr = items.filter(snapsFilter);
    }

    return (<ul className="ItemList">

        {arr.map(item => <Item Item={item} key={item.id}></Item>)}

    </ul>);
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

