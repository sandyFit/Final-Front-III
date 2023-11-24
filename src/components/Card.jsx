import React from 'react'
import { Link } from 'react-router-dom'
import { showAlert } from '../utils/showAlert'

const Card = ({ data, isFavorite }) => {
    const { name, username, id } = data

    const addFav = () => {
        if (!isFavorite) {
            // Add Card to localStorage
            const favoriteCard = {
                name,
                username,
                id,
            }

            // Retrieve existing favorites from localStorage
            const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || []

            // Check if Card is already a favorite
            const isAlreadyFavorite = existingFavorites.some((fav) => fav.id === id)

            if (!isAlreadyFavorite) {
                // Add Card to favorites
                const newFavorites = [...existingFavorites, favoriteCard]
                localStorage.setItem('favorites', JSON.stringify(newFavorites))
                showAlert('Card added to favorites!', 'success')
            }
            else {
                showAlert('Card is already in favorites!', 'warning')
            }
        }
    }

    return (
        <div className='card'>
            <img src='./images/doctor.jpg' alt='doctor avatar' style={{ maxWidth: '100%', height: 'auto' }} />

            <Link to={`/dentist/${id}`}>
                <h3>{name}</h3>
            </Link>
            <p>{username}</p>
            <p>{id}</p>

            {!isFavorite && (
                <button onClick={addFav} className='favButton'>
                    Add fav ⭐
                </button>
            )}
        </div>
    )
}

export default Card
