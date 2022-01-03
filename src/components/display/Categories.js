import React from 'react';
import '../css/style2.css';
import { Link } from 'react-router-dom';

export default function Categories() {

    return (
        <section className='Categories'>

            <Link to={`/snaps`} className='catLink'>
                <div className='Category'>
                    <img src={"img/categories/snap.jpg"} alt=""></img>
                    <h2 className='caTitle'>Snapbacks</h2>
                </div>
            </Link>

            <Link to={`/shoes`} className='catLink'>
                <div className='Category'>
                    <img src={"img/categories/shoe.jpg"} alt=""></img>
                    <h2 className='caTitle'>Calzado</h2>
                </div>
            </Link>

            <Link to={`/hoodies`} className='catLink'>
                <div className='Category'>
                    <img src={"img/categories/hoodie.jpg"} alt=""></img>
                    <h2 className='caTitle'>Hoodies</h2>
                </div>
            </Link>

        </section>
    )

}