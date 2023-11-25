import { createContext, useEffect, useMemo, useState } from "react"
import axios from "axios"

// eslint-disable-next-line react-refresh/only-export-components
export const initialState = { theme: "light", data: [] }
export const ContextGlobal = createContext(undefined)

const BASE_URL = 'https://jsonplaceholder.typicode.com/users'

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {

    const [allDentist, setAllDentist] = useState([])
    // eslint-disable-next-line no-unused-vars
    const [dentist, setDentist] = useState({})
    const [error, setError] = useState('')
    const [theme, setTheme] = useState(initialState.theme)

    const getAllDentist = async () => {
        try {
            const response = await axios.get(BASE_URL)
            setAllDentist(response.data)
        }
        catch (err) {
            setError(err.message)
        }
    }
    
    const getDentistById = async (id) => {
        try {
            const response = await axios.get(`${BASE_URL}/${id}`)
            setDentist(response.data[0])
        }
        catch (err) {
            setError(err.message)
        }
    }

    const toggleTheme = () => {
        console.log('Theme toggled')
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }


    const [errorState, setErrorState] = useState(error)

    useEffect(() => {
        setErrorState(error)
    }, [error])

    const contextValue = useMemo(() => ({
        allDentist,
        getAllDentist,
        getDentistById, 
        theme,
        toggleTheme,
        error: errorState
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [allDentist, errorState])

    return (
        <ContextGlobal.Provider value={contextValue}>
            {children}
        </ContextGlobal.Provider>
    )
}


