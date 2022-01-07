import { Link } from 'react-router-dom';
import fac from '../img/fac.png';
import twi from '../img/twi.png';
import ins from '../img/ins.png';

export default function Contact() {

    return (

        <>

            <hr />

            <form className="contactForm" action="" method="POST">

                <h2>¿PREGUNTAS? DEJA TU CORREO Y FEEDBACK. RESPONDEREMOS</h2>

                <label className="label" for="email">Email</label>
                <input className="contactInput" type="email" name="email" id="email" />

                <label className="label" for="email">Feedback</label>
                <textarea className="contactInput" type="texarea" name="feedback" id="feedback" />

                <Link className='catLink caTitle contactButton' to={`/`}>ENVIAR</Link>

            </form>

            <h2 className="contactSocial">REDES SOCIALES</h2>

            <ul className='contactFooter'>

                <li className='contactMedia'>
                    <img src={fac} alt=""></img>
                    <p>Peak Streetwear</p>
                </li>

                <li className='contactMedia'>
                    <img src={twi} alt=""></img>
                    <p>@peak_streetwear</p>
                </li>

                <li className='contactMedia'>
                    <img src={ins} alt=""></img>
                    <p>@Peak.streetwear_</p>
                </li>

            </ul>

        </>

    )
}