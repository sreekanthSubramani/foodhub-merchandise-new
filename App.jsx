import { useState } from 'react'
import React from 'react'
import Nav from './components/Nav/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Order from './Pages/Order/Order'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup.jsx/Loginpop'
import Searcher from './components/Nav/SearchFilter'
import ProductInfo from './Pages/Product-Info/ProductInfo'
import {useParams} from 'react-router-dom'

const App = () => {
    const [login, setLogin] = useState(false)
    const [searchToggle,setSearchToggle] = useState(false)
    

  
  return (
    <>
    {login ? <LoginPopup setLogin={setLogin} login={login}/> : <></> }
    {searchToggle ? <Searcher setSearchToggle={setSearchToggle} />: null}
    <div className='app'>
      <Nav setLogin={setLogin} setSearchToggle={setSearchToggle}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>} />
       <Route path="/order" element={<Order />} />
       
       <Route path="/products" element={<Home/>} />
        
        <Route path='/product/item/:id' element={<ProductInfo/>} />

       
       
        </Routes>  
      </div>
      <Footer />
      </>
  )
}

export default App