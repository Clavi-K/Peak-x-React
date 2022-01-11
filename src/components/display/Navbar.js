import React, { useContext } from 'react';
import '../css/style2.css';
import logo from '../img/logo.png';
import cartImg from '../img/cart.png';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

function Navbar() {

    const { cartL } = useContext(CartContext);

    let style;

    if (cartL === 0) {
        style = "itemAmountE";
    } else {
        style = "itemAmount";
    }

    return (

        <header>
            <Link to={`/`}>
                <img src={logo} alt="peak streetwear logo"></img>
            </Link>

            <h1 className="NavTitle">PEAK STREETWEAR</h1>

            <ul className="navBar">

                <Link to={`/`}>
                    <li>
                        <p>Home</p>
                    </li>
                </Link>

                <li>
                    <p>|</p>
                </li>

                <Link to={`/aboutus`}>
                    <li>
                        <p>Nosotros</p>
                    </li>
                </Link>

                <li>
                    <p>|</p>
                </li>

                <Link to={`/contact`}>
                    <li>
                        <p>Contáctanos</p>
                    </li>
                </Link>

                <Link to={`/cart`} id="cartDisplay">
                    <li>
                        <button>
                            <img src={cartImg} alt="" />
                        </button>

                        <p className={style}>{cartL}</p>
                    </li>
                </Link>
                
            </ul>

        </header>

    )
}

export default React.memo(Navbar);