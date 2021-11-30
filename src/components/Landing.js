import React from 'react';
import './css/style2.css';
import ItemCounter from './ItemCounter';


function Landing(props) {
    return (
        <section className="landing" id="title">
            <h1>{props.greeting}</h1>

            <ItemCounter name='Black Airforce' stock='14' /> 
        </section>
    )
}

export default Landing;