import React from 'react'
import { useState } from 'react'


export const UseForm = (initialForm = {}) => {

    const [form, setForm] = useState(initialForm)
    
    const onInputChange = ({target}) => {
        const {name, value} = target
        setForm({
            ...form,
            [name]: value
        })
    }
    
    return {
        ...form, 
        form,
        onInputChange
    }
}

//No sirve tampoco
