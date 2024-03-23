import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss'
const Home =()=>{

    return (
        <div className="container home-page">
            <div className="text-zone">
                
            <h1>Hi, <br/> I'm
            <img src={LogoTitle} alt="developer"/> 
            abil
            <br/>
            Web Developer   
            </h1>
            <h2>FrontEnd Developer/ JavaScript Expert/ Youtuber</h2>
            <Link to="/contact" className='flat-button' >Contact Me</Link>
            </div>    
            
        </div>

    );
}

export default Home; 