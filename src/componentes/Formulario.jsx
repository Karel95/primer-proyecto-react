import {useState} from 'react';


export const AddTask = ({addTask}) => {
    const [inputValue, setinputValue] = useState('')
    const onInputChange = (event) => {
        setinputValue(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        addTask(inputValue)
        setinputValue('')
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
