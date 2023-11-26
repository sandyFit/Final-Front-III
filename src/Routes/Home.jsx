import React, { useContext, useEffect } from 'react'
import Card from '../components/Card'
import { ContextGlobal }  from '../utils/global.context'
import {showAlert} from '../utils/showAlert'

const Home = () => {
    const {
        allDentist,
        error,
        getAllDentist,
        theme
    } = useContext(ContextGlobal)


    useEffect(() => {
        if (error)  {
            showAlert(`Error fetching data: ${error}`, 'error')
        }
        else {
            getAllDentist()
        }
    }, [error, getAllDentist])


    return (
        <main className={ theme === 'dark' ? 'dark' : '' }>
            <h1>Home</h1>   
            
            <div className='card-grid'>
                { allDentist.length
                    ? allDentist.map((dentist, index) => <Card key={index} data={dentist} />)
                    : null }
            </div>

        </main>
    );
}

export default Home
