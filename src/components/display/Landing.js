import React from 'react';
import '../css/style2.css';
import ItemCounter from './ItemCounter';
import ItemList from './ItemList';


function Landing(props) {
    return (
        <section className="landing" id="title">
            <h1>{props.greeting}</h1>

            <ItemList />
        </section>
    )
}

export default Landing;