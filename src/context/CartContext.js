import { createContext, useState, useEffect } from "react";
import ArraySet from "../components/utilities/ArraySet";
export const CartContext = createContext([]);

export default function CartContextProvider({ children }) {

    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState();
    const [cartL, setCartL] = useState();
    const [cartP, setCartP] = useState();
    
    useEffect(() => {
        ArraySet
            .then(response => setItems(response));
            setLoading(true);
    }, []);

    function addToCart(Item, size, amnt) {

        let cartBool = false;
        let purchase = { id: Item.id, size: size, amount: amnt }

        if (cart.length === 0) {

            addtoArr(Item, purchase);

        } else {

            for (let i = 0; i < cart.length; i++) {

                if (purchase.id === cart[i].id) {

                    cartBool = true;

                }

            }

            if (cartBool === false) {

                addtoArr(Item, purchase);

            }

        }



    }

    function addtoArr(Item, purchase) {

        if (Item.amount >= purchase.amount) {

            cart.push(purchase);

        }

    }

    return (
        <CartContext.Provider value={{ cart, items, loading, cartL, cartP, setCartP, setCartL, setLoading, addToCart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}