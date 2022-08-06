import React, { useContext, useState } from "react";
import { NavLink } from 'react-router-dom';
import { UserContext } from "../../../../../Context/userContext";
import './Attendance.css';


const Attendance = (props) => {

  const [days, setDays] = useState([
    {id: 0, status: '#FABD81', day: 'Wednesday', date: '11/12/2019', checkIn: '08:04', checkOut: '-'},
    {id: 1, status: '#94EF9D', day: 'Tuesday', date: '10/12/2019', checkIn: '08:09', checkOut: '16:03'},
    {id: 2, status: '#FF6868', day: 'Monday', date: '09/12/2019', checkIn: '08:08', checkOut: '16:15'},
  ]);

  const { latest_attendance } = useContext(UserContext);

  return <div className="latest-attendance-table-container">
    <div className="thead">
      
    </div>
    <table cellSpacing={0} title='asdsd' className='latest-attendance-table'>
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
            <td><span style={{color: day.IsAbsent ? '#FF6868' : (day.IsDelayed ? '#FABD81' : '#94EF9D') }}>•</span>{day.Day}</td>
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