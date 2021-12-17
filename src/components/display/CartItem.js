import react from "react";
import { useContext } from "react/cjs/react.development";
import { CartContext } from "../../context/CartContext";

export default function CartItem({ id }) {

    const { items } = useContext(CartContext);
    const { cart } = useContext(CartContext);

    let Item = items[id];
    let purchase = [];

    for (const i of cart) {

        if (i[0] === Item.id) {

            purchase = i;

        }

    }

    return (
        <li className="cartItem">
            <img src={Item.img}></img>
            <h3>{Item.name}</h3>
            <h3>Talle: {purchase[1]}</h3>
            <h3>Unidades: {purchase[2]}</h3>
            <h3>Precio final: {purchase[2] * Item.price}</h3>
        </li>
    )

}