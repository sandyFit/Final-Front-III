// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { ContextGlobal } from '../utils/global.context'
import '../assets/footer.css'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

const Footer = () => {

    const {theme} = useContext(ContextGlobal)

    return (
        <footer className={theme === 'dark' ? 'dark' : ''}>
            <div className="logo-box">
                <p>Powered by</p>
                <img src='./images/DH.png' alt='DH-logo' />               
            </div>

            <div className="socials">
                <FacebookIcon style={{ fontSize: 40 }} />
                <InstagramIcon style={{ fontSize: 40 }} />
                <LinkedInIcon style={{ fontSize: 40 }} />
                <WhatsAppIcon style={{ fontSize: 40 }} />
                
            </div>
            
        </footer>
    )
}

export default Footer