import React from 'react'
import '../styles/register.css'
const Register = () => {
  return (
    <div className='register__container'>
        <h2 className='register__title'>Registration form</h2>
        <form className='register__form'>
                
            <div className="register__block">
            <div>
            <label >First Name</label>
                <input id='name' type="text"/>

                {/* <label>Email Id</label>
                <input id='email' type="email"/> */}
                <label>EmailId</label>
                <input id='email' type="email"/> 

                <label>Password</label>
                <input id='password' type="password"/>

                <label>Gender</label>
                <input id='gender' type="text"/>
            </div>
            
                <div>
                <label>Last Name</label>
                <input id='lastName' type="text"/>

                <label>Phone Number</label>
                <input id='number' type="number" />

                <label>Confirm Password</label>
                <input id='confirmPassword' type="password"/>
                </div>
            </div>
            
        <button className='register-btn'>Register</button>
        </form>
    </div>
  )
}

export default Register