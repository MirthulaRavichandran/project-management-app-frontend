import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Cal.css'; // Make sure this file exists and contains the custom-tile class with your desired styling

const Cal = () => {
const [date, setDate] = useState(new Date());

const onChange = (newDate) => {
   setDate(newDate);
};

const tileStyle = {
 backgroundColor: '#cd1818', // Set your preferred background color
 color: '141313', // Set your preferred text color
};

return (
   <div>
     <h2>Calendar</h2>
     <Calendar onChange={onChange} 
     value={date}
     className={() => 'custom-tile'} // Note that className should be 'custom-tile'
     tileContent={<div style={tileStyle}>{date.getDate()}</div>} // Use tileContent instead of tileContentStyle to set your desired styling
     />
   </div>
);
};

export default Cal;