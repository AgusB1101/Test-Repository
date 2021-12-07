import { Route, Routes } from 'react-router'
import Home from '../../pages/Home/Home'
import ProductNew from '../../pages/Products/ProductNew/ProductNew'
import ProductsList from '../../pages/Products/ProductsList/ProductsList'
import ProductView from '../../pages/Products/ProductView/ProductView'
import StoreNew from '../../pages/Stores/StoreNew/StoreNew'
import StoresList from '../../pages/Stores/StoresList/StoresList'
import StoreView from '../../pages/Stores/StoreView/StoreView'
import NotFound from '../../pages/NotFound/NotFound'
import myApi from '../../utils/API_Requests'
import { trackPromise } from 'react-promise-tracker'
import { useEffect, useState } from 'react'
import './MainArea.css'
import React from 'react'

const MainArea = React.forwardRef(({ handleMenu }, ref) => {
  const [products, setProducts] = useState([])
  const [stores, setStores] = useState([])

  useEffect(() => {
    trackPromise(myApi.get('products').then(({ data }) => setProducts(data)))
    trackPromise(myApi.get('stores').then(({ data }) => setStores(data)))
  }, [])

  return (
    <main className="mainArea" ref={ref}>
      <Routes>
        <Route
          path="/"
          element={
            <Home handleMenu={handleMenu} products={products} stores={stores} />
          }
        />
        <Route
          path="/products"
          element={<ProductsList handleMenu={handleMenu} products={products} />}
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
          element={<StoresList handleMenu={handleMenu} stores={stores} />}
        />
        <Route
          path="/stores/:id"
          element={<StoreView handleMenu={handleMenu} />}
        />
        <Route
          path="/stores/new"
          element={<StoreNew handleMenu={handleMenu} />}
        />
        <Route path="*" element={<NotFound handleMenu={handleMenu} />} />
      </Routes>
    </main>
  )
})

export default MainArea
