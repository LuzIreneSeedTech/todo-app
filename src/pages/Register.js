import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate ('/login')
  }

  return (
    <div className='register-base'>
      <div className='register-banner-wrapper'>
        <div className='register-banner-content'>
          <div className='register-banner-text'>
            <h2>Register</h2>
            <h3>Manage, Keep track, Organize your Tasks</h3>
          </div>

          <div className='register-form-wrapper'>
              <div>
                <label for="username">Username</label>
                <input id="username" type="text" placeholder="Enter your username"/>
              </div>

              <div>
                <label for="email">Email</label>
                <input id="email" type="text" placeholder="Enter your email" required/>
              </div>

              <div>
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Enter your password" required/>
              </div>

              <div className='register-btn' onClick={navigateToLogin}>
                  <button className='active-register-btn'>Register</button>
              </div>
              
          </div>

          <div className='register-footer'>
            <p>Already have an account? <span onClick={navigateToLogin}>Login</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
