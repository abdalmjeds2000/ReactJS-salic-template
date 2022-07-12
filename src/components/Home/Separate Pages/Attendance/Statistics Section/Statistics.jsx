import React, { useState } from 'react';
import { RadialBar, Area } from '@ant-design/plots';
import './Statistics.css';


function Statistics() {



  const [dataArea, setDataArea] = useState([
    {month: 'Jan', value: 100, category: 'Normal'},
    {month: 'Feb', value: 80, category: 'Normal'},
    {month: 'Mar', value: 75, category: 'Normal'},
    {month: 'Apr', value: 120, category: 'Normal'},
    {month: 'May', value: 100, category: 'Normal'},
    {month: 'Jun', value: 100, category: 'Normal'},
    {month: 'Jul', value: 75, category: 'Normal'},
    {month: 'Aug', value: 80, category: 'Normal'},
    {month: 'Sep', value: 120, category: 'Normal'},
    {month: 'Oct', value: 130, category: 'Normal'},
    {month: 'Nov', value: 100, category: 'Normal'},
    {month: 'Dec', value: 25, category: 'Normal'},
    
    {month: 'Jan', value: 0, category: 'Adsent'},
    {month: 'Feb', value: 0, category: 'Adsent'},
    {month: 'Mar', value: 0, category: 'Adsent'},
    {month: 'Apr', value: 0, category: 'Adsent'},
    {month: 'May', value: 0, category: 'Adsent'},
    {month: 'Jun', value: 0, category: 'Adsent'},
    {month: 'Jul', value: 0, category: 'Adsent'},
    {month: 'Aug', value: 0, category: 'Adsent'},
    {month: 'Sep', value: 0, category: 'Adsent'},
    {month: 'Oct', value: 0, category: 'Adsent'},
    {month: 'Nov', value: 0, category: 'Adsent'},
    {month: 'Dec', value: 0, category: 'Adsent'},

    {month: 'Jan', value: 0, category: 'Delay & Early Leave'},
    {month: 'Feb', value: 0, category: 'Delay & Early Leave'},
    {month: 'Mar', value: 0, category: 'Delay & Early Leave'},
    {month: 'Apr', value: 0, category: 'Delay & Early Leave'},
    {month: 'May', value: 0, category: 'Delay & Early Leave'},
    {month: 'Jun', value: 0, category: 'Delay & Early Leave'},
    {month: 'Jul', value: 0, category: 'Delay & Early Leave'},
    {month: 'Aug', value: 0, category: 'Delay & Early Leave'},
    {month: 'Sep', value: 0, category: 'Delay & Early Leave'},
    {month: 'Oct', value: 0, category: 'Delay & Early Leave'},
    {month: 'Nov', value: 0, category: 'Delay & Early Leave'},
    {month: 'Dec', value: 0, category: 'Delay & Early Leave'},

    {month: 'Jan', value: 80, category: 'Leaves & Business Trip'},
    {month: 'Feb', value: 60, category: 'Leaves & Business Trip'},
    {month: 'Mar', value: 50, category: 'Leaves & Business Trip'},
    {month: 'Apr', value: 120, category: 'Leaves & Business Trip'},
    {month: 'May', value: 60, category: 'Leaves & Business Trip'},
    {month: 'Jun', value: 70, category: 'Leaves & Business Trip'},
    {month: 'Jul', value: 100, category: 'Leaves & Business Trip'},
    {month: 'Aug', value: 120, category: 'Leaves & Business Trip'},
    {month: 'Sep', value: 150, category: 'Leaves & Business Trip'},
    {month: 'Oct', value: 10, category: 'Leaves & Business Trip'},
    {month: 'Nov', value: 75, category: 'Leaves & Business Trip'},
    {month: 'Dec', value: 50, category: 'Leaves & Business Trip'},
  ]);
  const configArea = {
    data: dataArea,
    xField: 'month',
    yField: 'value',
    seriesField: 'category',
    color: ['#F9A654', '#FD96A6', '#43A2CC', '#66CE9A'],
    
    yAxis: {
      label: {
        formatter: (v) => ``,
      },
    },
    legend: {
      positixon: 'top',
    },
  };

  const dataRadialBar = [
    {name: 'Annual Leave', star: 22,},
    {name: 'Working Days', star: 78,},
  ];
  const configRadialBar = {
    data: dataRadialBar,
    xField: 'name',
    yField: 'star',
    maxAngle: 270,
    radius: 1,
    innerRadius: 0.5,
    tooltip: {
      formatter: (datum) => {
        return {
          name: datum.name,
          value: `${datum.star}%`,
        };
      },
    },
    colorField: 'star',
    color: ({ star }) => {
      if (star === 78) {
        return '#43A2CC';
      } else if (star === 22) {
        return '#FD96A6';
      }
      return '#43A2CC';
    },
  };

  

  return (
    <div className='statistics-container'>
      <div className='monthly-attendance'>
        <div className="head">
          <h3>Monthly Attendance</h3>
          <p>Dec, 2020</p>
        </div>
        <div className="body">
          <div className='index'>
            <span>Working Days</span>
            <span>Annual Leave</span>
          </div>
          <div className='radialBar'>
            <RadialBar 
              {...configRadialBar} 
              style={{
                width: '100%',
                position: 'relative',
                left: '15%',
                margin: '0 0 15px 0',
              }} 
            />
          </div>
        </div>
      </div>
      <div className='annual-attendance'>
        <div className="head">
          <h3>Annual Attendance</h3>
          <p>2020</p>
        </div>
        <Area {...configArea} />
      </div>
      <div className='employees-availability-attendance'>
        <div className="head">
          <h3>Employees Availability Attendance</h3>
          <p>SALIC Employees Ava.</p>
        </div>
        <div className="body">
          <div className="buttons">
            <input type="text" name="" id="" placeholder='By Organization' />
            <input type="text" name="" id="" placeholder='Nov,2020' />
            <input type="text" name="" id="" placeholder='Select an Option' />
          </div>
          <div className="custom-column-chart-container">
            <div className="data">
              <div className="col col-1"></div>
              <div className="col col-2"></div>
              <div className="col col-3"></div>
              <div className="col col-4"></div>
              <div className="col col-5"></div>
            </div>
            <div className="index">
              <ul>
                <li><p>Sick Leave</p></li>
                <li><p>Leave</p></li>
                <li><p>Trips</p></li>
                <li><p>Shortages</p></li>
                <li><p>Availabilities</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistics