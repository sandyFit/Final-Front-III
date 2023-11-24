import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from '../utils/global.context'
import '../assets/navbar.css'


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
                    <Link to='/home'>Home</Link>
                    <Link to='/detail'>Detail</Link>
                    <Link to='/contacto'>Contact</Link>
                    <Link to='/favs'>Fav</Link>
                </ul>

                {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
                <button style={{cursor: 'pointer'}} onClick={toggleTheme}>Change theme</button>
            </div>
           
        </nav>
    )
}

export default Navbar