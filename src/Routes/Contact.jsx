// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Form } from '../components/Form'
// eslint-disable-next-line no-unused-vars
import { ContextGlobal } from '../utils/global.context'
import { useContext } from 'react'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
    // eslint-disable-next-line no-unused-vars, no-undef
    const { theme } = useContext(ContextGlobal)
    return (
        <div className={ theme === 'dark' ? 'dark' : '' }>
            <h2>Want to know more?</h2>
            <p>Send us your questions and we will contact you</p>
            <Form/>
        </div>
    )
}

export default Contact