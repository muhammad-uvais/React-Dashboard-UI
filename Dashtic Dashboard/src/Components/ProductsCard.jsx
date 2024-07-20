import React from 'react'
// import books from './../assets/latestbooks.jpg'
import ProductsData from './../Json Files/Products.json'

const ProductsCard = () => {
    return (
       


            <div className='productcard'>
            <div className='products-heading'> <h4>Top Products</h4></div>

                    <div className='products-section'>
                    {
                    ProductsData.map((item, index) => {
                        return <div className='product-info' key={index}>
                        <img src={item.image} alt="" />
                        <div className='product-text'>
                            {/* <li></li>  */}
                            <h4>{item.name}</h4>
                            <p>{item.quantity}</p>
                        </div>
    
                    </div>
                    })
                }
                    </div>
                
                

            </div>
    )
}

export default ProductsCard