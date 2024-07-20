import React from 'react'
import trophy from '../assets/trophy.png'

const Reward = () => {
  return (
    <div className='reward'>

      <div className='reward-heading'>
      <p>Congratulation</p>
      <p>John !</p>
      </div>
      
      <div className='reward-img'>
        <img src={trophy} alt="" />
        <p>$1000k</p>
      <p> <span style={{color: '#20c997'}}>0.82%</span> than last year</p>
      </div>

      <div className='reward-text'>
   
      <p>You have done 99.9% <br /> target  sales reached  <br />today.</p>
      <p>Today 20 minutes ago.</p>
      </div>
     
    </div>
  )
}

export default Reward