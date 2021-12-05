import { Link } from 'react-router-dom'
import './Button.css'

const Button = ({ to, centered, children }) => {
  return (
    <Link to={to}>
      <button type="button" className="btn">
        <span className={'btnContent ' + (centered ? 'centerContent' : '')}>
          {children}
        </span>
      </button>
    </Link>
  )
}

export default Button
