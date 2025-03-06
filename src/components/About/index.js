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
  My journey began in Damascus, Syria, where I grew up in a close-knit family. 
  As a child, I was always <span className='yspan'>curious</span>, constantly asking questions and exploring new interests. 
  I loved building things, whether it was assembling small gadgets or experimenting with ideas, 
  which sparked my <span className='yspan'>fascination with technology</span>. 
  Unfortunately, the outbreak of war made it unsafe to stay, and my family made the difficult decision to move. 
  We relocated to Amman, Jordan, where I completed my high school education and adapted to a new environment.
</p>

<p>
  A year later, I earned a scholarship to study at the University of Evansville in Indiana. 
  Supporting myself through college meant working in sales, where I built a strong side career in telecom, 
  earning a district manager role at a Metro by T-Mobile© franchise and later becoming a repeat 
  <span className='yspan'> top nationwide salesperson</span> at Charter Communications, Spectrum. 
  Simultaneously, I had the opportunity to co-op at GE Appliances in the Emerging Technologies and Innovations Department, 
  where I worked on creating <span className='yspan'>cutting-edge prototypes</span> from scratch, 
  earned <a className="ylink" href='https://patents.justia.com/inventor/nabil-alhaffar' target='_blank'>four patents</a>, 
  and gained hands-on experience in AI by training multiple models and working with real-world data. 
  Most importantly, I had a chance to work and learn with a great mentor and a wonderful set of colleagues who became family.
</p>

<p>
  Upon graduating, I continued working in sales while transitioning into 
  <span className='yspan'> software freelancing</span>, which has been my primary focus for a few years now 
  and provided me with an opportunity to be flexible while I fulfilled my other obligations. 
  Along the journey, I also had to navigate the complex process of seeking asylum and permanent residence in the U.S., 
  which, though challenging, reinforced my <span className='yspan'>resilience</span> and 
  <span className='yspan'> determination</span> to carve out my own path.
</p>


<p> 
  At the core of who I am, my values are centered around 
  <span className='yspan'> honesty</span>, <span className='yspan'>integrity</span>, 
  and a commitment to <span className='yspan'>giving my best</span> to those who choose to place trust in me. 
  Bodybuilding has become a lifestyle that teaches me discipline and resilience, 
  while chess sharpens my strategic thinking. 
  Reading fuels my love for self-improvement and habit-building, 
  and options trading ties it all together, challenging me to apply 
  <span className='yspan'> discipline</span>, <span className='yspan'>strategy</span>, 
  and <span className='yspan'>continuous learning</span>. 
  Since moving to California, I’ve developed a passion for nature and photography, 
  constantly seeking breathtaking landscapes to capture moments of beauty and wonder.
</p>  

<p>
  Feel free to explore my <Link className='ylink' color='#ffd700' to="/blog"> gallery</Link> and check out some of the views I've captured. 
  Don't go full pro on me—I'm still a rookie!
</p>

                {/* <p>
                With a demeanor defined by quiet confidence and an insatiable curiosity, I approach every challenge with a problem-solving mindset, always striving to refine my skills and explore new technologies. My commitment to continuous improvement isn't just about professional growth—it’s a mindset that shapes everything I do. Whether in work or personal pursuits, I push boundaries, seek innovation, and aim to make a tangible impact.      </p> */}
                {/* <p>
                With a <span className='yspan'>strong work ethic</span> as my guiding principle, I prioritize self-improvement and consistently push the boundaries of what's possible in my field. By embodying the ethos of continuous improvement in every aspect of my work, I not only strive to meet expectations but surpass them, driving both personal and professional growth in the process.                </p> */}
               
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
            <Stars className = "stars"/>

        </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default About