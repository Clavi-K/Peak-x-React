import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc, getFirestore, writeBatch } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import Loader from "react-loader-spinner";

export default function OrderForm() {

    const { cart, setCart } = useContext(CartContext);
    const { cartP, setCartP } = useContext(CartContext);
    const { cartL, setCartL } = useContext(CartContext);
    const [orderId, setOrderId] = useState('');
    const [error, setError] = useState('');
    const orderSubmit = (e) => {
        e.preventDefault();

        let errorB = false;
        let order = {};


        if (!e.target.fullName.value || !e.target.tel.value || !e.target.email.value) {
            setError("Por favor completar todos los campos");
            errorB = true;
        }

        if (e.target.email.value !== e.target.emailC.value) {
            setError("Los correos electrónicos no coinciden.");
            errorB = true;
        }

        order.buyer = { fullName: e.target.fullName.value, tel: e.target.tel.value, email: e.target.email.value };
        order.total = cartP;

        order.items = cart.map(cartItem => {

            const id = cartItem.item.id;
            const size = cartItem.size;
            const amount = cartItem.amount;
            const price = (cartItem.amount * cartItem.item.price);

            return { id, size, amount, price };

        });

        // --- FIREBASE ORDER ---

        if (errorB === false) {
            const db = getFirestore();
            const batch = writeBatch(db);
            const collec = collection(db, 'Orders');
            addDoc(collec, order).then(response => setOrderId(response.id));

            for (const item of cart) {

                let itemDoc = doc(db, 'Items', item.item.id);

                batch.update(itemDoc, {
                    amount: item.item.amount - item.amount
                });

            }

            setCart([]);
            setCartL(0);
            setCartP(0);

            batch.commit();
        }

    }

    return (

        <>

            {cartL !== 0 ?

                <form method="POST" className="orderForm" onSubmit={orderSubmit}>

                    <input type="text" name="fullName" placeholder="Nombre completo" />
                    <input type="number" name="tel" placeholder="Número de teléfono" />
                    <input type="email" name="email" placeholder="Email" />
                    <input type="email" name="emailC" placeholder="Confirmar email" />

                    <p>{error}</p>

                    <button type="submit" className="caTitle">Finalizar compra</button>

                </form >

                : orderId !== '' ?

                    <>
                        <h1 className="orderText">Gracias por tu compra!</h1>

                        <p className="orderText orderP">Te enviaremos un email con los detalles de tu compra y el código de seguimiento.</p>
                        <p className="orderP">ID de tu compra: {orderId}</p>

                        <Link to={"/"} className="cartLink orderText"><h2 className="cartLink">Volver al home</h2></Link>
                    </>

                    :


                    <Loader className="spinner" type="Puff" color="#a11600" loading />

            }

        </>






    )

}