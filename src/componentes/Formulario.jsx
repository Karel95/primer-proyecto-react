import {useState} from 'react';


export const AddTask = () => {
    const [inputValue, setinputValue] = useState('')
    const onInputChange = (event) => {
        setinputValue(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        console.log(inputValue)
    }
    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Agregar Tarea"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}
