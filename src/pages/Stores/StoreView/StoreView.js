import { useParams } from 'react-router'
import Header from '../../../components/Header/Header'
import './StoreView.css'

const StoreView = ({ handleMenu }) => {
  const { id } = useParams()
  return (
    <>
      <Header handleMenu={handleMenu} title="Tiendas" afterChevron={'#' + id} />
    </>
  )
}

export default StoreView
