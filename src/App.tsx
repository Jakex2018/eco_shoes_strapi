import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Category from './pages/category/Category'
import Cart from './pages/cart/Cart'
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import Layout from './pages/Layout'
import Favorite from './pages/favorite/Favorite'
import Success from './pages/success/Success'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/category/:catSlug' element={<Category />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/success' element={<Success />} />
          <Route path='/product/:productSlug' element={<Product />} />
          <Route path='/favorite' element={<Favorite />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
