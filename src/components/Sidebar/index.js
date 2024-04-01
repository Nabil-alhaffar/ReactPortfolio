import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import sideLogo from '../../assets/images/side-logo.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faEnvelope, faGear, faHome,faSuitcase,faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'
import profilePic from '../../assets/images/portfolioPic.png'



const Sidebar = ()=> {
   const [showNav, setShowNav]= useState(false);
   return (
    <div className='nav-bar'>
         <Link className='logo' to='/' >
            <img src={profilePic}  class="rounded-circle" alt = "logo"/>
            {/* {<img className='sub-logo' src={LogoSubtitle} alt = "Nabil" /> } */}
         </Link>  
         <nav className={showNav? 'mobile-show' : ''}>
         <NavLink exact ="true" activeclassname = "active" to="/" onClick={()=> setShowNav(false)}>
            <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
         </NavLink>
         <NavLink exact ="true" activeclassname = "active" className="portfolio-link" to="/portfolio" onClick={()=> setShowNav(false)} >
            <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e'/>
         </NavLink>
         <NavLink exact ="true" activeclassname = "active" to="/skills" className={"skills-link"} onClick={()=> setShowNav(false)}>
            <FontAwesomeIcon icon={faGear} color='#4d4d4e'/>
         </NavLink>
         <NavLink exact ="true" activeclassname = "active" className="about-link" to="/about" onClick={()=> setShowNav(false)} >
            <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
         </NavLink>
         <NavLink exact ="true" activeclassname = "active" className="contact-link" to="/contact" onClick={()=> setShowNav(false)}
>
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
         </NavLink>
         <FontAwesomeIcon 
            onClick={()=> setShowNav(false)}
            icon = {faClose}
            color='#ffd700'
            size='3x'
            className='close-icon'
         />
         </nav>
        <ul>
         <li>
            <a
               target='_blank'
               rel = "noreferrer"
               href = "https://www.linkedin.com/in/nabil-alhaffar-05037b107/">

               <FontAwesomeIcon icon = {faLinkedin} color= "#4d4d4e" className='anchor-icon'/>
            </a>
         </li>
         <li>
            <a
               target='_blank'
               rel = "noreferrer"
               href = "https://github.com/Nabil-alhaffar">

               <FontAwesomeIcon icon = {faGithub} color= "#4d4d4e" className='anchor-icon'/>
            </a>
         </li>
         <li>
            <a
               target='_blank'
               rel = "noreferrer"
               href = "https://twitter.com/nabil_haffar">

               <FontAwesomeIcon icon = {faXTwitter} color= "#4d4d4e" className='anchor-icon'/>
            </a>
         </li>
         <li>
            <a
               target='_blank'
               rel = "noreferrer"
               href = "https://www.instagram.com/nabilalhaffar/">

               <FontAwesomeIcon icon = {faInstagram} color= "#4d4d4e" className='anchor-icon'/>
            </a>
         </li>
        </ul>
        <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>

    )
   }
export default Sidebar;