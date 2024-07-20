import React from 'react';
import CountryFlag from 'react-country-flag';
import './../App.css';
import countryInfo from './../Json Files/CountryInfo.json'
import MyMap from './MyWorldMap';

const Map = () => {
  return (
    <div className='map'>
      <div className='map-left'>
        <h4> Country Based Profit </h4>
        <MyMap/>
      </div>
      <div className='map-right'>
        <table>
          <tbody>
            {
              countryInfo.map((item, index) => (
                <tr key={index}>
                  <td><CountryFlag countryCode={item.countryCode} svg id={item.id}/></td>
                  <td>{item.country}</td>
                  <td>{item.profit}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Map;
