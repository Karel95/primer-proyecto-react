import {useState} from 'react';
import { AddTask } from './Formulario';

const Items = ({ nombre, visto, aprobado }) => {
    return (
        <li>
            {nombre}
            {visto ? '✅' : '❌'}
            {aprobado && '✔'}
        </li>
    )
}

export const Map = () => {
    let Secciones = [
        {id: 0, nombre: 'Instalación', visto: true, aprobado: true},
        {id: 1, nombre: 'Vite', visto: true, aprobado: true},
        {id: 2, nombre: 'Componentes', visto: true, aprobado: true},
        {id: 3, nombre: 'Variables', visto: true, aprobado: true},
        {id: 4, nombre: 'Props', visto: true, aprobado: true},
        {id: 5, nombre: 'Eventos', visto: true, aprobado: true},
        {id: 6, nombre: 'useState', visto: true, aprobado: true},
        {id: 7, nombre: 'Condicionales', visto: true, aprobado: true},
        {id: 8, nombre: 'Redux', visto: false, aprobado: true},
        {id: 9, nombre: 'customHooks', visto: false, aprobado: false},
    ]
    const [arreglo, setArreglo] = useState(Secciones)
    const onAddTask = (val) => {
        let valor = val.trim()
        if (valor < 1) return
        const envio = {
            id: arreglo.length,
            nombre: val,
            visto: false,
            aprobado: false
        }
        setArreglo([...arreglo, envio])
    }
    return (
        <>
            <h1>Contenido:</h1>
            <ol>
                {arreglo.map(item => <Items key={item.id} nombre={item.nombre} visto={item.visto} aprobado={item.aprobado}></Items>)}
            </ol>
            <AddTask addTask={onAddTask}></AddTask>
            <button>Add</button>
        </>
    )
}
