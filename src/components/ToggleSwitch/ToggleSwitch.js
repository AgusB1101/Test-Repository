import { useEffect, useRef, useState } from 'react'
import './ToggleSwitch.css'

const ToggleSwitch = () => {
  const toggleSwitch = useRef()
  const [checked, setChecked] = useState(
    localStorage.getItem('theme') === 'dark'
  )
  const handleSwitch = () => {
    if (!checked) {
      localStorage.setItem('theme', 'dark')
      toggleSwitch.current.checked = true
      setChecked(true)
    } else {
      localStorage.setItem('theme', 'light')
      toggleSwitch.current.checked = false
      setChecked(false)
    }
  }

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark'
    if (!localStorage.getItem('theme')) {
      toggleSwitch.current.checked = true
      localStorage.setItem('theme', 'dark')
    }
    if (isDark) {
      toggleSwitch.current.checked = true
    }
    setChecked(true)
  }, [])

  useEffect(() => {
    if (checked) toggleSwitch.current.checked = true
    document
      .querySelector('html')
      .setAttribute('theme', localStorage.getItem('theme'))
  }, [checked])

  return (
    <>
      <label className="switch">
        <input ref={toggleSwitch} onChange={handleSwitch} type="checkbox" />
        <span className="slider round"></span>
      </label>
    </>
  )
}

export default ToggleSwitch
