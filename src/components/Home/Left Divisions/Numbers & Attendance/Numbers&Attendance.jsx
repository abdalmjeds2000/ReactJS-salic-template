import React from "react";
import './Numbers%Attendance.css';

import Number from "./Number/Number.jsx";
import Attendance from "./Attendance/Attendance.jsx";

// import NextEventIcon from '../../../../icons/home/next-event-icon.svg';

const NumbersAttendance = (props) => {

  return <>
    <div className="numbers-attendance-container">
      <div className="div1">
        <Number 
          pathColor='#94EF9D' 
          header="Performance" 
          description="Good" 
          value='100'
          minValue='0'
          maxValue='100'
          text='100%'
          textColor='#94EF9D'
        />
      </div>
      <div className="div2">
        <Number 
          pathColor='#EF9494' 
          header="Employment Period" 
          description="5 Days" 
          value='5'
          minValue='0'
          maxValue='24'
          text='5'
          textColor='#EF9494'
        />
      </div>
      <div className="div3">
        <Number 
          pathColor='#55ACEE' 
          header="Next Event" 
          description="National day" 
          value='55'
          minValue='0'
          maxValue='70'
          text='55'
          textColor='#55ACEE' 
        />
      </div>
      <div className="div4">
        <Number 
          pathColor='#94EF9D' 
          header="Annual Leaves" 
          description="20 / 30 Days" 
          value='20'
          minValue='0'
          maxValue='30'
          text='20'
          textColor='#94EF9D' 
        />
      </div>
      <div className="div5">
      <Attendance />
    </div>
    </div>
    
    
  </>
}

export default NumbersAttendance