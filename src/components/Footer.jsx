// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { ContextGlobal } from '../utils/global.context'
import '../assets/footer.css'

const Footer = () => {

    const {theme} = useContext(ContextGlobal)

    return (
        <footer className={theme === 'dark' ? 'dark' : ''}>
            <div className="logo-box">
                <p>Powered by</p>
                <img src='./images/DH.png' alt='DH-logo' />               
            </div>

            <div className="socials">
                <img className='social-icon' src="./images/ico-facebook.png" alt="facebook icon" />
                <img className='social-icon' src="./images/ico-instagram.png" alt="instagram icon" />
                <img className='social-icon' src="./images/ico-tiktok.png" alt="tiktok icon" />
                <img className='social-icon' src="./images/ico-whatsapp.png" alt="whatsapp icon" />
            </div>
            
        </footer>
    )
}

export default Footer