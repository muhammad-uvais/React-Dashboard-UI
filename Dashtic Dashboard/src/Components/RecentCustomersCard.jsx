import React from 'react'
import CustomersData from './../Json Files/Customers.json'


const RecentCustomersCard = () => {
  return (
    <div className='recent-customer-card'>
            <div className='customer-heading'>
               <h4>Recent Customers</h4>
    <i class="fa-solid fa-ellipsis-vertical"></i>
               
               </div>

                    <div className='customer-section'>
                    {
                    CustomersData.map((item, index) => {
                        return <div className='product-info' key={index}>
                        <img src={item.imagePath} alt="" />
                        <div className='product-text'>
                            {/* <li></li>  */}
                            <h4>{item.name}</h4>
                            <p>{item.address}</p>
                        </div>
    
                    </div>
                    })
                }
                    </div>
                
                

            </div>
  )
}

export default RecentCustomersCard