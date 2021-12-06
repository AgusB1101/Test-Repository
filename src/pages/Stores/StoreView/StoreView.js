import Header from '../../../components/Header/Header'
import './StoreView.css'

const StoreView = ({ handleMenu }) => {
  return (
    <>
      <Header handleMenu={handleMenu} title="Tiendas" afterChevron="#12345" />
    </>
  )
}

export default StoreView
