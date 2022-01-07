import Eric from '../img/Eric.png';

export default function AboutUs() {

    return (
        <>
            <hr />
            <h2>¿QUIÉNES SOMOS?</h2>

            <div className='aboutDiv'>
                <p>Peak Streetwear es una marca de indumentaria urbana, creada por Eric Cartman en 1985, al darse cuenta de que los skaters necesitaban ropa nueva constantemente, especialmente calzado. Por lo tanto, diseñó los primeros cinco productos con la durabilidad y el estilo en mente. Desde entonces, el único objetivo de Peak Streetwear fue ofrecer la mejor opción para los skaters, bikers y todos los deportistas urbanos, con el fin de tener la posiblidad de comprar menos de dos o tres pares de zapatillas por mes. </p>

                <div className='imgDiv'>
                    <img src={Eric}></img>
                    <h3>Eric Cartman</h3>
                </div>
            </div>
        </>
    )

}