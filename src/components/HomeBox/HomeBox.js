import Button from '../Button/Button'
import './HomeBox.css'

const HomeBox = ({ to, img, name, qty = 0 }) => {
  return (
    <div className="homeBox">
      <div className="logoAndQtyContainer">
        <img className="homeBoxImg" src={img} alt={name} />
        <h3>{Number(qty) + ' ' + name}</h3>
      </div>
      <div className="homeBoxButtons">
        <Button to={to} centered>
          Ver Listado
        </Button>
        <Button to={`${to}/new`} addClass="buttonPrefixWidth" centered>
          Agregar {name.slice(0, name.length - 1)}
        </Button>
      </div>
    </div>
  )
}

export default HomeBox
