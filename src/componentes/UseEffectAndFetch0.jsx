import { useEffect, useState } from "react";

export const UserApp = () => {
    const [users, setUsers] = useState([])

    const fecthUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            console.log(data)
            setUsers(data)
        } catch (error) {
            console.error(error)
        }
    }

    const handleFetch = () => {
        fecthUsers()
    }

    //useEffect(()=>{}, [])
    useEffect(()=>{
        fecthUsers()
    }, [])

    return (
        <>
        <h1>Lista de usuarios:</h1>
        <ul>
            {users.map(user => <li key={user.id}>Nombre: {user.name}, Email: {user.email}</li>)}
        </ul>
        </>
    )
}

