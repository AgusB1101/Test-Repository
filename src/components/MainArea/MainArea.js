import { Route, Routes } from 'react-router'
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
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductView />} />
        <Route path="/products/new" element={<ProductNew />} />
        <Route path="/stores" element={<StoresList />} />
        <Route path="/stores/:id" element={<StoreView />} />
        <Route path="/stores/new" element={<StoreNew />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default MainArea
