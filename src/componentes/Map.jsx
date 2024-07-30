import {useState} from 'react';

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
        {nombre: 'Instalación', visto: true, aprobado: true},
        {nombre: 'Vite', visto: true, aprobado: true},
        {nombre: 'Componentes', visto: true, aprobado: true},
        {nombre: 'Variables', visto: true, aprobado: true},
        {nombre: 'Props', visto: true, aprobado: true},
        {nombre: 'Eventos', visto: true, aprobado: true},
        {nombre: 'useState', visto: true, aprobado: true},
        {nombre: 'Condicionales', visto: true, aprobado: true},
        {nombre: 'Redux', visto: false, aprobado: true},
        {nombre: 'customHooks', visto: false, aprobado: false},
    ]
    const [Arreglo, setArreglo] = useState(Secciones)
    return (
        <>
            <h1>Contenido:</h1>
            <ol>
                {Arreglo.map(item => <Items key={item.nombre} nombre={item.nombre} visto={item.visto} aprobado={item.aprobado}></Items>)}
            </ol>
        </>
    )
}
