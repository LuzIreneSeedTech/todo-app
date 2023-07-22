import React from 'react'
import '../../stylesheet/Style.css'

const WPBanner = () => {
  return (
    <div className='banner-content-wrapper'>
      <div className='wp-banner-content'>
        <h3 className='wp-banner-txt'>Manage <span>your</span></h3>
        <h3 className='wp-banner-txt'>Keep track <span>of your</span></h3>
        <h3 className='wp-banner-txt'>Organize <span>your</span></h3>
      </div>

      <div className='banner-content-sub'>
        <h3>tasks</h3>
      </div>
    </div>
    
  )
}

export default WPBanner
