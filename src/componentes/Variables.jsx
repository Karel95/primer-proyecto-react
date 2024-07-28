import './Variables.css'

const string = "esto es una cadena de texto"
const number = 1234
const array = ['desarrollo web', "videojuegos", `criptomonedas`, 1995]
const booleano = true //no se renderiza en React
const funcion = ()=> 1+2

//Los sgtes., al ser objetos, no se pueden pasar como hijos de React:
const objeto = {nombre: 'programador', edad: 29}
const fecha = new Date()
//Solo se pueden pasar usando el método JSON.stringify().

export const Variables = () => {
    return (
        <>
        <h1>{ string }</h1>
        <h2>{ number }</h2>
        <h3>{ array }</h3>
        <h4>{ booleano }</h4>
        <h5>{ funcion() }</h5>
        </>
    );
}

//Las etiquetas vacías indican la presencia de Fragment para poder añadir mas de un elemento padre.
