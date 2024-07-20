import React from 'react'
import ApexChart from './ApexChart'


const RevenueGraphCard = () => {
    return (

        <div className='revenuecard'>
            <div className='revenue-heading'> 
            <h4>Earning Revenue</h4>
            <div className='time-buttons'>
                <div>Week</div>
                <div>Month</div>
                <div>Year</div>
                 <div><i class="fa-solid fa-ellipsis-vertical"></i></div>
            </div>
            </div>

            <div className='revenue-section'>
              <ApexChart/>
            </div>



        </div>
    )
}

export default RevenueGraphCard