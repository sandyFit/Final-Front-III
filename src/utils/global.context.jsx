import { createContext, useEffect, useMemo, useState } from "react"
import axios from "axios"

export const initialState = { theme: "light", data: [] }
export const ContextGlobal = createContext(undefined)

const BASE_URL = 'https://jsonplaceholder.typicode.com/users'

export const ContextProvider = ({ children }) => {

    const [allDentist, setAllDentist] = useState([])
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
            console.log(response.data)
            setDentist(response.data)
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
        dentist,
        getDentistById, 
        theme,
        toggleTheme,
        error: errorState
    }), [allDentist, errorState, toggleTheme])

    return (
        <ContextGlobal.Provider value={contextValue}>
            {children}
        </ContextGlobal.Provider>
    )
}


