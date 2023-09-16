import React from 'react'
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='dashboard'>
        <div className='left-corner'>
        <div>
            <div className='edu-image1'>
                <img src= "./images/edu.png" alt=""/>
            </div>
            <span className='main-description'>Revolutionize Learning With <br/>Our Cutting-Edge LMS Platform</span> 
        </div>
        
        <div className='middle-image'>
            <img src= "./images/edu2_new.png" alt=""/>
        </div>

        <div className='open-inverted'>
            <img src= "./images/Open_inverted.png" alt=""/>
        </div>

        <span className='other-description'>Unlock the Future of Education and Training with <br/>Seamless Online Learning Solutions</span>
        
        <div className='close-inverted'>
            <img src= "./images/Close_inverted.png" alt=""/>
        </div>

        </div>       
    </div>
  )
}

export default Sidebar