import React from 'react'
import '../stylesheet/Style.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  const navigateToHomepage = () => {
    navigate('/homepage');
  }

  const navigateToRegister = () => {
    navigate('/register');
  }

  return (
    <div className='login-base'>
      <div className='login-wrapper'>
        <div className='login-banner-base'>
              <div className='login-banner-txt'>
                <h2>Login</h2>
                <h3>Welcome back!</h3>
              </div>

              <div className='login-form-wrapper'>
                <div>
                  <label for="email">Email</label>
                  <input id="email" type="text" placeholder="Enter your email" required/>
                </div>

                <div>
                  <label for="password">Password</label>
                  <input id="password" type="password" placeholder="Enter your password" required/>
                </div>

                <div className='login-btn' onClick={navigateToHomepage}>
                    <button className='active-login-btn'>Login</button>
                </div>
                
              </div>

              <div className='login-footer'>
                  <div className='footer-content'>Don't have an account? <span onClick={navigateToRegister}>Register</span></div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Login
