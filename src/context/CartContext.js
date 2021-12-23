import { createContext, useState, useEffect } from "react";
import {prom} from "../components/utilities/Queries";
export const CartContext = createContext([]);

export default function CartContextProvider({ children }) {

    const [cart, setCart] = useState([]);

    const [cartL, setCartL] = useState();
    const [cartP, setCartP] = useState();

    function addToCart(Item, size, amnt) {

        let cartBool = false;
        let purchase = { item: Item, size: size, amount: amnt }

        if (cart.length === 0) {

            addtoArr(Item, purchase);

        } else {

            for (const i of cart) {

                if (purchase.item === i.item) {

                    cartBool = true;

                }

            }

            if (cartBool === false) {

                addtoArr(Item, purchase);

            }

        }

        console.log(cart.length);

    }

    function addtoArr(Item, purchase) {

        if (Item.amount >= purchase.amount) {

            cart.push(purchase);

        }

    }

    return (
        <CartContext.Provider value={{ cart, cartL, cartP, setCartP, setCartL, addToCart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}