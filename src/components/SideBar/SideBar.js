import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ProfileButton from '../ProfileButton/ProfileButton'
import SideBarLink from '../SideBarLink/SideBarLink'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch'
import './SideBar.css'

const SideBar = React.forwardRef(({ closeMenu }, ref) => {
  const handleSideBar = (e) => e.stopPropagation()

  const location = useLocation()
  const links = [
    {
      to: '/',
      img: '/assets/home.svg',
      name: 'Inicio',
    },
    {
      to: '/products',
      img: '/assets/package.svg',
      name: 'Productos',
    },
    {
      to: '/stores',
      img: '/assets/store.svg',
      name: 'Tiendas',
    },
  ]

  return (
    <div
      className="sideBar"
      ref={ref}
      tabIndex="1"
      onClick={handleSideBar}
      onBlur={closeMenu}
    >
      <div className="logoAndSideBarLinks">
        <Link to="/">
          <img className="logo" src="/assets/santander-logo.svg" alt="Logo" />
        </Link>
        <div className="sideBarLinks">
          {links.map((link, i) => (
            <SideBarLink
              key={`link_${i}`}
              to={link.to}
              img={link.img}
              name={link.name}
              selected={
                location.pathname === link.to ||
                (RegExp(link.to).test(location.pathname) && link.to !== '/')
              }
            />
          ))}
        </div>
      </div>
      <div className="switchAndButtonContainer">
        <div className="changeTheme">
          <ToggleSwitch />
          Tema Oscuro
        </div>
        <ProfileButton
          to="/profile"
          img="/assets/profile-pic.png"
          name="Olivia"
        />
      </div>
    </div>
  )
})

export default SideBar
