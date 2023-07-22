import React from 'react'

const CategoriesProgress = () => {
  return (
    <div className='categories-progress-wrapper'>
      <div className='categories-progress-content'>
        <h4 className='categories-progress-header'>Progress by categories:</h4>
        
        <div className='category-1-wrapper'>
          <div className='category-1-content'>
            <h1 className='category-1-percentage'>80%</h1>
            <h2 className='category-1-name'>Coding</h2>
          </div>

          <div className='category-1-pb-wrapper'>
            <div className='category-1-pb-base'>
              <div className='category-1-progress'></div>
            </div>
          </div>
        </div>

        <div className='category-2-wrapper'>
          <div className='category-2-content'>
            <h1 className='category-2-percentage'>30%</h1>
            <h2 className='category-2-name'>Design</h2>
          </div>

          <div className='category-2-pb-wrapper'>
            <div className='category-2-pb-base'>
              <div className='category-2-progress'></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CategoriesProgress
