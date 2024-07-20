import React from 'react';
import { Select, MenuItem } from '@mui/material';

const CustomSelect = () => {
  const [selectedOption, setSelectedOption] = React.useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <Select
        value={selectedOption}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        sx={{ width: '80px', height: '40px' }}
      >
        <MenuItem value="" disabled>
        </MenuItem>
        <MenuItem value="option1">10</MenuItem>
        <MenuItem value="option2">25</MenuItem>
        <MenuItem value="option3">50</MenuItem>
        <MenuItem value="option3">100</MenuItem>

      </Select>
    </div>
  );
};

export default CustomSelect;
