import React from 'react'
import{ FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'

const WPCreateTaskBtn = () => {
  return (
      <div className="wp-create-task-btn">
          <div className="create-task-btn" >
            <h1 className="create-task">Create task</h1>
            <FontAwesomeIcon icon={faCircleArrowRight} className='right-arrow-icon'/>
          </div>
      </div>
  )
}

export default WPCreateTaskBtn
