import React, { memo } from 'react';
import '../css/style2.css';
import Categories from './Categories';
import ItemList from './ItemList';
import Navbar from './Navbar';
import Details from './Details';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartView from './CartView';
import Loader from "react-loader-spinner";
import { useContext } from 'react/cjs/react.development';
import { CartContext } from '../../context/CartContext';

function Landing(props) {

    const { loading, setLoading } = useContext(CartContext);
    const { items } = useContext(CartContext);
    const {cart} = useContext(CartContext);

    if (items.length != 0) {

        setLoading(false);

    }

    return (
        <section className="landing" id="title">

            <BrowserRouter>

                <Navbar />

                <h1>{props.greeting}</h1>

                {loading === true ?


                    <Loader className="spinner" type="Puff" color="#a11600" loading />

                    :

                    <Routes>

                        <Route exact path="/" element={<Categories />} />
                        <Route exact path="/shoes" element={<ItemList cat="shoes" />} />
                        <Route exact path="/hoodies" element={<ItemList cat="hoodies" />} />
                        <Route exact path="/snaps" element={<ItemList cat="snaps" />} />
                        <Route exact path="/details/:id" element={<Details />} />
                        <Route exact path="/cart" element={<CartView />} />

                    </Routes>

                }

            </BrowserRouter>

        </section>
    )
}

export default React.memo(Landing);