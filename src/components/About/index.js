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
                As a dedicated <span  className='yspan'>full-stack developer</span>, my primary focus lies in <span className='yspan'>mobile development</span>  and <span className='yspan'>ASP.NET Core</span> , where I've cultivated a decent amount of experience and expertise over the years. In addition to mastering these core technologies, I've honed my proficiency in advanced <span className='yspan'>front-end</span>  frameworks like <span className='yspan'>Angular</span> and <span className='yspan'>React</span>, allowing me to deliver comprehensive solutions that seamlessly integrate across all layers of the software stack.                </p>
                <p>
                With a demeanor characterized by <span className='yspan'>quiet confidence</span> and an <span className='yspan'>insatiable curiosity</span>, I approach each challenge with a <span className='yspan'>resolute commitment</span> to refining my problem-solving skills. This perpetual quest for improvement serves as the driving force behind my pursuit of <span className='yspan'>innovative solutions</span>, as I continuously seek out new methodologies and technologies to improve my skillset and deliver tangible results.                </p>
                <p>
                With a <span className='yspan'>strong work ethic</span> as my guiding principle, I prioritize <span className='yspan'>self-improvement</span> and consistently <span className='yspan'>push the boundaries</span> of what's possible in my field. By embodying the ethos of continuous improvement in every aspect of my work, I not only strive to meet expectations but <span className='yspan'>surpass</span> them, driving both personal and professional growth in the process.                </p>
                <p> 
                 Outside of work, my interests span across various domains, reflecting my diverse personality. <span className='yspan'>Bodybuilding</span> has become more than just a hobby—it's a lifestyle that allows me to push my limits physically and mentally everyday. <span className='yspan'>Chess</span> provides a different kind of challenge, requiring <span className='yspan'>strategic thinking</span> and foresight to outmaneuver opponents. I'm also an avid <span className='yspan'>reader</span>, finding solace and inspiration in books that teach genuine <span className='yspan'>self-improvement</span> and <span className='yspan'>good habit creation</span>. Since moving to California, I've grown very fond of <span className='yspan'>nature</span> and <span className='yspan'>photography</span>, so I try seek out breathtaking views, hoping to capture moments of beauty and wonder where I can. </p>
                 <p>Feel free to explore my <Link className='ylink' color='#ffd700' to="/blog">gallery</Link> and check out some of the views I've captured. Don't go full pro on me—I'm still a rookie!</p>
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