import WPCreateTaskBtn from '../components/atoms/WPCreateTaskBtn'
import TaskCard from '../components/organisms/TaskCard'
import Data from '../allTaskMockData.json'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserDopdown from '../components/molecules/UserDopdown'

const AllTask = () => {

    const renderedTask = Data.map(tasks => {
        return <TaskCard key={tasks.id} taskCardProp={tasks}/>
    });

    const [isStatusActive, setIsStatusActive] = useState(false);
    const [isCategoryActive, setIsCategoryActive] = useState(false);
    const [isProjectActive, setIsProjectActive] = useState(false);
    // const [isProfileActive, setIsProfileActive] = useState(false);
    // const [selected, setSelected] = useState();

    const navigate = useNavigate();

    const navigateToHome = () => {
      return navigate('/homepage');
    }

    // useEffect(() => {
    //   let profileHandler = () => {
    //     setIsProfileActive(false);
    //   }

    //   document.addEventListener('mousedown', profileHandler);
    // })

    useEffect(() => {
      let statusHandler = () => {
        setIsStatusActive(false);
      }

      document.addEventListener('mousedown', statusHandler);
    })

    useEffect(() => {
      let categoryHandler = () => {
        setIsCategoryActive(false);
     }

      document.addEventListener('mousedown', categoryHandler);
  })

  useEffect(() => {
      let projectHandler = () => {
        setIsProjectActive(false);
     }

      document.addEventListener('mousedown', projectHandler);
  })
    // function handleSelect(e) {
    //   setSelected(e.value)
    // }

    // const [value, setValue] = useState('')

    // const handleClick= () => {
    //     setIsOpen(!isOpen)
    // }

    // const handleValue= (event) => {
    //     setValue(event.target.value)
    // }

    

  return (
    <div className='all-task-base'>
      <div className='all-task-wrapper'>
        <div className='all-task-content'>

            <div className='header'>
                <div className='back-to-home-btn' onClick={navigateToHome}>
                    <WPCreateTaskBtn/>
                    <h1>Back to home</h1>
                </div>
                <UserDopdown/>
            </div>

            <div className='filter'>
                <div className='status-dropdown'>
                  <div className='select'  onClick={() => {setIsStatusActive(!isStatusActive)}}>
                    <div className='selected'>all</div>
                    <div className='dropdown-arrow'></div>
                  </div>
                  
                  {isStatusActive && (
                      <ul className='menu'>
                        <li>all</li>
                        <li>pending</li>
                        <li>completed</li>
                      </ul>
                  )}
                </div>

                <div className='category-dropdown'>
                  <div className='select' onClick={() => {setIsCategoryActive(!isCategoryActive)}}>
                    <div className='selected'>category</div>
                    <div className='dropdown-arrow'></div>
                  </div>
                  
                  {isCategoryActive && (
                      <ul className='menu'>
                        <li>coding</li>
                        <li>design</li>
                      </ul>
                  )}
                </div>

                <div className='project-dropdown'>
                  <div className='select' onClick={() => {setIsProjectActive(!isProjectActive)}}>
                    <div className='selected'>project</div>
                    <div className='dropdown-arrow'></div>
                  </div>
                  
                  {isProjectActive && (
                      <ul className='menu'>
                        <li>full stack web development</li>
                        <li>to-do web app</li>
                      </ul>
                  )}
                </div>
            </div>

            <div className='task-card-wrapper'>
                <div className='task-card'>
                    {renderedTask}
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default AllTask
