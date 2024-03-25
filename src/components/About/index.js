import './index.scss'
import {  useEffect,useState } from 'react'
import AnimatedLetters from "../AnimatedLetters"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = ()=>{

    const [letterClass, setLetterClass] = useState('text-animate')
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

    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t', ' ', 'M','e']}
                    idx={15}
                    
                    
                    />

                </h1>
                <p>I'm a very dedicated full-stack developer currently looking for a role in
                    a well established IT company. I specialize in mobile development and ASP.NET core, and I've expanded
                    my skillset to include most advanced front-end technologies like Angular and React. 
                </p>
                <p>
                    I'm quitely confident, naturally curious, and actively working on
                    improving my skillset, and becoming a better problem solver, one problem at a time. 
                </p>
                <p>
                    My work ethic speaks for itself, and I always strive to be the best version of myself!
                </p>

            </div>
        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faAngular} color='#DD0031'/>
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
                </div>


            </div>

        </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default About