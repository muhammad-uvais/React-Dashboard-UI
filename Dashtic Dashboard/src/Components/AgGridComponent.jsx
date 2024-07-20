import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import rowData from './../Json Files/RowData.json'
const AgGridComponent = () => {

    const defaultColDef = {
        cellStyle: { border: '1px solid #e9edf4' }
    };

    const getRowStyle = (params) => {
        if (params.node.rowIndex % 2 !== 1) {
            return { background: 'rgb(245 246 252)', color: '#424E79' , fontWeight: '600' };
        }
        return null;
    };

    // Column definitions
    const columnDefs = [
        { headerName: 'Seller', field: 'seller' },
        { headerName: 'Total Sales', field: 'totalSales' },
        { headerName: 'Active Stocks', field: 'activeStocks' },
        { headerName: 'Category', field: 'category' },
        { headerName: 'Revenue', field: 'revenue' },
        { headerName: 'Status', field: 'status' },
    ];

    return (
        <div className="ag-theme-alpine" style={{ height: 530, width: 1200 }}>
            <style>
                {`
            .ag-header {
                background-color: white;
            }

            .ag-header-cell-text{
                color: #424E79;
            }

            .ag-paging-panel {
                justify-content: flex-start;
                border-top: none;
            }
            `}
            </style>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                getRowStyle={getRowStyle}
                pagination={true}
                paginationAutoPageSize={true}
            />
        </div>
    );
};

export default AgGridComponent;
