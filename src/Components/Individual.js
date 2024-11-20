import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Main from './Main'
import Iphone from './iphone/Iphone'
import Four04 from './Four04'
import ProductDetail from './productDetail/ProductDetail'


function Individual() {
  return (
    <div>
        <Routes>
            <Route index element={<Main/>}/>
            <Route path='/iphone' element={<Iphone/>}/>
            <Route path='*' element={<Four04/>}/>
            <Route path='/iphone/:productId' element={<ProductDetail/>}/>
        </Routes>
    </div>
  )
}

export default Individual