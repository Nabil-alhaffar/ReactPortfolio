import './index.scss'
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState, useRef } from "react";
import emailjs from '@emailjs/browser'
import { MapContainer, Popup, TileLayer,Marker } from 'react-leaflet';

const Contact= ()=> {
    
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    useEffect(() => {
        // Set the timeout and store the timer ID
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    
        // Return a cleanup function to cancel the timeout when the component unmounts
        return () => {
            clearTimeout(timerId); // Cancel the timeout
        };
    }, []);

    const sendEmail = (e)=> {
        e.preventDefault()
        emailjs
        .sendForm(
            'service_kr2tbsb', 'template_lz3jh1d',refForm.current,'F71zpKqApi0Izm3eQ'
        )
        .then(
            ()=>{
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            (error)=> {
                console.error('Failed to send the message:', error);

                alert('Failed to send the message, please try again', error)
            }
        )
    }
    return(

        <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                Currently, I am actively engaged in exploring freelance opportunities, particularly those that stimulate my creativity and offer avenues for innovative problem-solving. I am excited by the prospect of collaborating on projects that challenge conventional thinking and inspire fresh perspectives. 
                </p>
                <p>
                Should you have any inquiries or project proposals, I warmly encourage you to utilize the contact form provided below. Your questions and requests are welcomed, and I am eager to explore how my skills and expertise can contribute to the success of your endeavors.
                </p>
                <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>

                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Full Name" required/>
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder="Email" required/>
                            </li>
                            <li>
                                <input placeholder= "Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND"/>
                            </li>
                        </ul>
                    </form>

                </div>

            </div>
        </div>
        <div className='info-map'>
        Nabil Alhaffar
        <br/>
        S Lake St
        <br/>
        Los Angeles, CA<br/>
        90057<br/>
        <span>nabil.alhaffar1@gmail.com</span>
        </div>
        <div className='map-wrap'>
            <MapContainer center={[ 34.0622, -118.2742 ]} zoom ={12}>
                <TileLayer url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position ={[34.0622, -118.2742 ]}>
                    <Popup>Nabil lives here, come over for a cup of coffee :- </Popup>
                </Marker>

            </MapContainer>
        </div>
        <Loader type="pacman"/>
        </>

    )
}

export default Contact;