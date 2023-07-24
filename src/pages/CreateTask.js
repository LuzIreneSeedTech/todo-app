import React from 'react'
import AddIcon from '../components/molecules/AddIcon'
import WPCreateTaskBtn from '../components/atoms/WPCreateTaskBtn'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserDopdown from '../components/molecules/UserDopdown'

const CreateTask = () => {

    const [today, setToday] = useState(false);
    const [tomorrow, setTomorrow] = useState(false);

    const [low, setLow] = useState(false);
    const [medium, setMedium] = useState(false);
    const [high, setHigh] = useState(false);

    const [projectOne, setProjectOne] = useState(false);
    const [projectTwo, setProjectTwo] = useState(false);

    const [categoryOne, setCategoryOne] = useState(false);
    const [categoryTwo, setCategoryTwo] = useState(false);

    const navigate = useNavigate();

    const navigateBackToHome = () => {
        navigate('/homepage');
    }

    const navigateToAllTasks = () => {
        navigate('/alltasks');
    }

    // const navigate = useNavigate;

    // const navigateBackToHome = () => {
    //     return navigate('/homepage');
    // }

    // const navigateToAllTasks = () => {
    //     return navigate('/alltasks')
    // }

  return (
    <div className='create-task-base'>
      <div className='create-task-wrapper'>
        <div className='create-task-content'>
            <div className='header'>
                <div className='back-to-home-btn' onClick={navigateBackToHome}>
                    <WPCreateTaskBtn/>
                    <h1>Back to home</h1>
                </div>
                <UserDopdown/>
            </div>

            <div className='page-title'>
                New Task
            </div>

            <div className='set-date'>
                <div className={`today ${today ? 'active' : 'inactive'}`} onClick={() => {setToday(!today)}}>
                    Today
                </div>

                <div className={`tomorrow ${tomorrow ? 'active' : 'inactive'}`} onClick={() => {setTomorrow(!tomorrow)}}>
                    Tomorrow
                </div>

                <div className='calendar'></div>
            </div>

            <div className='user-input'>
                <form>
                    <div className='task-title-input'>
                        <label>
                            Title
                            <input type='text' placeholder='e.g. coding'/>
                        </label>
                    </div>
                    
                    <div className='task-description-input'>
                        <label>
                            Description
                            <input type='text' placeholder='e.g. start coding'/>
                        </label>
                    </div>
                    

                    <h4 className='priority-title'>Priority</h4>
                    <div className='priority'>
                        <div className={`low ${low ? 'active' : 'inactive'}`} onClick={() => {setLow(!low)}}>Low</div>

                        <div className={`medium ${medium ? 'active' : 'inactive'}`} onClick={() => {setMedium(!medium)}}>
                            Medium
                        </div>

                        <div className={`high ${high ? 'active' : 'inactive'}`} onClick={() => {setHigh(!high)}}>
                            High
                        </div>
                    </div>

                    <h4 className='project-title'>Projects</h4>
                    <div className='project-section'>
                        <div className='add-icon'>
                            <AddIcon/>
                        </div>

                        <div className='projects'>
                            <div className={`projectOne ${projectOne ? 'active' : 'inactive'}`} onClick={() => {setProjectOne(!projectOne)}}>
                                full stack web development
                            </div>

                            <div className={`projectTwo ${projectTwo ? 'active' : 'inactive'}`} onClick={() => {setProjectTwo(!projectTwo)}}>
                                to-do web app
                            </div>
                        </div>
                    </div>

                    <h4 className='category-title'>Categories</h4>
                    <div className='category-section'>
                        <div className='add-icon'>
                            <AddIcon/>
                        </div>

                        <div className='categories'>
                            <div className={`categoryOne ${categoryOne ? 'active' : 'inactive'}`} onClick={() => {setCategoryOne(!categoryOne)}}>
                                coding
                            </div>

                            <div className={`categoryTwo ${categoryTwo ? 'active' : 'inactive'}`} onClick={() => {setCategoryTwo(!categoryTwo)}}>
                                design
                            </div>
                        </div>
                    </div>

                    <div className='create-btn' onClick={navigateToAllTasks}>
                        <button>
                            Create Task
                        </button>
                    </div>
                </form>
            </div>

            
        </div>
      </div>
    </div>
  )
}

export default CreateTask
