import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { showAlert } from '../utils/showAlert'
import { ContextGlobal } from '../utils/global.context'


const Card = ({ data, isFavorite }) => {

    const { name, username, id } = data
    const { favorites, addFavorite } = useContext(ContextGlobal)

        const handleFavorite = () => {
            if (!isFavorite) {
                const favoriteCard = {
                    name,
                    username,
                    id,
                }

                const isAlreadyFavorite = favorites.some((fav) => fav.id === id)

                if (!isAlreadyFavorite) {
                    addFavorite(favoriteCard)
                    showAlert('Card added to favorites!', 'success')
                }
                else {
                    showAlert('Card is already in favorites!', 'warning')
                }
            }
            else {
                removeFavorite(id)
                showAlert('Card removed from favorites!', 'info')
            }
        }

    return (
        <div className='card'>
            <img src='./images/doctor.jpg' alt='doctor avatar' style={{ maxWidth: '100%', height: 'auto' }} />

            <Link to={`/dentist/${id}`}>
                <h3 style={{textAlign: 'center'}}>{name}</h3>
            </Link>
            <p>{username}</p>
            <p>{id}</p>

            {!isFavorite && (
                <button onClick={ handleFavorite } className='favButton'>
                    Add fav ⭐
                </button>
            )}
        </div>
    )
}

export default Card
