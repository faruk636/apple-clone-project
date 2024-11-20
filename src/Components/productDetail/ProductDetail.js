import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Four04 from '../Four04'
// import img from './iphone-14.png'


function ProductDetail() {
    const [product,setProduct]=useState([])
    const {productId}=useParams()
    useEffect(()=>{
      fetch('http://localhost:9090/mescha')
      .then((data)=>data.json())
      .then((final)=>{
        let productList=final.products
        let detailProduct=productList.filter(
            (product)=>product.product_id===parseInt(productId))
            console.log(detailProduct)
            setProduct(detailProduct)
      })
    },[productId])
    let first=product
    console.log(first)
    let order=1
    if(product.length){return (
      <div>
        <section className='internal-page-wrapper'>
          <div className='container'>
            <div className='d-flex justify-content-between align-items-center mt-5'>
              <h1 className='font-weight-bold h-100 display-1 mb-5'><strong>iPhone</strong></h1>
              <h4 className='font-weight-bold'>Designed to be loved.</h4>
            </div>
            {product.map((eachValue)=>{
              let id=eachValue.product_id
              let name=eachValue.name
              let size=eachValue.size
              let price=eachValue.price
              let description=eachValue.description
              let image_url=eachValue.image_url
  let order1=1
  let order2=2
  if(order!==1){
    order1=2
    order2=1
    order--
  }else{order++}
              return(
                <div key={id} className='row justify-content-center text-center product-holder mt-5'>
                  <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                    <h4 className='name'> <strong>{name}</strong></h4>
                    <p className='description'>{description}</p>
                    <p className='size'>{size}</p>
                    <h5 className='price'>{price}</h5>
                  </div>
                  <div className={`col-sm-12 col-md-6 order-${order2}`}>
                    <div className='product-img'>
                      <img src={image_url} alt='product'></img>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    )}else return <Four04/>
}

export default ProductDetail