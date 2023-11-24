import { createContext, useEffect, useMemo, useState } from "react"
import axios from "axios"

export const initialState = { theme: "", data: [] }
export const ContextGlobal = createContext()

const BASE_URL = 'https://jsonplaceholder.typicode.com/users'

export const ContextProvider = ({ children }) => {

    const [allDentist, setAllDentist] = useState([])
    const [dentist, setDentist] = useState({})
    const [error, setError] = useState('')

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


    const [errorState, setErrorState] = useState(error)

    useEffect(() => {
        setErrorState(error)
    }, [error])

    const contextValue = useMemo(() => ({
        allDentist,
        getAllDentist,
        getDentistById, 
        error: errorState
    }), [allDentist, errorState])

    return (
        <ContextGlobal.Provider value={contextValue}>
            {children}
        </ContextGlobal.Provider>
    )
}


