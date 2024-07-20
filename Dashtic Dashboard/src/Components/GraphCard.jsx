import React from 'react'
import Graph from './Graph'
import GraphCardData from './../Json Files/GraphCard.json'

const GraphCard = () => {

  return (

    <>
      {
        GraphCardData.map((item, index) => {
          return <>
            <div className='graphcard' key={index}>


              <div className='graph-content'>
                <p>{item.name}</p>
                <p>{item.amount}</p>
              </div>

              <div className='graph'>
                <Graph />
              </div>

            </div>
          </>
        })
      }
    </>



  )
}

export default GraphCard