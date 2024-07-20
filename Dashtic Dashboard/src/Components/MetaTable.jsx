import React from 'react'
import CustomSelect from './CustomSelect'
import AgGridComponent from './AgGridComponent'

const MetaTable = () => {
    return (
        <div className='meta-table'>
            <div className='heading-wrapper'>
                <div className='table-heading'> <h4>Best Seller</h4></div>
                <button className='order-button'><i class="fa-solid fa-plus"></i> Add New Order</button>
            </div>

            <div className='select-wrapper'>    
            <div className='custom-select'>
                <span>Show</span>
                <CustomSelect/>
                <span>Entries</span>
            </div>
            <input type="text" placeholder='Type a Keyword...' />
            </div>

            <div className='table-comp'>
            <AgGridComponent/>
            </div>
        </div>
    )
}

export default MetaTable