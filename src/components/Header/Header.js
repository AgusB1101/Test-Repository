import './Header.css'

const Header = ({ handleMenu, title, afterChevron }) => {
  return (
    <header className="header">
      <img
        className="menu"
        src="/assets/menu.svg"
        alt="Menu"
        onClick={handleMenu}
      />
      <h2>{title}</h2>
      {afterChevron ? (
        <img 
        className="chevron"
        src="/assets/chevron.svg"
        alt="Chevron" />) : ('')}
      <h2>{afterChevron}</h2>
    </header>
  )
}

export default Header
