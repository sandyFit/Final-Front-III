import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from '../utils/global.context'
import { showAlert } from '../utils/showAlert'

const Detail = () => {
    const { id } = useParams()
    const { getDentistById, dentist, error } = useContext(ContextGlobal)
    const { theme } = useContext(ContextGlobal)

    useEffect(() => {
        if (error) {
            showAlert(`Error fetching data: ${error}`, 'error')
        }
        else {
            getDentistById(id)
        }
    }, [id, getDentistById, error])

    return (
        <div className={theme === 'dark' ? 'dark' : ''}>
            <div style={{ height: '51vh', padding: '2rem 6rem 0' }}>
                { dentist ? (
                    <>
                        <h1>Meet Dr. N° { id }</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Website</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{ dentist.name }</td>
                                    <td>{ dentist.email }</td>
                                    <td>{ dentist.phone }</td>
                                    <td>{ dentist.website }</td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                ) : (
                    <p>{ error || 'Loading...' }</p>
                )}
            </div>
        </div>
    )
}

export default Detail
