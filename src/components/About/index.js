import './index.scss'
import {  useEffect,useState } from 'react'
import AnimatedLetters from "../AnimatedLetters"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import Stars from '../Stars'
import { Link } from 'react-router-dom'

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
                <p>
                As a dedicated full-stack developer, my primary focus lies in mobile development and ASP.NET Core, where I've cultivated a wealth of experience and expertise over the years. In addition to mastering these core technologies, I've honed my proficiency in advanced front-end frameworks like Angular and React, allowing me to deliver comprehensive solutions that seamlessly integrate across all layers of the software stack.                </p>
                <p>
                With a demeanor characterized by quiet confidence and an insatiable curiosity, I approach each challenge with a steadfast commitment to refining my problem-solving skills. This perpetual quest for improvement serves as the driving force behind my pursuit of innovative solutions, as I continuously seek out new methodologies and technologies to enhance my capabilities and deliver tangible results.                </p>
                <p>
                My reputation as a diligent and dedicated professional is built upon a foundation of unwavering commitment to excellence. With a strong work ethic as my guiding principle, I prioritize self-improvement and consistently push the boundaries of what's possible in my field. By embodying the ethos of continuous improvement in every aspect of my work, I not only strive to meet expectations but surpass them, driving both personal and professional growth in the process.                </p>
                <p> 
                 Outside of work, my interests span across various domains, reflecting my diverse personality. Bodybuilding has become more than just a hobby—it's a lifestyle that allows me to push my limits physically and mentally, striving for continuous improvement. Chess provides a different kind of challenge, requiring strategic thinking and foresight to outmaneuver opponents. I'm also an avid reader, finding solace and inspiration in books that teach genuine self-improvement and good habbit creation. Since moving to California, I've grown very fond of nature and photography, so I try seek out breathtaking views, hoping to capture moments of beauty and wonder where I can. 
                 Feel free to explore my <Link className='ylink' color='#ffd700' to="/blog">gallery</Link> and check out some of the views I've captured! 

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
            <Stars className = "star"/>

        </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default About