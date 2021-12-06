import { Link } from 'react-router-dom'
import './SideBarLink.css'

const SideBarLink = ({ to, img, name, selected }) => {
  return (
    <Link
      to={to}
      className={'sideBarLink ' + (selected && 'sideBarLinkSelected')}
    >
      <img className="iconLink" src={img} alt={name} />
      <h4>{name}</h4>
    </Link>
  )
}

export default SideBarLink
