import React, { useState } from 'react'
import './Attendance.css';
import AttendanceIcon from '../../../../icons/separated pages/attendance icon.svg';
import worldIllustration from '../../../../icons/home/world.svg';


import Statistics from './Statistics Section/Statistics.jsx';
import DailyAttendance from './Daily Attendance/DailyAttendance.jsx';


function Attendance() {

  const subMenuItems = [
    { id: 1, text: "Statistics" },
    { id: 2, text: "Daily Attendance" },
    { id: 3, text: "Late Justification Approval" },
    { id: 4, text: "Late Justification Approval HR" }
  ];
  const [activeId, setActiveId] = useState(1);



  return (
    <div className='attendance-page-container'>
      <img src={worldIllustration} className='bg-img-world' alt='worldIllustration' />
      <div className="header">
        <img src={AttendanceIcon} alt="Attendance Icon" />
        <h2>Attendance</h2>
      </div>
      <div>
        <div className="buttons">
          <ul>
            {subMenuItems.map((val, i) => (
              <li key={i} onClick={() => {setActiveId(val.id); }} className={activeId === val.id ? "active" : ""}>
                {val.text}
              </li>
            ))}
          </ul>
        </div>
        <div className='attendance-sections-container'>
          {
            activeId === 1 
            ? <Statistics />
            : activeId === 2 
            ? <DailyAttendance />

            : null
          }
        </div>
      </div>
    </div>
  )
}

export default Attendance