import { useEffect, useState } from "react";

export const UserApp = ({endPoint}) => {
    const [users, setUsers] = useState('users')

    const fecthUsers = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
            const data = await response.json()
            console.log(data)
            setUsers(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        fecthUsers()
    }, [endPoint])

    const handleFetch = () => {
        setUsers('comments')
    }

    return (
        <>
        <h1>Lista de usuarios:</h1>
        <ul>
            {users.map(user => <li key={user.id}>Nombre: {user.name}, Email: {user.email}</li>)}
        </ul>
        <button onClick={handleFetch}>Teléfono</button>
        </>
    )
}
