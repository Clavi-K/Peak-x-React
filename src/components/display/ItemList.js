import '../css/style2.css';
import Item from './Item';
import { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import Loader from "react-loader-spinner";

export default function ItemList(props) {

    const [arr, setArr] = useState([]);

    useEffect(() => {

        const db = getFirestore();
        const que = query(collection(db, "Items"), where("cat", "==", props.cat));
        getDocs(que).then((response) => {
            setArr(response.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });

    }, [props.cat]);

    return (<ul className="ItemList">

        {arr.length === 0 ?

            <Loader className="spinner" type="Puff" color="#a11600" loading />

            :

            arr.map(item => <Item Item={item} key={item.id}></Item>)

        }

    </ul>);
}

