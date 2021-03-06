import React from 'react';
import '../css/style2.css';
import Categories from './Categories';
import ItemList from './ItemList';
import Navbar from './Navbar';
import Details from './Details';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartView from './CartView';
import OrderForm from './OrderForm';
import Contact from './Contact';
import AboutUs from './AboutUs';

function Landing(props) {

    return (
        <section className="landing" id="title">

            <BrowserRouter>

                <Navbar />

                <h1>{props.greeting}</h1>

                <Routes>

                    <Route exact path="/" element={<Categories />} />
                    <Route exact path="/shoes" element={<ItemList cat="shoes" />} />
                    <Route exact path="/hoodies" element={<ItemList cat="hoodies" />} />
                    <Route exact path="/snaps" element={<ItemList cat="snaps" />} />
                    <Route exact path="/details/:id" element={<Details />} />
                    <Route exact path="/cart" element={<CartView key="" />} />
                    <Route exact path="/newOrder" element={<OrderForm />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/aboutus" element={<AboutUs />} />

                </Routes>

            </BrowserRouter>

        </section>
    )
}

export default React.memo(Landing);