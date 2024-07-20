import React from 'react'
import TransactionData from './../Json Files/Transactions.json'


const TransactionCard = () => {
  return (
    <div className='transactioncard'>

    <div className='transaction-heading'> 
    <h4>New Transaction</h4>
    <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>

    <div className='transaction-section'>
       <ul className='tble-heading'>
        <li>Products</li>
        <li></li>
        <li>Transactions</li>
        <li>Date & Time</li>
        <li>Amount</li>
       </ul>
{
TransactionData.map((item,index) => {
    return <ul className='tble-data' key={index}>
    <li><img src={item.imgpath} alt="img" /></li>
    <li>{item.title}</li>
    <li>{item.transaction}</li>
    <li>{item.date}</li>
    <li>{item.amount}</li>
   </ul>
})
}
      
      
    
    </div>



</div>
  )
}

export default TransactionCard