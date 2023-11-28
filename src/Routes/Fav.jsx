import React, { useContext } from 'react'
import Card from '../components/Card'
import { ContextGlobal } from '../utils/global.context'

const Favs = () => {

    const { theme, favorites } = useContext(ContextGlobal)

    return (
        <div className={theme === 'dark' ? 'dark' : ''} >
            <div style={{padding: '.2rem 0 3rem' }}>
                <h1>Dentists Favs</h1>
                <div className='card-grid'>
                    {favorites.length > 0 ? (
                        favorites.map((favorite) => (
                            <Card key={favorite.id} data={favorite} isFavorite={true} />
                        ))
                    ) : (
                        <h2>No favorite dentists found.</h2>
                    )}
                </div>
            </div>
            
        </div >
    )
}

export default Favs

