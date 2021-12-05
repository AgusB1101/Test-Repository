import React from 'react'
import './SideBar.css'

const SideBar = React.forwardRef(({ closeMenu }, ref) => {
  const handleSideBar = (e) => e.stopPropagation()

  return (
    <div
      className="sideBar"
      ref={ref}
      tabIndex="1"
      onClick={handleSideBar}
      onBlur={closeMenu}
    ></div>
  )
})

export default SideBar
