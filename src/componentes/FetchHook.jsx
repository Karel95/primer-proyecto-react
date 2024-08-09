import React from 'react'
import { useFetch } from '../hooks/useFetch.js'

export const FetchHook = () => {
    const {data, isLoading, errors} = useFetch('https://jsonplaceholder.typicode.com/users')
  return (
    <>
    {data}
    </>
  )
}
//no sirve