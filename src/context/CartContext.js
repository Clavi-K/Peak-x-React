import { createContext, useState } from "react";
export const CartContext = createContext([]);

export default function CartContextProvider({ children }) {

    const [cart, setCart] = useState([]);

    const [cartL, setCartL] = useState(0);
    const [cartP, setCartP] = useState(0);

    function addToCart(Item, size, amnt) {

        let cartBool = false;
        let cartIndex = undefined;
        let purchase = { item: Item, size: size, amount: amnt }

        if (cart.length === 0) {

            addtoArr(Item, purchase);

        } else {

            for (const i of cart) {

                if (purchase.item.id === i.item.id) {

                    cartBool = true;
                    i.amount += purchase.amount;
                    setCartL(cartL + purchase.amount);

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
            setCartL(cartL + purchase.amount);

        }

    }

    return (
        <CartContext.Provider value={{ cart, cartL, cartP, setCartP, setCartL, addToCart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}