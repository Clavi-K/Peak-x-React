import React from 'react';
import '../css/style2.css';
import Categories from './Categories';
import ItemList from './ItemList';
import Navbar from './Navbar';
import Details from './Details';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Landing(props) {

    return (
        <section className="landing" id="title">


            <BrowserRouter>

                <Navbar />

                <h1>{props.greeting}</h1>

                <Routes>

                    <Route exact path="/" element={<Categories />} />
                    <Route exact path="/shoes" element={<ItemList  cat="shoes"/>} />
                    <Route exact path="/hoodies" element={<ItemList  cat="hoodies"/>} />
                    <Route exact path="/Test/:id" element={<Details />} />
                </Routes>

            </BrowserRouter>

        </section>
    )
}