import React from 'react'
import { UseForm } from '../hooks/useForm.js'


export const Form = () => {

    const initialForm = {
        email: '',
        password: ''
    }

    const [email, password, form, onInputChange] = UseForm(initialForm)

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(form)
    }

    return (
        <form onSubmit={onSubmit}>
    <div className="mb-3">
        <label 
            htmlFor="exampleInputEmail1" 
            className="form-label">Email address</label>
        <input 
            type="email" 
            className="form-control" 
            name='email'
            value={email}
            onChange={onInputChange} 
            placeholder='email'/> 
        <div 
            id="emailHelp" 
            className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
        <label 
            htmlFor="exampleInputPassword1" 
            className="form-label">Password</label>
        <input 
            type="password" 
            className="form-control" 
            name='password'
            value={password}
            onChange={onInputChange} 
            placeholder='password'/>
    </div>
    <div className="mb-3 form-check">
        <input 
            type="checkbox" 
            className="form-check-input" 
            id="exampleCheck1"/>
        <label 
            className="form-check-label" 
            htmlFor="exampleCheck1">Check me out</label>
    </div>
    <button 
            type="submit" 
            className="btn btn-primary">Submit
    </button>
</form>
  )
}

//No sirve un carajo jjj