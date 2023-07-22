import React from 'react'
import '../stylesheet/Style.css'
import WPBanner from '../components/molecules/WPBanner'
import WPCreateTaskBtn from '../components/atoms/WPCreateTaskBtn'
import { useNavigate } from 'react-router-dom'

const WelcomePage = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate ('/login');
  }

  return (
    <div className='wp-box'>
        <div className='welcome-page-base'>
            <div className='wp-banner-base'>
              <WPBanner/>
            </div>
            
            <div onClick={navigateToLogin}>
              <WPCreateTaskBtn/>
            </div>
            
        </div>
        
    </div>
  )
}

export default WelcomePage
