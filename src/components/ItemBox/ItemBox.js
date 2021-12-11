import { Link } from 'react-router-dom'
import './ItemBox.css'

const ItemBox = ({ title, img, id, altImg }) => {
  const setAltImg = (e) => {
    e.target.src = altImg
  }

  return (
    <Link to={window.location.pathname + '/' + id}>
      <div className="itemBox">
        <div className="itemBoxInfo">
          <img
            src={img ?? ''}
            alt={id}
            className="itemBoxImg"
            onError={setAltImg}
          />
          <div className="itemBoxTitleId">
            <span className="itemBoxTitle">{title}</span>
            <span className="itemBoxId">{'#' + id}</span>
          </div>
        </div>
        <img
          src="/assets/chevron.svg"
          alt="Chevron"
          className="chevron width2rem"
        />
      </div>
    </Link>
  )
}

export default ItemBox
