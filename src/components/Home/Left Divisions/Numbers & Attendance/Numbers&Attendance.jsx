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
          pathColor='#55ACEE' 
          header="Employment Period" 
          description="24 Days" 
          value='22'
          minValue='0'
          maxValue='30'
          text='22'
        />
      </div>
      <div className="div2">
        <Number 
          pathColor='#FABD81' 
          header="Next Event" 
          description="Saudi National Day" 
          value='4'
          minValue='0'
          maxValue='10'
          text={'4'}
        />
      </div>
      <div className="div3">
        <Number 
          pathColor='#EF9494' 
          header="Performance" 
          description="Good" 
          value='62'
          minValue='0'
          maxValue='100'
          text='62%'
        />
      </div>
      <div className="div4">
        <Number 
          pathColor='#94EF9D' 
          header="Annual Leaves" 
          description="24 Days" 
          value='129'
          minValue='0'
          maxValue='200'
          text='129'
        />
      </div>
    </div>
    <div className="div5">
      <Attendance />
    </div>
    
  </>
}

export default NumbersAttendance