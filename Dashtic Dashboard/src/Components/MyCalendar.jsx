import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './../App.css';

export default function MyCalendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="custom-datepicker-container" style={{marginleft: '100px'}}>
        <DatePicker className="custom-datepicker" />
      </div>
    </LocalizationProvider>
  );
}
