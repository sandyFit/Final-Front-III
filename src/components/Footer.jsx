import React, { useContext } from 'react'
import { ContextGlobal } from '../utils/global.context'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import '../assets/footer.css'


const Footer = () => {

    const {theme} = useContext(ContextGlobal)

    return (
        <footer className={theme === 'dark' ? 'dark' : ''}>
            <div className="logo-box">
                <p>Powered by</p>
                <img
                    src={theme === 'dark' ? '/images/DH-white.png' : '/images/DH.png'}
                    alt={theme === 'dark' ? 'DH-dark-logo' : 'DH-light-logo'}
                />
            </div>

            <div className="copyright">
                <p>
                    Made with <FavoriteIcon style={{ fontSize: 16, color: 'crimson' }} /> by Sandra Ramos & Andrea Romero
                </p>
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
