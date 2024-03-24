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
                    I am currently working on and interested in freelance opportunities,
                     especially projects that require creativity!
                    However, please do not hesitate to reach out to me via the form below for any requests or questions!
                </p>
                <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>

                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="name" required/>
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder="email" required/>
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
        Nabil alhaffar
        <br/>
        Los Angeles
        <br/>
        422 S Lake St, 90057<br/>
        California<br/>
        <span>nabil.alhaffar1@gmail.com</span>
        </div>
        <div className='map-wrap'>
            <MapContainer center={[ 34.0522, -118.2437 ]} zoom ={13}>
                <TileLayer url = "https://{s}.tile.openstreetmap.org/{z},{x},{y}.png" />
                <Marker position ={[34.0522, -118.2437 ]}>
                    <Popup>Nabil lives here, come over for a cup of coffee :- </Popup>
                </Marker>

            </MapContainer>
        </div>
        <Loader type="pacman"/>
        </>

    )
}

export default Contact;