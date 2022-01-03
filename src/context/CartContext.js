import { createContext, useState } from "react";
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

                if (purchase.item.id === i.item.id) {

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
        <CartContext.Provider value={{ cart, cartL, cartP, setCartP, setCartL, addToCart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}