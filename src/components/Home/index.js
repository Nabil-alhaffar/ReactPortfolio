import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
// import Logo from './Logo';
import Loader from 'react-loaders';
import './index.scss'
const Home =()=>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a','b','i','l']
    const jobArray = ['F','u','l','l', '-', 's','t','a','c','k', ' ', 'D','e','v','e','l','o','p','e','r','.']
    
    // useEffect(()=> {
    //     return setTimeout(()=>{
    //         setLetterClass('text-animate-hover')
    //     },4000)
    // }, [])
    useEffect(() => {
        // Set the timeout and store the timer ID
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    
        // Return a cleanup function to cancel the timeout when the component unmounts
        return () => {
            clearTimeout(timerId); // Cancel the timeout
        };
    }, []);
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                
            <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br/>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'</span>
            <span className={`${letterClass} _15`}>m</span>

            <img src={LogoTitle} alt="developer"/> 
            <AnimatedLetters letterClass={letterClass} 
            strArray={nameArray}
            idx={17}
            />
            <br/>
            <span>
            <AnimatedLetters letterClass={letterClass} strArray={jobArray}idx={22}/>
            </span>
            </h1>
            <h2>FrontEnd Developer/ JavaScript Expert/ Youtuber</h2>
            <Link to="/contact" className='flat-button' >Contact Me</Link>
            </div>    
            {/* <Logo/> */}
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Home; 