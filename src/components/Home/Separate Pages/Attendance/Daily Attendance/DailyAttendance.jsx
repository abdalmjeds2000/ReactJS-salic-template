import React, { useState } from 'react';
import CustomSelect from './CustomSelect';
import './DailyAttendance.css';


function DailyAttendance() {




  const [tableData, setTableData] = useState([
    {EmployeeName: 'AbdAlmjed Skaik', Date: '08/07/2022', Day: 'Sat', CheckIn: '01/07/2022', CheckOut: '01/09/2022', WTime: '08:00 AM', WTime8_16: '02:00 PM', Late: 'false', EarlyLeave: 'false', Overtime: '1', AttendanceStatus: 'came', EmpJustification: '-', ManagerFeedback: 'Empty', ApprovalStatus: 'true'},
    {EmployeeName: 'AbdAlmjed Skaik', Date: '02/05/2022', Day: 'Sat', CheckIn: '01/07/2022', CheckOut: '01/09/2022', WTime: '08:00 AM', WTime8_16: '02:00 PM', Late: 'false', EarlyLeave: 'false', Overtime: '1', AttendanceStatus: 'came', EmpJustification: '-', ManagerFeedback: 'Empty', ApprovalStatus: 'true'},
    {EmployeeName: 'AbdAlmjed Skaik', Date: '05/06/2022', Day: 'Sat', CheckIn: '01/07/2022', CheckOut: '01/09/2022', WTime: '08:00 AM', WTime8_16: '02:00 PM', Late: 'false', EarlyLeave: 'false', Overtime: '1', AttendanceStatus: 'came', EmpJustification: '-', ManagerFeedback: 'Empty', ApprovalStatus: 'true'},
    {EmployeeName: 'AbdAlmjed Skaik', Date: '20/07/2022', Day: 'Sat', CheckIn: '01/07/2022', CheckOut: '01/09/2022', WTime: '08:00 AM', WTime8_16: '02:00 PM', Late: 'false', EarlyLeave: 'false', Overtime: '1', AttendanceStatus: 'came', EmpJustification: '-', ManagerFeedback: 'Empty', ApprovalStatus: 'true'},
    {EmployeeName: 'AbdAlmjed Skaik', Date: '23/01/2022', Day: 'Sat', CheckIn: '01/07/2022', CheckOut: '01/09/2022', WTime: '08:00 AM', WTime8_16: '02:00 PM', Late: 'false', EarlyLeave: 'false', Overtime: '1', AttendanceStatus: 'came', EmpJustification: '-', ManagerFeedback: 'Empty', ApprovalStatus: 'true'},
    {EmployeeName: 'AbdAlmjed Skaik', Date: '25/03/2022', Day: 'Sat', CheckIn: '01/07/2022', CheckOut: '01/09/2022', WTime: '08:00 AM', WTime8_16: '02:00 PM', Late: 'false', EarlyLeave: 'false', Overtime: '1', AttendanceStatus: 'came', EmpJustification: '-', ManagerFeedback: 'Empty', ApprovalStatus: 'true'},
    {EmployeeName: 'AbdAlmjed Skaik', Date: '15/02/2022', Day: 'Sat', CheckIn: '01/07/2022', CheckOut: '01/09/2022', WTime: '08:00 AM', WTime8_16: '02:00 PM', Late: 'false', EarlyLeave: 'false', Overtime: '1', AttendanceStatus: 'came', EmpJustification: '-', ManagerFeedback: 'Empty', ApprovalStatus: 'true'},
    {EmployeeName: 'AbdAlmjed Skaik', Date: '26/05/2022', Day: 'Sat', CheckIn: '01/07/2022', CheckOut: '01/09/2022', WTime: '08:00 AM', WTime8_16: '02:00 PM', Late: 'false', EarlyLeave: 'false', Overtime: '1', AttendanceStatus: 'came', EmpJustification: '-', ManagerFeedback: 'Empty', ApprovalStatus: 'true'},
    {EmployeeName: 'AbdAlmjed Skaik', Date: '10/05/2022', Day: 'Sat', CheckIn: '01/07/2022', CheckOut: '01/09/2022', WTime: '08:00 AM', WTime8_16: '02:00 PM', Late: 'false', EarlyLeave: 'false', Overtime: '1', AttendanceStatus: 'came', EmpJustification: '-', ManagerFeedback: 'Empty', ApprovalStatus: 'true'},
    {EmployeeName: 'AbdAlmjed Skaik', Date: '02/06/2022', Day: 'Sat', CheckIn: '01/07/2022', CheckOut: '01/09/2022', WTime: '08:00 AM', WTime8_16: '02:00 PM', Late: 'false', EarlyLeave: 'false', Overtime: '1', AttendanceStatus: 'came', EmpJustification: '-', ManagerFeedback: 'Empty', ApprovalStatus: 'true'},
    {EmployeeName: 'Mohammad Al-Ahmad', Date: '07/09/2022', Day: 'Sat', CheckIn: '01/07/2022', CheckOut: '01/09/2022', WTime: '08:00 AM', WTime8_16: '02:00 PM', Late: 'false', EarlyLeave: 'false', Overtime: '1', AttendanceStatus: 'came', EmpJustification: '-', ManagerFeedback: 'Empty', ApprovalStatus: 'true'},
    {EmployeeName: 'Mohammad Al-Ahmad', Date: '15/02/2022', Day: 'Sat', CheckIn: '01/07/2022', CheckOut: '01/09/2022', WTime: '08:00 AM', WTime8_16: '02:00 PM', Late: 'false', EarlyLeave: 'false', Overtime: '1', AttendanceStatus: 'came', EmpJustification: '-', ManagerFeedback: 'Empty', ApprovalStatus: 'true'},
    {EmployeeName: 'Mohammad Al-Ahmad', Date: '19/01/2022', Day: 'Sat', CheckIn: '01/07/2022', CheckOut: '01/09/2022', WTime: '08:00 AM', WTime8_16: '02:00 PM', Late: 'false', EarlyLeave: 'false', Overtime: '1', AttendanceStatus: 'came', EmpJustification: '-', ManagerFeedback: 'Empty', ApprovalStatus: 'true'},
    {EmployeeName: 'Mohammad Al-Ahmad', Date: '27/03/2022', Day: 'Sat', CheckIn: '01/07/2022', CheckOut: '01/09/2022', WTime: '08:00 AM', WTime8_16: '02:00 PM', Late: 'false', EarlyLeave: 'false', Overtime: '1', AttendanceStatus: 'came', EmpJustification: '-', ManagerFeedback: 'Empty', ApprovalStatus: 'true'},
    {EmployeeName: 'Mohammad Al-Ahmad', Date: '17/03/2022', Day: 'Sat', CheckIn: '01/07/2022', CheckOut: '01/09/2022', WTime: '08:00 AM', WTime8_16: '02:00 PM', Late: 'false', EarlyLeave: 'false', Overtime: '1', AttendanceStatus: 'came', EmpJustification: '-', ManagerFeedback: 'Empty', ApprovalStatus: 'true'},
    {EmployeeName: 'Mohammad Al-Ahmad', Date: '05/04/2022', Day: 'Sat', CheckIn: '01/07/2022', CheckOut: '01/09/2022', WTime: '08:00 AM', WTime8_16: '02:00 PM', Late: 'false', EarlyLeave: 'false', Overtime: '1', AttendanceStatus: 'came', EmpJustification: '-', ManagerFeedback: 'Empty', ApprovalStatus: 'true'},
    {EmployeeName: 'Mohammad Al-Ahmad', Date: '02/07/2022', Day: 'Sat', CheckIn: '01/07/2022', CheckOut: '01/09/2022', WTime: '08:00 AM', WTime8_16: '02:00 PM', Late: 'false', EarlyLeave: 'false', Overtime: '1', AttendanceStatus: 'came', EmpJustification: '-', ManagerFeedback: 'Empty', ApprovalStatus: 'true'},
    {EmployeeName: 'Mohammad Ali', Date: '28/08/2022', Day: 'Sat', CheckIn: '01/07/2022', CheckOut: '01/09/2022', WTime: '08:00 AM', WTime8_16: '02:00 PM', Late: 'false', EarlyLeave: 'false', Overtime: '1', AttendanceStatus: 'came', EmpJustification: '-', ManagerFeedback: 'Empty', ApprovalStatus: 'true'},
    {EmployeeName: 'Mohammad Ali', Date: '12/01/2022', Day: 'Sat', CheckIn: '01/07/2022', CheckOut: '01/09/2022', WTime: '08:00 AM', WTime8_16: '02:00 PM', Late: 'false', EarlyLeave: 'false', Overtime: '1', AttendanceStatus: 'came', EmpJustification: '-', ManagerFeedback: 'Empty', ApprovalStatus: 'true'},
    {EmployeeName: 'Mohammad Ali', Date: '13/11/2022', Day: 'Sat', CheckIn: '01/07/2022', CheckOut: '01/09/2022', WTime: '08:00 AM', WTime8_16: '02:00 PM', Late: 'false', EarlyLeave: 'false', Overtime: '1', AttendanceStatus: 'came', EmpJustification: '-', ManagerFeedback: 'Empty', ApprovalStatus: 'true'},
    {EmployeeName: 'Mohammad Ali', Date: '18/12/2022', Day: 'Sat', CheckIn: '01/07/2022', CheckOut: '01/09/2022', WTime: '08:00 AM', WTime8_16: '02:00 PM', Late: 'false', EarlyLeave: 'false', Overtime: '1', AttendanceStatus: 'came', EmpJustification: '-', ManagerFeedback: 'Empty', ApprovalStatus: 'true'},
    {EmployeeName: 'Mohammad Ali', Date: '12/05/2022', Day: 'Sat', CheckIn: '01/07/2022', CheckOut: '01/09/2022', WTime: '08:00 AM', WTime8_16: '02:00 PM', Late: 'false', EarlyLeave: 'false', Overtime: '1', AttendanceStatus: 'came', EmpJustification: '-', ManagerFeedback: 'Empty', ApprovalStatus: 'true'},
    {EmployeeName: 'Mohammad Ali', Date: '09/03/2022', Day: 'Sat', CheckIn: '01/07/2022', CheckOut: '01/09/2022', WTime: '08:00 AM', WTime8_16: '02:00 PM', Late: 'false', EarlyLeave: 'false', Overtime: '1', AttendanceStatus: 'came', EmpJustification: '-', ManagerFeedback: 'Empty', ApprovalStatus: 'true'},
    {EmployeeName: 'Mohammad Ali', Date: '20/01/2022', Day: 'Sat', CheckIn: '01/07/2022', CheckOut: '01/09/2022', WTime: '08:00 AM', WTime8_16: '02:00 PM', Late: 'false', EarlyLeave: 'false', Overtime: '1', AttendanceStatus: 'came', EmpJustification: '-', ManagerFeedback: 'Empty', ApprovalStatus: 'true'},
    {EmployeeName: 'Mohammad Ali', Date: '01/04/2022', Day: 'Sat', CheckIn: '01/07/2022', CheckOut: '01/09/2022', WTime: '08:00 AM', WTime8_16: '02:00 PM', Late: 'false', EarlyLeave: 'false', Overtime: '1', AttendanceStatus: 'came', EmpJustification: '-', ManagerFeedback: 'Empty', ApprovalStatus: 'true'},
    {EmployeeName: 'Mohammad Ali', Date: '25/08/2022', Day: 'Sat', CheckIn: '01/07/2022', CheckOut: '01/09/2022', WTime: '08:00 AM', WTime8_16: '02:00 PM', Late: 'false', EarlyLeave: 'false', Overtime: '1', AttendanceStatus: 'came', EmpJustification: '-', ManagerFeedback: 'Empty', ApprovalStatus: 'true'},
    {EmployeeName: 'Mohammad Ali', Date: '22/09/2022', Day: 'Sat', CheckIn: '01/07/2022', CheckOut: '01/09/2022', WTime: '08:00 AM', WTime8_16: '02:00 PM', Late: 'false', EarlyLeave: 'false', Overtime: '1', AttendanceStatus: 'came', EmpJustification: '-', ManagerFeedback: 'Empty', ApprovalStatus: 'true'},
    {EmployeeName: 'Mohammad Ali', Date: '15/02/2022', Day: 'Sat', CheckIn: '01/07/2022', CheckOut: '01/09/2022', WTime: '08:00 AM', WTime8_16: '02:00 PM', Late: 'false', EarlyLeave: 'false', Overtime: '1', AttendanceStatus: 'came', EmpJustification: '-', ManagerFeedback: 'Empty', ApprovalStatus: 'true'},
  ])


  return (
    <div className='daily-attendance-container'>
      <div className="content">
        <div className="form">
          <div className='inputs'>
            <CustomSelect 
              name='department' 
              label='Department'
              options={[
                {value: 'd1', name: 'D1'},
                {value: 'd2', name: 'D2'},
                {value: 'd3', name: 'D3'},
              ]}
              onChange={(e) => alert(e.target.value)}
            />
            <CustomSelect 
              name='status' 
              label='Status'
              options={[
                {value: 'active', name: 'Active'},
                {value: 'non-active', name: 'non-Active'},
              ]}
              onChange={(e) => alert(e.target.value)}
            />
            <CustomSelect 
              name='employee' 
              label='Employee'
              options={[
                {value: 'AbdAlmjed Skaik', name: 'AbdAlmjed Skaik'},
                {value: 'Mohammed Ali', name: 'Mohammed Ali'},
                {value: 'Mohammad Al-Ahmad', name: 'Mohammad Al-Ahmad'},
              ]}
              onChange={(e) => alert(e.target.value)}
            />
            <div className='custom-select-container'>
              <label htmlFor="start-date">Start Date</label>
              <input type="date" name="start-date" id="start-date" />
            </div>
            <div className='custom-select-container'>
              <label htmlFor="end-date">End Date</label>
              <input type="date" name="end-date" id="end-date" />
            </div>
          </div>
          <div className="btns">
            <button>Export Data</button>
            <button>Filter Results</button>
          </div>
        </div>
        <div className="table">
          <table width='100%'>
            <tr>
              <th>Employee Name</th>
              <th>Date</th>
              <th>Day</th>
              <th>Check-In</th>
              <th>Check-Out</th>
              <th>W. Time</th>
              <th>W. Time (8-16)</th>
              <th>Late</th>
              <th>Early Leave</th>
              <th>Overtime</th>
              <th>Attendance Status</th>
              <th>Emp. Justification</th>
              <th>Manager Feedback</th>
              <th>Approval Status</th>
            </tr>
            <tbody>
              {
                tableData.map((row, i) => {
                  return <tr key={i}>
                    <td>{row.EmployeeName}</td>
                    <td>{row.Date}</td>
                    <td>{row.Day}</td>
                    <td>{row.CheckIn}</td>
                    <td>{row.CheckOut}</td>
                    <td>{row.WTime}</td>
                    <td>{row.WTime8_16}</td>
                    <td>{row.Late}</td>
                    <td>{row.EarlyLeave}</td>
                    <td>{row.Overtime}</td>
                    <td>{row.AttendanceStatus}</td>
                    <td>{row.EmpJustification}</td>
                    <td>{row.ManagerFeedback}</td>
                    <td>{row.ApprovalStatus}</td>
                  </tr>
                })
              }
            </tbody>

          </table>
        </div>
      </div>
    </div>
  )
}

export default DailyAttendance