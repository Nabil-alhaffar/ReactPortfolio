import './index.scss'
import { Link } from 'react-router-dom';
import resume from '../../assets/docs/resume.pdf'
import TagCloud from 'TagCloud'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { Color } from 'three'
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
            "Microsoft Azure",
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
                With a strong foundation in full stack .NET development, complemented by advanced skills in Angular and React frameworks, I offer a comprehensive approach to web and mobile application development. My experience encompasses designing and implementing scalable solutions, optimizing performance, and ensuring seamless integration across all layers of the software stack. I thrive on tackling complex challenges and leveraging emerging technologies to deliver innovative solutions that drive business growth. Additionally, my collaborative nature and effective communication skills enable me to work seamlessly within interdisciplinary teams to achieve project objectives efficiently. From conceptualization to deployment and beyond, I am dedicated to delivering high-quality, user-centric applications that exceed client expectations and make a lasting impact in the digital landscape.                </p>
                
                <p>In addition to my technical expertise, I embody strong leadership and communication skills that enhance my ability to collaborate effectively within teams and lead projects to success. With excellent communication and interpersonal abilities, I foster a positive and inclusive work environment conducive to productivity and innovation. My natural inclination towards mentorship and guidance allows me to inspire and empower team members, driving collective growth and achieving shared objectives. Additionally, I excel in problem-solving and decision-making, leveraging critical thinking and adaptability to navigate challenges and drive projects forward. My leadership and soft skills complement my technical proficiency, enabling me to deliver comprehensive solutions that meet both technical requirements and organizational goals.</p>
                <p> Visit my  <a
               target='_blank'
               rel = "noreferrer"
               href = "https://www.linkedin.com/in/nabil-alhaffar-05037b107/"> linkedin</a> profile for more details, or otherwise feel free to download my resume for your convenience!</p>
                <Link  className='flat-button' to={resume} target="_blank" download="Nabil Alhaffar Resume.pdf" >Download PDF Resume</Link>

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