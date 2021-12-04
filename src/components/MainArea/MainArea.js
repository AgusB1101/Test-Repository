import { Router, Routes } from 'react-router'
import Home from '../../pages/Home/Home'
import ProductNew from '../../pages/Products/ProductNew/ProductNew'
import ProductsList from '../../pages/Products/ProductsList/ProductsList'
import ProductView from '../../pages/Products/ProductView/ProductView'
import StoreNew from '../../pages/Stores/StoreNew/StoreNew'
import StoresList from '../../pages/Stores/StoresList/StoresList'
import StoreView from '../../pages/Stores/StoreView/StoreView'
import NotFound from '../../pages/NotFound/NotFound'
import './MainArea.css'

const MainArea = () => {
  return (
    <div className="mainArea">
      <Routes>
        <Router path="/" element={<Home />} />
        <Router path="/products" element={<ProductsList />} />
        <Router path="/products/:id" element={<ProductView />} />
        <Router path="/products/new" element={<ProductNew />} />
        <Router path="/stores" element={<StoresList />} />
        <Router path="/stores/:id" element={<StoreView />} />
        <Router path="/stores/new" element={<StoreNew />} />
        <Router path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default MainArea
