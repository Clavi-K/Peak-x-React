import react from "react";
import { useContext, useState } from "react/cjs/react.development";
import { CartContext } from "../../context/CartContext";

export default function CartItem({ purchase }) {

    const { items } = useContext(CartContext);
    const { cart } = useContext(CartContext);
    const { setCart } = useContext(CartContext);
    let Item = items[purchase.id];
    const [pAmount, setPAmount] = useState(purchase.amount);

    const removeItem = (purchase) => {

        setCart(cart.filter(function (e) {
            return e !== purchase;
        }));
    }

    function cartItemP() {
        if (purchase.amount < Item.amount) {
            setPAmount(pAmount + 1);
            purchase.amount = pAmount + 1;

        }
    }

    function cartItemM() {
        if (purchase.amount > 1) {
            setPAmount(pAmount - 1);
            purchase.amount = pAmount - 1;

        } else {
            setCart(cart.filter(function (e) {
                return e !== purchase;
            }));
        }
    }

    return (
        <li className="cartItem">
            <img src={Item.img}></img>
            <h3>{Item.name}</h3>
            <h3>Talle: {purchase.size}</h3>
            <button onClick={cartItemM}>-</button>
            <h3>Unidades: {pAmount}</h3>
            <button onClick={cartItemP}>+ </button>
            <h3>Precio: ${pAmount * Item.price}</h3>
            <button onClick={() => removeItem(purchase)}>X</button>
        </li>
    )

}