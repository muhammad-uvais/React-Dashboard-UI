import React from 'react';
import WorldMap from 'react-svg-worldmap';
// import data from './Map'

const MyWorldMap = () => {

  const data = [
    { country: 'AF', value: '' },  // Afghanistan
    { country: 'AL', value: '' },  // Albania
    { country: 'DZ', value: '' },  // Algeria
    { country: 'AD', value: '' },  // Andorra
    { country: 'AO', value: '' },  // Angola
    { country: 'AR', value: '' },  // Argentina
    { country: 'GL', value: '' },  // Greenland
    { country: 'AM', value: '' },  // Armenia
    { country: 'CN', value: '' },  // China
    { country: 'AU', value: '' },  // Australia
    { country: 'AT', value: '' },  // Austria
    { country: 'AZ', value: '' },  // Azerbaijan
    { country: 'BH', value: '' },  // Bahrain
    { country: 'BD', value: '' },  // Bangladesh
    { country: 'BY', value: '' },  // Belarus
    { country: 'BE', value: '' },  // Belgium
    { country: 'BZ', value: '' },  // Belize
    { country: 'BJ', value: '' },  // Benin
    { country: 'BT', value: '' },  // Bhutan
    { country: 'BO', value: '' },  // Bolivia
    { country: 'BA', value: '' },  // Bosnia and Herzegovina
    { country: 'BW', value: '' },  // Botswana
    { country: 'BR', value: '' },  // Brazil
    { country: 'BN', value: '' },  // Brunei
    { country: 'BG', value: '' },  // Bulgaria
    { country: 'BF', value: '' },  // Burkina Faso
    { country: 'BI', value: '' },  // Burundi
    { country: 'KH', value: '' },  // Cambodia
    { country: 'CM', value: '' },  // Cameroon
    { country: 'CA', value: '' },  // Canada
    { country: 'CV', value: '' },  // Cape Verde
    { country: 'CF', value: '' },  // Central African Republic
    { country: 'TD', value: '' },  // Chad
    { country: 'CL', value: '' },  // Chile
    { country: 'CO', value: '' },  // Colombia
    { country: 'KM', value: '' },  // Comoros
    { country: 'CD', value: '' },  // Democratic Republic of the Congo
    { country: 'CG', value: '' },  // Republic of the Congo
    { country: 'CR', value: '' },  // Costa Rica
    { country: 'HR', value: '' },  // Croatia
    { country: 'CU', value: '' },  // Cuba
    { country: 'CY', value: '' },  // Cyprus
    { country: 'CZ', value: '' },  // Czech Republic
    { country: 'DK', value: '' },  // Denmark
    { country: 'DJ', value: '' },  // Djibouti
    { country: 'DM', value: '' },  // Dominica
    { country: 'DO', value: '' },  // Dominican Republic
    { country: 'EC', value: '' },  // Ecuador
    { country: 'EG', value: '' },  // Egypt
    { country: 'SV', value: '' },  // El Salvador
    { country: 'GQ', value: '' },  // Equatorial Guinea
    { country: 'ER', value: '' },  // Eritrea
    { country: 'EE', value: '' },  // Estonia
    { country: 'ET', value: '' },  // Ethiopia
    { country: 'FJ', value: '' },  // Fiji
    { country: 'FI', value: '' },  // Finland
    { country: 'FR', value: '' },  // France
    { country: 'GA', value: '' },  // Gabon
    { country: 'GM', value: '' },  // Gambia
    { country: 'GE', value: '' },  // Georgia
    { country: 'DE', value: '' },  // Germany
    { country: 'GH', value: '' },  // Ghana
    { country: 'GR', value: '' },  // Greece
    { country: 'GD', value: '' },  // Grenada
    { country: 'GT', value: '' },  // Guatemala
    { country: 'GN', value: '' },  // Guinea
    { country: 'GW', value: '' },  // Guinea-Bissau
    { country: 'GY', value: '' },  // Guyana
    { country: 'HT', value: '' },  // Haiti
    { country: 'HN', value: '' },  // Honduras
    { country: 'HU', value: '' },  // Hungary
    { country: 'IS', value: '' },  // Iceland
    { country: 'IN', value: '' },  // India
    { country: 'ID', value: '' },  // Indonesia
    { country: 'IR', value: '' },  // Iran
    { country: 'IQ', value: '' },  // Iraq
    { country: 'IE', value: '' },  // Ireland
    { country: 'IL', value: '' },  // Israel
    { country: 'IT', value: '' },  // Italy
    { country: 'JM', value: '' },  // Jamaica
    { country: 'JP', value: '' },  // Japan
    { country: 'JO', value: '' },  // Jordan
    { country: 'KZ', value: '' },  // Kazakhstan
    { country: 'KE', value: '' },  // Kenya
    { country: 'KI', value: '' },  // Kiribati
    { country: 'KW', value: '' },  // Kuwait
    { country: 'KG', value: '' },  // Kyrgyzstan
    { country: 'LA', value: '' },  // Laos
    { country: 'LV', value: '' },  // Latvia
    { country: 'LB', value: '' },  // Lebanon
    { country: 'LS', value: '' },  // Lesotho
    { country: 'LR', value: '' },  // Liberia
    { country: 'LY', value: '' },  // Libya
    { country: 'LI', value: '' },  // Liechtenstein
    { country: 'LT', value: '' },  // Lithuania
    { country: 'LU', value: '' },  // Luxembourg
    { country: 'MG', value: '' },  // Madagascar
    { country: 'MW', value: '' },  // Malawi
    { country: 'MY', value: '' },  // Malaysia
    { country: 'MV', value: '' },  // Maldives
    { country: 'ML', value: '' },  // Mali
    { country: 'MT', value: '' },  // Malta
    { country: 'MH', value: '' },  // Marshall Islands
    { country: 'MR', value: '' },  // Mauritania
    { country: 'MU', value: '' },  // Mauritius
    { country: 'MX', value: '' },  // Mexico
    { country: 'FM', value: '' },  // Micronesia
    { country: 'MD', value: '' },  // Moldova
    { country: 'MC', value: '' },  // Monaco
    { country: 'MN', value: '' },  // Mongolia
    { country: 'ME', value: '' },  // Montenegro
    { country: 'MA', value: '' },  // Morocco
    { country: 'MZ', value: '' },  // Mozambique
    { country: 'MM', value: '' },  // Myanmar
    { country: 'NA', value: '' },  // Namibia
    { country: 'NR', value: '' },  // Nauru
    { country: 'NP', value: '' },  // Nepal
    { country: 'NL', value: '' },  // Netherlands
    { country: 'NZ', value: '' },  // New Zealand
    { country: 'NI', value: '' },  // Nicaragua
    { country: 'NE', value: '' },  // Niger
    { country: 'NG', value: '' },  // Nigeria
    { country: 'KP', value: '' },  // North Korea
    { country: 'MK', value: '' },  // North Macedonia
    { country: 'NO', value: '' },  // Norway
    { country: 'OM', value: '' },  // Oman
    { country: 'PK', value: '' },  // Pakistan
    { country: 'PW', value: '' },  // Palau
    { country: 'PS', value: '' },  // Palestine
    { country: 'PA', value: '' },  // Panama
    { country: 'PG', value: '' },  // Papua New Guinea
    { country: 'PY', value: '' },  // Paraguay
    { country: 'PE', value: '' },  // Peru
    { country: 'PH', value: '' },  // Philippines
    { country: 'PL', value: '' },  // Poland
    { country: 'PT', value: '' },  // Portugal
    { country: 'QA', value: '' },  // Qatar
    { country: 'RO', value: '' },  // Romania
    { country: 'RU', value: '' },  // Russia
    { country: 'RW', value: '' },  // Rwanda
    { country: 'WS', value: '' },  // Samoa
    { country: 'SM', value: '' },  // San Marino
    { country: 'ST', value: '' },  // São Tomé and Príncipe
    { country: 'SA', value: '' },  // Saudi Arabia
    { country: 'SN', value: '' },  // Senegal
    { country: 'RS', value: '' },  // Serbia
    { country: 'SC', value: '' },  // Seychelles
    { country: 'SL', value: '' },  // Sierra Leone
    { country: 'SG', value: '' },  // Singapore
    { country: 'SK', value: '' },  // Slovakia
    { country: 'SI', value: '' },  // Slovenia
    { country: 'SB', value: '' },  // Solomon Islands
    { country: 'SO', value: '' },  // Somalia
    { country: 'ZA', value: '' },  // South Africa
    { country: 'KR', value: '' },  // South Korea
    { country: 'SS', value: '' },  // South Sudan
    { country: 'ES', value: '' },  // Spain
    { country: 'LK', value: '' },  // Sri Lanka
    { country: 'KN', value: '' },  // Saint Kitts and Nevis
    { country: 'LC', value: '' },  // Saint Lucia
    { country: 'VC', value: '' },  // Saint Vincent and the Grenadines
    { country: 'SD', value: '' },  // Sudan
    { country: 'SR', value: '' },  // Suriname
    { country: 'SZ', value: '' },  // Eswatini
    { country: 'SE', value: '' },  // Sweden
    { country: 'CH', value: '' },  // Switzerland
    { country: 'SY', value: '' },  // Syria
    { country: 'TJ', value: '' },  // Tajikistan
    { country: 'TZ', value: '' },  // Tanzania
    { country: 'TH', value: '' },  // Thailand
    { country: 'TL', value: '' },  // Timor-Leste
    { country: 'TG', value: '' },  // Togo
    { country: 'TO', value: '' },  // Tonga
    { country: 'TT', value: '' },  // Trinidad and Tobago
    { country: 'TN', value: '' },  // Tunisia
    { country: 'TR', value: '' },  // Turkey
    { country: 'TM', value: '' },  // Turkmenistan
    { country: 'TV', value: '' },  // Tuvalu
    { country: 'CI', value: '' },
    { country: 'UG', value: '' },  // Uganda
    { country: 'UA', value: '' },  // Ukraine
    { country: 'AE', value: '' },  // United Arab Emirates
    { country: 'GB', value: '' },  // United Kingdom
    { country: 'US', value: '' },  // United States
    { country: 'UY', value: '' },  // Uruguay
    { country: 'UZ', value: '' },  // Uzbekistan
    { country: 'VU', value: '' },  // Vanuatu
    { country: 'VA', value: '' },  // Vatican City
    { country: 'VE', value: '' },  // Venezuela
    { country: 'VN', value: '' },  // Vietnam
    { country: 'YE', value: '' },  // Yemen
    { country: 'ZM', value: '' },  // Zambia
    { country: 'ZW', value: '' },  // Zimbabwe
  ];
  return (
    <div className="worldmap-container" style={{ width: '500px', height: '300px' }}>
      <div className='worldmap'>
        <WorldMap
          data={data}
          size="lg"
          tooltipBgColor="black"
          tooltipTextColor="white"
          style={{ width: '480px', height: '100%'}}
          color="rgb(14 31 150)"
          borderColor="#f0f0f0"
        />
      </div>
    </div> 
  );
};

export default MyWorldMap;
