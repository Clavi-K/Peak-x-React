import { createContext, useState, useEffect } from "react";
import ArraySet from "../components/utilities/ArraySet";


export const CartContext = createContext([]);

export default function CartContextProvider({ children }) {

    const [items, setItems] = useState([]);
    const [cart] = useState([]);

    useEffect(() => {
        ArraySet
            .then(response => setItems(response));
    }, []);

    function addToCart(Item, size, amnt) {

        console.log(amnt);

        let cartBool = false;
        let purchase = [];
        purchase[0] = Item.id;
        purchase[1] = size;
        purchase[2] = amnt;

        console.log(purchase[2]);

        if (cart.length === 0) {

            if (purchase[2] < Item.amount) {
                cart.push(purchase);
                return;
            }

        } else {

            for (let i = 0; i < cart.length; i++) {

                if (cart[i][0] === purchase[0]) {

                    cartBool = true;
    
                }

            }

            if (cartBool === false) {

                if (purchase[2] < Item.amount) {

                    cart.push(purchase);
                    return;
                }

            }

        }



    }

    return (
        <CartContext.Provider value={{ cart, addToCart, items }}>
            {children}
        </CartContext.Provider>
    )
}