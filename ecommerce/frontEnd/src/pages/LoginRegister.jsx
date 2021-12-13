import React from 'react'

export default function LoginRegister() {
  return (
    <div>
      <h1>Login</h1>
      <label htmlFor='user'>Username</label>
      <input id='user' type='text'/>
      <label>Password</label>
      <input id='password' type='password' />
      <button>Login</button>
      <h1>Register</h1>
      <label htmlFor='userRegister'>Username</label>
      <input id='userRegister' type='text'/>
      <label>Password</label>
      <input id='password' type='password' />
      <button>Register</button>
    </div>
  )}