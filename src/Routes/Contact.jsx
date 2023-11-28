import React from 'react'
import { Form } from '../components/Form'
import { ContextGlobal } from '../utils/global.context'
import { useContext } from 'react'
import '../assets/form.css'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
    // eslint-disable-next-line no-unused-vars, no-undef
    const { theme } = useContext(ContextGlobal)
    return (
        <div className={theme === 'dark' ? 'dark' : ''}>
            <div className='contact-box'>
                <h1>Want to know more?</h1>
                <p>Send us your questions and we will contact you</p>
                <Form />
            </div>
            
        </div>
    )
}

export default Contact