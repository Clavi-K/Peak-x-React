import { useContext } from 'react/cjs/react.development';
import { CartContext } from '../../context/CartContext';
import '../css/style2.css';
import CartItem from './CartItem';

export default function CartView() {

    const {cart} = useContext(CartContext);

    for (const i of cart) {
        console.log(i[0]);
    }

    return(
        <ul className="cartContainer">
            {cart.map(item => <CartItem id={item[0]}></CartItem>)}
        </ul>
    )

}