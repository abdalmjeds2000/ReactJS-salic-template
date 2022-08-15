import React, { useContext, useState } from "react";
import { NavLink } from 'react-router-dom';
import { UserContext } from "../../../../../Context/userContext";
import './Attendance.css';


const Attendance = (props) => {


  const { latest_attendance } = useContext(UserContext);

  return <div className="latest-attendance-table-container">
    <div className="thead">
      
    </div>
    <table cellSpacing={0} className='latest-attendance-table'>
      <tbody>
        <tr>
          <td colSpan={3}><h2>Latest Attendance</h2></td>
          <td colSpan={1}><NavLink to="/attendance">See All</NavLink></td>
        </tr>  
        <tr>
          <th>Day</th>
          <th>Date</th>
          <th>CheckIn</th>
          <th>CheckOut</th>
        </tr>
        {latest_attendance?.slice(0, 3).map((day, i) => {
          return <tr key={i}>
            <td><span style={{color: day.IsAbsent ? 'rgb(255, 39, 43)' : (day.IsDelayed ? 'rgb(233 155 77)' : 'rgb(39, 124, 98)') }}>•</span>{day.Day}</td>
            <td>{day.Date || '-'}</td>
            <td>{day.CheckInTime || '-'}</td>
            <td>{day.CheckOutTime || '-'}</td>
          </tr>
        })}
          
        
      </tbody>
      
    </table>
  </div>
}

export default Attendance