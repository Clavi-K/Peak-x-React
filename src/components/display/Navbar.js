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

            <ul className="nav navBar" id="menu">
                <Link to={`/`}>
                    <li className="nav-item">
                        <a id="item" className="nav-link menu" ariaCurrent="page" href="/">Home</a>
                    </li>
                </Link>

                <li>
                    <p>|</p>
                </li>

                <Link to={`/aboutus`}>
                    <li className="nav-item">
                        <a id="item" className="nav-link menu" href="/aboutus">Nosotros</a>
                    </li>
                </Link>

                <li>
                    <p>|</p>
                </li>

                <Link to={`/contact`}>
                    <li className="nav-item">
                        <a id="item" className="nav-link menu" href="/contact">Contáctanos</a>
                    </li>
                </Link>

                <li>
                    <Link to={`/cart`}>
                        <button className="sCart">
                            <img src={cartImg} alt="" />
                        </button>
                    </Link>

                    <p className={style}>{cartL}</p>
                </li>
            </ul>

        </header>

    )
}

export default React.memo(Navbar);