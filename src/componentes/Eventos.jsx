import {useState} from 'react';

export const Eventos = () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <>
            <h1>Click Counter</h1>
            <h2>{count}</h2>
            {/* onClick={handleClick}
            onClick={function (event) {console.log(event)}}
            onClick={(event) => handleClick(event, 'otro argumento')} */}
            <button onClick={handleClick}>Click me!</button>
        </>
    )
  }

//Uno de los hooks mas importantes:
//const [count, setCount] = useState(0)
