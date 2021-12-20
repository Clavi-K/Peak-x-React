import { useContext } from 'react/cjs/react.development';
import { CartContext } from '../../context/CartContext';
import '../css/style2.css';
import CartItem from './CartItem';

export default function CartView() {

    const {cart} = useContext(CartContext);
    
    return(
        <ul className="cartContainer">
            {cart.map(item => <CartItem purchase={item}></CartItem>)}
        </ul>
    )

}