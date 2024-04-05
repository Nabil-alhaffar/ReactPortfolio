import './index.scss'
import { Link } from 'react-router-dom';
import resume from '../../assets/docs/resume.pdf'
import TagCloud from 'TagCloud'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { Color } from 'three'
import Stars from '../Stars'
const Skills = ()=>{
    // const downloadFile = () => {
    //     const link = this.renderer.createElement('a');
    // link.setAttribute('target', '_blank');
    // link.setAttribute('href', '../../assets/docs/resume.pdf');
    // link.setAttribute('download', 'Resume.PDF');
    // link.click();
    // link.remove();
    //   }

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

    useEffect(()=>{
    //   return()=> {
        const container = ".tagcloud"
        const texts = [
            "ASP.NET",
            "ASP.NET Core",
            "C#",
            "Angular",
            "React",
            "C/C++",
            "OAuth",
            "Azure",
            "AWS",
            "JWT",
            "Python",
            "SQL",
            "NoSQL",
            "APIs",
            "CI/CD",
            "TypeScript",
            "NodeJS",
            "JavaScript",
            "CSS",
            "Tailwind",
            "HTML",
            "Xamarin",
            "Vue",
            "Git",
            "SQL",
            "NoSQL"
        ];
        const options = {
            radius:300,
            maxSpeed: "fast",
            initSpeed: "normal",
            keep:true,
        };
        TagCloud(container,texts,options);
        
    }, []);
    return (
        <>
        <div className='container skills-page'>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['S','k','i','l','l','s' , ' ',
                     '&', ' ', 'E','x','p','e','r','i','e','n','c','e' ]}
                    idx={15}
                    />
                </h1>
                <p>
                With a strong foundation in <span className='yspan'>full stack .NET development</span>, complemented by advanced skills in <span className='yspan'>Angular</span>  and <span className='yspan'>React</span> frameworks, I offer a comprehensive approach to <span className='yspan'>web</span> and <span className='yspan'>mobile application</span> development. My experience encompasses designing and implementing <span className='yspan'>scalable solutions</span>, <span className='yspan'>optimizing performance</span>, and ensuring <span className='yspan'>seamless integration</span> across all layers of the software stack. I thrive on tackling complex challenges and leveraging emerging technologies to deliver <span className='yspan'>innovative solutions</span> that drive business growth. Additionally, my <span className='yspan'>collaborative nature</span> and <span className='yspan'> communication skills</span>  enable me to work seamlessly within interdisciplinary teams to achieve project objectives efficiently. From conceptualization to deployment and beyond, I am dedicated to delivering high-quality, <span className='yspan'>user-centric</span> applications that exceed client expectations and make a <span className='yspan'>lasting impact</span> in the digital landscape.                </p>
                
                <p>In addition to my technical expertise, I embody strong <span className='yspan'>leadership</span> and communication skills that enhance my ability to collaborate effectively within teams and lead projects to <span className='yspan'>success</span>. With excellent <span className='yspan'>interpersonal abilities</span>, I foster a <span className='yspan'>positive</span> and <span className='yspan'>inclusive</span> work environment conducive to productivity and innovation. My natural inclination towards mentorship and guidance allows me to <span className='yspan'>inspire</span> and <span>empower</span> team members, driving <span className='yspan'>collective growth</span> and achieving <span className='yspan'>shared objectives</span>. </p>
                <p>Additionally, I excel in <span className='yspan'>problem-solving</span> and <span className='yspan'>decision-making</span>, leveraging critical thinking and <span className='yspan'>adaptability</span> to navigate challenges and drive projects forward. My <span className='yspan'>leadership</span> and <span className='yspan'>soft skills</span> complement my technical proficiency, enabling me to deliver comprehensive solutions that meet both <span className='yspan'>technical requirements</span> and <span className='yspan'>organizational goals</span>.</p>
                <p> Visit my  <a className='ylink'
               target='_blank'
               rel = "noreferrer"
               href = "https://www.linkedin.com/in/nabil-alhaffar-05037b107/"> linkedin</a> profile for more details, or otherwise feel free to download my resume for your convenience!</p>
                <Link  className='flat-button' to={resume} target="_blank" download="Nabil Alhaffar Resume" >Download PDF Resume</Link>

            </div>
            
            <div className='sphere-container'>
             <div className='text-sphere'>
                 <span className='tagcloud'></span>
             </div>
             
        </div>
        
        </div>
        <Loader type='pacman' />

        
        </>
    );


}
export default Skills;