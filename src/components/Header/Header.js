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
      <h3>{title}</h3>
      {afterChevron ? <img src="/assets/chevron.svg" alt="Chevron" /> : ''}
      <h3>{afterChevron}</h3>
    </header>
  )
}

export default Header
