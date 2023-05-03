import React from 'react'
import  '../styles/Login.css'
const Login = () => {
  return (

        <div className="container">
            <h1 className='title'>Login Form</h1>
            <form className='login__form'>
                <input type='text' placeholder='Enter Email Id'/>
                <input type='text' placeholder='Enter Password:'/>
                <button>Login</button>
            </form>
            <p>Don’t have an account? <a href='./Register'>Register</a></p>
        </div>
  )
}

export default Login