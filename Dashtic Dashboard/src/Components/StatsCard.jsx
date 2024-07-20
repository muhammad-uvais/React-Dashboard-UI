import React from 'react'
import './../App.css';
import StatsCardData from './../Json Files/StatsCard.json';


const StatsCard = () => {
            
    
    return (
        <>
            {
                StatsCardData.map((item, index) => {
                    return <div className='stats-card ' key={index}>
                        <svg width={30} height={30} xmlns={item.xlmns} viewBox={item.viewBox}><path d={item.path} style={{fill: item.fill}}/></svg>
                        <p>{item.title}</p>
                        <h2><b>{item.number}</b></h2>
                        <p><span style={{color : item.color}}>{item.info1}</span> {item.info2}</p>
                        <progress value={item.value} max={item.max}/>
                    </div>
                })
            }

        </>
    )
}

export default StatsCard