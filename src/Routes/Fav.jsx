// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import Card from '../components/Card'
import { ContextGlobal } from '../utils/global.context'

// Este componente deberá ser estilado como 'dark' o 'light' dependiendo del theme del Context
const Favs = () => {

    // Change theme
    const { theme } = useContext(ContextGlobal)
    // Retrieve favorites from localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []

    return (
        <div className={theme === 'dark' ? 'dark' : ''}>
            <h1>Dentists Favs</h1>
            <div className='card-grid'>
                {favorites.length > 0 ? (
                    favorites.map((favorite) => (
                        <Card key={favorite.id} data={favorite} isFavorite={true} />
                    ))
                ) : (
                    <p>No favorite dentists found.</p>
                )}
            </div>
        </div >
    )
}

export default Favs

