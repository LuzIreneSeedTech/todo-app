import React, { useState } from 'react'

const TaskCard = ({taskCardProp}) => {

    const { description, dateCreated } = taskCardProp;



    // const [taskCardModal, setTaskCardModal] = useState(false);

    // const toggleTaskCardModal = () => {
    //     setTaskCardModal(!taskCardModal)
    // }

    // if (taskCardModal) {
    //     document.body.classList.add('active-modal')
    // } else {
    //     document.body.classList.remove('active-modal')
    // }

  return (
      <div className='task-card-content'>

        <p className='description'>
            {description}
        </p>

        <div className='task-card-footer'>
            <div className='date'>
                {dateCreated}
            </div>
            <div className='edit-btn'></div>
        </div>
    </div>
  )
}

export default TaskCard
