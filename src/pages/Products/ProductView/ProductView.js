import Header from '../../../components/Header/Header'
import './ProductView.css'

const ProductView = ({ handleMenu }) => {
  return (
    <>
      <Header handleMenu={handleMenu} title="Productos" afterChevron="#12345" />
    </>
  )
}

export default ProductView
