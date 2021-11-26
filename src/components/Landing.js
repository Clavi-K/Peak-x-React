import React from 'react';
import './css/style2.css';


export const Landing = (props) => {
    return (
        <section className="landing">
            <h1>{props.greeting}</h1>
        </section>
    )
}

export default Landing;