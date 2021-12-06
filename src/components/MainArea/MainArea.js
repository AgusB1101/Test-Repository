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
import React from 'react'

const MainArea = React.forwardRef(({ handleMenu }, ref) => {
  return (
    <div className="mainArea" ref={ref}>
      <Routes>
        <Route path="/" element={<Home handleMenu={handleMenu} />} />
        <Route
          path="/products"
          element={<ProductsList handleMenu={handleMenu} />}
        />
        <Route
          path="/products/:id"
          element={<ProductView handleMenu={handleMenu} />}
        />
        <Route
          path="/products/new"
          element={<ProductNew handleMenu={handleMenu} />}
        />
        <Route
          path="/stores"
          element={<StoresList handleMenu={handleMenu} />}
        />
        <Route
          path="/stores/:id"
          element={<StoreView handleMenu={handleMenu} />}
        />
        <Route
          path="/stores/new"
          element={<StoreNew handleMenu={handleMenu} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
})

export default MainArea
