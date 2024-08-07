import React from 'react'
import { useState } from 'react'


export const Form = () => {

  const [form, setForm] = useState({
    email: 'karelh2207@gmail.com',
    password: '1234'
  })

  const {email, password} = form

  const onInputChange = ({target}) => {
    const {name, value} = target
    setForm({
      ...form,
      [name]: value
    })
  }

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
      onChange={onInputChange}/>
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
      onChange={onInputChange}/>
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
    className="btn btn-primary">Submit</button>
</form>
  )
}

