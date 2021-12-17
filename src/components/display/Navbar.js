import '../css/style2.css';
import logo from '../img/logo.png';
import cartImg from '../img/cart.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (

        <header>

            <img src={logo} alt="peak streetwear logo"></img>
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

                <li className="nav-item">
                    <a id="item" className="nav-link menu" href="*">Nosotros</a>
                </li>

                <li>
                    <p>|</p>
                </li>

                <li className="nav-item">
                    <a id="item" className="nav-link menu" href="*">Contáctanos</a>
                </li>
            </ul>

            <Link to={`/cart`}>
                <button className="sCart">
                    <img src={cartImg} />
                </button>
            </Link>

        </header>

    )
}

export default Navbar;