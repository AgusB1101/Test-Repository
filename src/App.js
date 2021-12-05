import './App.css'
import { useRef } from 'react'
import MainArea from './components/MainArea/MainArea'
import SideBar from './components/SideBar/SideBar'

function App() {
  const sideBar = useRef()
  const mainArea = useRef()

  const handleMenu = () => {
    if (window.innerWidth <= 1024) {
      sideBar.current.classList.add('sideBarOpen')
      sideBar.current.focus()
      mainArea.current.style.pointerEvents = 'none'
    }
  }

  const closeMenu = () => {
    if (sideBar.current.classList.contains('sideBarOpen')) {
      sideBar.current.classList.add('sideBarClose')
      setTimeout(() => {
        sideBar.current.classList.remove('sideBarClose')
        sideBar.current.classList.remove('sideBarOpen')
        mainArea.current.style.pointerEvents = 'initial'
      }, 400)
    }
  }

  return (
    <div className="app">
      <SideBar ref={sideBar} closeMenu={closeMenu} />
      <MainArea ref={mainArea} handleMenu={handleMenu} />
    </div>
  )
}

export default App
