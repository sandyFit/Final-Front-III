import React from 'react'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

    return (
        <nav>  
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
                <button >Change theme</button>
            </div>
           
        </nav>
    )
}

export default Navbar