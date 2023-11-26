import { createContext, useReducer, useCallback } from "react"
import {reducer} from '../utils/reducer'
import axios from "axios"

export const initialState = {
    theme: "light",
    allDentist: [],
    dentist: {},
    favorites: [],
    error: ''
}
export const ContextGlobal = createContext(undefined)

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const ContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const { allDentist, dentist, error, favorites, theme } = state


    const getAllDentist = useCallback(async () => {
        try {
            const response = await axios.get(`${BASE_URL}/users`)
            dispatch({
                type: 'SET_ALL_DENTIST',
                payload: response.data
            })
        }
        catch (err) {
            dispatch({
                type: 'SET_ERROR',
                payload: err.message
            })
        }
    }, [dispatch])

    
    const getDentistById = useCallback(async (id) => {
        try {
            const response = await axios.get(`${BASE_URL}/users/${id}`)
            console.log(response.data)

            dispatch({
                type: 'SET_DENTIST',
                payload: response.data
            })
        }
        catch (err) {
            dispatch({
                type: 'SET_ERROR',
                payload: err.message
            })
        }
    }, [dispatch])

    const addFavorite = (favoriteCard) => {
        dispatch({
            type: 'ADD_FAVORITE',
            payload: favoriteCard,
        })
    
        // Update localStorage
        const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || []
        const newFavorites = [...existingFavorites, favoriteCard]
        localStorage.setItem('favorites', JSON.stringify(newFavorites))
    }

    const toggleTheme = () => {
        console.log('Theme toggled')
        dispatch({
            type: 'TOGGLE_THEME'
        })
    }


    const contextValue = {
        allDentist,
        getAllDentist,
        dentist,
        getDentistById, 
        theme,
        toggleTheme,
        favorites,
        addFavorite,
        error
    }

    return (
        <ContextGlobal.Provider value={ contextValue }>
            { children }
        </ContextGlobal.Provider>
    )
}


