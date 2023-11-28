import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from '../utils/global.context'
import '../assets/navbar.css'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

    const { theme, toggleTheme } = useContext(ContextGlobal)

    return (
        <nav className={theme === 'dark' ? 'dark' : ''}>  
            <div className="logo" >
                <span>D</span> <p>H Odonto</p>
            </div>

            <div className="links">
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to='/contacto'>Contact</Link>
                    <Link to='/favs'>Fav</Link>
                </ul>

                <button onClick={toggleTheme}>
                    {theme === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
                </button>
            </div>
           
        </nav>
    )
}

export default Navbar