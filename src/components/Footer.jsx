import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="logo-box">
                <p>Powered by</p>
                <img className='footer-img' src='./images/DH.png' alt='DH-logo' />
                <img className='footer-img' src="./images/ico-facebook.png" alt="facebook icon" />
            </div>

            <div className="socials">
                <img className='footer-img' src="./images/ico-facebook.png" alt="facebook icon" />
                <img className='footer-img' src="./images/ico-instagram.png" alt="instagram icon" />
                <img className='footer-img' src="./images/ico-tiktok.png" alt="tiktok icon" />
                <img className='footer-img' src="./images/ico-whatsapp.png" alt="whatsapp icon" />
            </div>
            
        </footer>
    )
}

export default Footer