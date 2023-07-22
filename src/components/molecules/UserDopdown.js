import React, { useState } from 'react'
import UserProfile from '../atoms/UserProfile'
import arrow from '../../assets/arrow-down.png'
import calendar from '../../assets/calendar.png'
import edit from '../../assets/edit-btn.png'
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
                <img src={props.assets}></img>
                <a>{props.text}</a>
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
            <DropdownItem assets = {arrow} text = {"Profile"} />

            <div onClick={navigateToAllTasks}>
                <DropdownItem assets = {calendar} text = {"Tasks"} />
            </div>

            <div onClick={navigateToWelcomePage}>
                <DropdownItem assets = {edit} text = {"logout"} />
            </div>
            
        </ul>
      </div>
    </div>
  )
}

export default UserDopdown
