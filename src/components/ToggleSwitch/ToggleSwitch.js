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
      setChecked(true)
    } else {
      localStorage.setItem('theme', 'light')
      setChecked(false)
    }
  }

  useEffect(() => {
    handleSwitch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
