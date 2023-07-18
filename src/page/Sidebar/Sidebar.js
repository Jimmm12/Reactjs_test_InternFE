import React from 'react'
import "./Sidebar.css";


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarList'>
            <span>Home</span>
        </div>
            <hr></hr>
        <div className='sidebarList' style={{background: '#5C5C5C'}}>
            <span>NewS</span>
        </div>
            <hr></hr>
        <div className='sidebarList'>
            <span>Blog</span>
        </div>
            <hr></hr>
        <div className='sidebarList'>
            <span>Contact</span>
        </div>
            <hr></hr>
      </div>
    </div>
  )
}

export default Sidebar