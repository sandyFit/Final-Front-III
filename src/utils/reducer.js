export const SET_ALL_DENTIST = 'SET_ALL_DENTIST'
export const SET_DENTIST = 'SET_DENTIST'
export const SET_ERROR = 'SET_ERROR'
export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
export const SET_FAVORITES = 'SET_FAVORITES'
export const TOGGLE_THEME = 'TOGGLE_THEME'

export const reducer = (state, action) => {
    switch (action.type) {
        case SET_ALL_DENTIST:
            return { ...state, allDentist: action.payload }
        
        case SET_DENTIST:
            return { ...state, dentist: action.payload }
        
        case SET_ERROR:
            return { ...state, error: action.payload }
        
        case ADD_FAVORITE:
            return { ...state, favorites: [...state.favorites, action.payload] }

        case SET_FAVORITES:
            return { ...state, favorites: action.payload } 
        
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter((fav) => fav.id !== action.payload),
            }
                
        case TOGGLE_THEME:
            return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' }
        
        default:
            return state
    }
}
