import '../css/style2.css';
import logo from '../img/logo.png';
import Cart from './Cart.js';

function Navbar() {
    return (

        <header>

            <img src={logo} alt="peak streetwear logo"></img>
            <h1>PEAK STREETWEAR</h1>

            <ul className="nav" id="menu">
                <li className="nav-item">
                    <a id="item" className="nav-link menu" ariaCurrent="page" href="*">Home</a>
                </li>

                <li>
                    <p>|</p>
                </li>

                <li className="nav-item">
                    <a id="item" className="nav-link menu" href="*">About us</a>
                </li>

                <li>
                    <p>|</p>
                </li>

                <li className="nav-item">
                    <a id="item" className="nav-link menu" href="*">Contact</a>
                </li>
            </ul>

            <Cart />

        </header>

    )
}

export default Navbar;