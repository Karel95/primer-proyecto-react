import React from 'react'
import { useCounter } from '../hooks/useCounter.js';


export const Hooks = () => {

  const {contador, inc, reset, dec} = useCounter(0)

  return (
    <>
    <h1>Contador: {contador}</h1>
    <button className='btn btn-primary' onClick={() => inc(1)}>+1</button>
    <button className='btn btn-danger' onClick={() => reset()}>Reset</button>
    <button className='btn btn-primary' onClick={() => dec(1, false)}>-1</button>
    </>
  )
}
