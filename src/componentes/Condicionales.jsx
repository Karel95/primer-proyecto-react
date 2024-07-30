const Items = ({nombre, visto, aprobado}) => {
    return(
        <li>
            {nombre}
            {visto ? '✅' : '❌'}
            {aprobado && '✔'}
        </li>
    )
}

export const Condicionales = () => {
    return (
        <>
            <h1>Contenido:</h1>
            <ol>
                <Items nombre="Instalación" visto={true} aprobado={true}></Items>
                <Items nombre="Vite" visto={true} aprobado={true}></Items>
                <Items nombre="Componentes" visto={true} aprobado={true}></Items>
                <Items nombre="Variables" visto={true} aprobado={true}></Items>
                <Items nombre="Props" visto={true} aprobado={true}></Items>
                <Items nombre="Eventos" visto={true} aprobado={true}></Items>
                <Items nombre="useState" visto={true} aprobado={true}></Items>
                <Items nombre="Condicionales" visto={true} aprobado={true}></Items>
                <Items nombre="Redux" visto={false} aprobado={true}></Items>
                <Items nombre="customHooks" visto={false} aprobado={false}></Items>
            </ol>
            <button>Click me!</button>
        </>
    )
  }

  