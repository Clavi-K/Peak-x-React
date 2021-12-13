import React from 'react';
import '../css/style2.css';
import { Link } from 'react-router-dom';

export default function Categories() {

    return (
        <section className='Categories'>

            <Link to={`/snaps`}>
                <div className='Category'>
                    <img src="img/categories/snap.jpg"></img>
                    <h2 className='caTitle'><a>Snapbacks</a></h2>
                </div>
            </Link>

            <Link to={`/shoes`}>
                <div className='Category'>
                    <img src="img/categories/shoe.jpg"></img>
                    <h2 className='caTitle'><a>Shoes</a></h2>
                </div>
            </Link>

            <Link to={`/hoodies`}>
                <div className='Category'>
                    <img src="img/categories/hoodie.jpg"></img>
                    <h2 className='caTitle'><a>Hoodies</a></h2>
                </div>
            </Link>

        </section>
    )

}