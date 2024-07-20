import React from 'react'
import MyCalendar from './MyCalendar'
import StatsCard from './StatsCard'
import Map from './Map'
import Reward from './Reward'
import GraphCard from './GraphCard'
import ProductsCard from './ProductsCard'
import RevenueGraphCard from './RevenueGraphCard'
import TransactionCard from './TransactionCard'
import RecentCustomersCard from './RecentCustomersCard'
import MetaTable from './MetaTable'
import Footer from './Footer'

const Section = () => {
  return (
    <div className='section-wrapper'>

      <div className='statscard-reward-map-parent'>
        {/* date component */}
        <div className='date-component'>
          <p>Sales Dashboard</p>
          <MyCalendar />
        </div>

        {/* stats card */}
        <div>
          <StatsCard />
          <Reward />
        </div>

        {/* map component */}
        <Map />
      </div>


      <div className='graphcards-parent'>
        <div className='graph-cards-wrapper'>
          <GraphCard />
        </div>
      </div>


      <div className='productcard-revenuegraph-parent'>
        <ProductsCard />
        <RevenueGraphCard/>
      </div>

      <div className='transactioncard-recentcustomers-parent'>
        <TransactionCard />
        <RecentCustomersCard />
      </div>


      
      <MetaTable />




      <Footer/> 

    </div>
  )
}

export default Section