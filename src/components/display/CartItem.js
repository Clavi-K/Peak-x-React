import { useContext, useState } from "react/cjs/react.development";
import { CartContext } from "../../context/CartContext";

export default function CartItem({ purchase, cartChange }) {

    const { cart } = useContext(CartContext);
    const { items } = useContext(CartContext);
    const {setCartL} = useContext(CartContext);
    let Item = items[purchase.id];
    const { setCart } = useContext(CartContext);
    const [pAmount, setPAmount] = useState(purchase.amount);

    const removeItem = (purchase) => {
        
        setCart(cart.filter(function (e) {
            return e !== purchase;
        }));

        cartChange();

    }

    function cartItemP() {

        if (purchase.amount < Item.amount) {
            setPAmount(pAmount + 1);
            purchase.amount = pAmount + 1;

        }

        cartChange();

    }

    function cartItemM() {

        if (purchase.amount > 1) {

            setPAmount(pAmount - 1);
            purchase.amount = pAmount - 1;

        } else {

            removeItem(purchase);

        }

        cartChange();

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