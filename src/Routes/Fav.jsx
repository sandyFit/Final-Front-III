import React from 'react'
import Card from '../components/Card'

// Este componente deberá ser estilado como 'dark' o 'light' dependiendo del theme del Context
const Favs = () => {
    // Retrieve favorites from localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []

    return (
        <>
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
        </>
    )
}

export default Favs
