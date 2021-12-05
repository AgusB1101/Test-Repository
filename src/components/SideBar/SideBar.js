import React from 'react'
import ProfileButton from '../ProfileButton/ProfileButton'
import SideBarLink from '../SideBarLink/SideBarLink'
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
    >
      <div className="logoAndSideBarLinks">
        <img className="logo" src="/assets/santander-logo.svg" alt="Logo" />
        <div className="sideBarLinks">
          <SideBarLink to="/" img="/assets/home.svg" name="Inicio" />
          <SideBarLink
            to="/products"
            img="/assets/package.svg"
            name="Productos"
          />
          <SideBarLink to="/stores" img="/assets/store.svg" name="Tiendas" />
        </div>
      </div>
      <ProfileButton
        to="/profile"
        img="/assets/profile-pic.png"
        name="Olivia"
      />
    </div>
  )
})

export default SideBar
