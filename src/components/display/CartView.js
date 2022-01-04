import { useContext } from 'react/cjs/react.development';
import { CartContext } from '../../context/CartContext';
import '../css/style2.css';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

export default function CartView() {

    const { cart } = useContext(CartContext);
    const { setCartL, setCartP, cartP } = useContext(CartContext);
    let cartLength = cart.length;

    cartChange();

    return (
        <>
            {cartLength !== 0 ?

                <>

                    <ul className="cartContainer">
                        {cart.map(item => <CartItem purchase={item} cartChange={cartChange} id={item.id}></CartItem>)}
                    </ul>

                    {cartP !== 0 ?

                        <p>Precio final: ${cartP}</p>

                        :
                        
                        null

                    }
                </>


                :

                <div className="spinner">

                    <h1>No hay artículos en el carrito :(</h1>

                    <div className="cartLink" ><Link to={"/"}><h2 className="cartLink">Volver al home</h2></Link></div>

                </div>

            }

        </>


    )

    function cartChange() {

        let tempValues = [0, 0];

        if (cartLength !== 0) {

            for (const item of cart) {

                tempValues[0] += item.amount;
                tempValues[1] += item.amount * item.item.price

            }

        }

        setCartL(tempValues[0]);
        setCartP(tempValues[1]);

    }

}