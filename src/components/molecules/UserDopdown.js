import React, { useState } from 'react'
import UserProfile from '../atoms/UserProfile'
import profile from '../../assets/profile.png'
import tasks from '../../assets/tasks.png'
import logout from '../../assets/logout.png'
import { useNavigate } from 'react-router-dom'

const UserDopdown = () => {

    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    const navigateToWelcomePage = () => {
        return navigate('/');
    }

    const navigateToAllTasks = () => {
        return navigate('/alltasks');
    }

    function DropdownItem(props){
        return (
            <li className='dropdown-item'>
                <img src={props.assets} alt='portrait of a golden retriever dog'></img>
                <a href='#'>{props.text}</a>
            </li>
        );
    }

  return (
    <div className='user-dropdown-container'>
      <div className='dropdown-trigger' onClick={() => {setOpen(!open)}}>
        <UserProfile/>
      </div>

      <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
        <ul>
            <DropdownItem assets = {profile} text = {"Profile"} />

            <div onClick={navigateToAllTasks}>
                <DropdownItem assets = {tasks} text = {"Tasks"} />
            </div>

            <div onClick={navigateToWelcomePage}>
                <DropdownItem assets = {logout} text = {"logout"} />
            </div>
            
        </ul>
      </div>
    </div>
  )
}

export default UserDopdown
