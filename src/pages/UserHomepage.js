import React from 'react'
import FirstCategory from '../components/molecules/FirstCategory'
import SecondCategory from '../components/molecules/SecondCategory'
import { useNavigate } from 'react-router-dom'
import UserProfile from '../components/atoms/UserProfile'
import ProgressBar from '../components/atoms/ProgressBar'
import UserDopdown from '../components/molecules/UserDopdown'

const UserHomepage = () => {

  const navigate = useNavigate();

  const navigateToCreateTask = () => {
    return navigate('/createtask')
  }

  const navigateToAllTasks = () => {
    return navigate('/alltasks')
  }

  return (
    <div className='homepage-base'>
      <div className='homepage-wrapper'>
        <div className='homepage-content'>
          <div className='user-space-wrapper'>
            <div className='username'>
              <p>Hello,</p>
              <h4>user_123</h4>
            </div>
            <UserDopdown/>
          </div>

          <div className='date'>
            <h1>26 June, Thu</h1>
          </div>

          <div className='progress-today-content'>
            <div className='header'>
              <h3>Today's Progress:</h3>
            </div>
            
            <div className='footer'>
                <div className='footer-content'>
                    <h1>50%</h1>
                    <p>You got this!</p>
                </div>
                <div className='footer-progress-bar'>
                    <ProgressBar/>
                </div>
            </div>
          </div>

          <div className='categories-content'>
            <div className='header'>
              <h1>Progress by categories:</h1>
            </div>

            <div className='categories'>
              <FirstCategory/>
              <SecondCategory/>
            </div>
            
          </div>

          <div className='create-task-btn' onClick={navigateToCreateTask}>
            <button>Create new task</button>
          </div>

          <div className='homepage-footer'>
            <div className='pending-tasks-content'>
              <div className='header'>
                <h4>Today’s unfulfilled tasks:</h4>
              </div>

              <div className='list'>
                <label className='list-1'>
                    <input type='checkbox'/>
                    <h4>backend</h4>
                </label>

                <label className='list-2'>
                    <input type='checkbox'/>
                    <h4>frontend</h4>
                </label>
              </div>
            </div>

            <div className='all-tasks-btn-wrapper' onClick={navigateToAllTasks}>
              <button>all tasks</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserHomepage
