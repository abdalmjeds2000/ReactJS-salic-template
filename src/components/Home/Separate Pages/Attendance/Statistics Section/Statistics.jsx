import React, { useState } from 'react';
import { RadialBar, Area } from '@ant-design/plots';
import { Column } from '@ant-design/plots';

import './Statistics.css';
import CustomSelect from '../Daily Attendance/CustomSelect';


function Statistics() {


  const [annualYear, setAnnualYear] = useState('2020');
  const [monthlyYear, setMonthlyYear] = useState();
  
  

  const [dataArea, setDataArea] = useState([
    {year: '2020', month: 'Jan', value: 20, category: 'Normal'},
    {year: '2020', month: 'Feb', value: 50, category: 'Normal'},
    {year: '2020', month: 'Mar', value: 120, category: 'Normal'},
    {year: '2020', month: 'Apr', value: 305, category: 'Normal'},
    {year: '2020', month: 'May', value: 250, category: 'Normal'},
    {year: '2020', month: 'Jun', value: 150, category: 'Normal'},
    {year: '2020', month: 'Jul', value: 360, category: 'Normal'},
    {year: '2020', month: 'Aug', value: 370, category: 'Normal'},
    {year: '2020', month: 'Sep', value: 400, category: 'Normal'},
    {year: '2020', month: 'Oct', value: 300, category: 'Normal'},
    {year: '2020', month: 'Nov', value: 210, category: 'Normal'},
    {year: '2020', month: 'Dec', value: 50, category: 'Normal'},
    
    {year: '2020', month: 'Jan', value: 60, category: 'Adsent'},
    {year: '2020', month: 'Feb', value: 50, category: 'Adsent'},
    {year: '2020', month: 'Mar', value: 300, category: 'Adsent'},
    {year: '2020', month: 'Apr', value: 200, category: 'Adsent'},
    {year: '2020', month: 'May', value: 20, category: 'Adsent'},
    {year: '2020', month: 'Jun', value: 40, category: 'Adsent'},
    {year: '2020', month: 'Jul', value: 80, category: 'Adsent'},
    {year: '2020', month: 'Aug', value: 60, category: 'Adsent'},
    {year: '2020', month: 'Sep', value: 120, category: 'Adsent'},
    {year: '2020', month: 'Oct', value: 80, category: 'Adsent'},
    {year: '2020', month: 'Nov', value: 420, category: 'Adsent'},
    {year: '2020', month: 'Dec', value: 320, category: 'Adsent'},

    {year: '2020', month: 'Jan', value: 10, category: 'Delay & Early Leave'},
    {year: '2020', month: 'Feb', value: 30, category: 'Delay & Early Leave'},
    {year: '2020', month: 'Mar', value: 40, category: 'Delay & Early Leave'},
    {year: '2020', month: 'Apr', value: 10, category: 'Delay & Early Leave'},
    {year: '2020', month: 'May', value: 70, category: 'Delay & Early Leave'},
    {year: '2020', month: 'Jun', value: 90, category: 'Delay & Early Leave'},
    {year: '2020', month: 'Jul', value: 120, category: 'Delay & Early Leave'},
    {year: '2020', month: 'Aug', value: 170, category: 'Delay & Early Leave'},
    {year: '2020', month: 'Sep', value: 320, category: 'Delay & Early Leave'},
    {year: '2020', month: 'Oct', value: 240, category: 'Delay & Early Leave'},
    {year: '2020', month: 'Nov', value: 180, category: 'Delay & Early Leave'},
    {year: '2020', month: 'Dec', value: 400, category: 'Delay & Early Leave'},

    {year: '2020', month: 'Jan', value: 80, category: 'Leaves & Business Trip'},
    {year: '2020', month: 'Feb', value: 60, category: 'Leaves & Business Trip'},
    {year: '2020', month: 'Mar', value: 50, category: 'Leaves & Business Trip'},
    {year: '2020', month: 'Apr', value: 120, category: 'Leaves & Business Trip'},
    {year: '2020', month: 'May', value: 60, category: 'Leaves & Business Trip'},
    {year: '2020', month: 'Jun', value: 70, category: 'Leaves & Business Trip'},
    {year: '2020', month: 'Jul', value: 100, category: 'Leaves & Business Trip'},
    {year: '2020', month: 'Aug', value: 120, category: 'Leaves & Business Trip'},
    {year: '2020', month: 'Sep', value: 150, category: 'Leaves & Business Trip'},
    {year: '2020', month: 'Oct', value: 10, category: 'Leaves & Business Trip'},
    {year: '2020', month: 'Nov', value: 75, category: 'Leaves & Business Trip'},
    {year: '2020', month: 'Dec', value: 50, category: 'Leaves & Business Trip'},






    {year: '2021', month: 'Jan', value: 100, category: 'Normal'},
    {year: '2021', month: 'Feb', value: 80, category: 'Normal'},
    {year: '2021', month: 'Mar', value: 75, category: 'Normal'},
    {year: '2021', month: 'Apr', value: 120, category: 'Normal'},
    {year: '2021', month: 'May', value: 100, category: 'Normal'},
    {year: '2021', month: 'Jun', value: 100, category: 'Normal'},
    {year: '2021', month: 'Jul', value: 75, category: 'Normal'},
    {year: '2021', month: 'Aug', value: 80, category: 'Normal'},
    {year: '2021', month: 'Sep', value: 120, category: 'Normal'},
    {year: '2021', month: 'Oct', value: 130, category: 'Normal'},
    {year: '2021', month: 'Nov', value: 100, category: 'Normal'},
    {year: '2021', month: 'Dec', value: 25, category: 'Normal'},
    
    {year: '2021', month: 'Jan', value: 50, category: 'Adsent'},
    {year: '2021', month: 'Feb', value: 50, category: 'Adsent'},
    {year: '2021', month: 'Mar', value: 50, category: 'Adsent'},
    {year: '2021', month: 'Apr', value: 50, category: 'Adsent'},
    {year: '2021', month: 'May', value: 50, category: 'Adsent'},
    {year: '2021', month: 'Jun', value: 50, category: 'Adsent'},
    {year: '2021', month: 'Jul', value: 50, category: 'Adsent'},
    {year: '2021', month: 'Aug', value: 50, category: 'Adsent'},
    {year: '2021', month: 'Sep', value: 50, category: 'Adsent'},
    {year: '2021', month: 'Oct', value: 50, category: 'Adsent'},
    {year: '2021', month: 'Nov', value: 50, category: 'Adsent'},
    {year: '2021', month: 'Dec', value: 50, category: 'Adsent'},

    {year: '2021', month: 'Jan', value: 120, category: 'Delay & Early Leave'},
    {year: '2021', month: 'Feb', value: 120, category: 'Delay & Early Leave'},
    {year: '2021', month: 'Mar', value: 120, category: 'Delay & Early Leave'},
    {year: '2021', month: 'Apr', value: 120, category: 'Delay & Early Leave'},
    {year: '2021', month: 'May', value: 120, category: 'Delay & Early Leave'},
    {year: '2021', month: 'Jun', value: 120, category: 'Delay & Early Leave'},
    {year: '2021', month: 'Jul', value: 120, category: 'Delay & Early Leave'},
    {year: '2021', month: 'Aug', value: 120, category: 'Delay & Early Leave'},
    {year: '2021', month: 'Sep', value: 120, category: 'Delay & Early Leave'},
    {year: '2021', month: 'Oct', value: 120, category: 'Delay & Early Leave'},
    {year: '2021', month: 'Nov', value: 120, category: 'Delay & Early Leave'},
    {year: '2021', month: 'Dec', value: 120, category: 'Delay & Early Leave'},

    {year: '2021', month: 'Jan', value: 80, category: 'Leaves & Business Trip'},
    {year: '2021', month: 'Feb', value: 60, category: 'Leaves & Business Trip'},
    {year: '2021', month: 'Mar', value: 50, category: 'Leaves & Business Trip'},
    {year: '2021', month: 'Apr', value: 120, category: 'Leaves & Business Trip'},
    {year: '2021', month: 'May', value: 60, category: 'Leaves & Business Trip'},
    {year: '2021', month: 'Jun', value: 70, category: 'Leaves & Business Trip'},
    {year: '2021', month: 'Jul', value: 100, category: 'Leaves & Business Trip'},
    {year: '2021', month: 'Aug', value: 120, category: 'Leaves & Business Trip'},
    {year: '2021', month: 'Sep', value: 150, category: 'Leaves & Business Trip'},
    {year: '2021', month: 'Oct', value: 10, category: 'Leaves & Business Trip'},
    {year: '2021', month: 'Nov', value: 75, category: 'Leaves & Business Trip'},
    {year: '2021', month: 'Dec', value: 50, category: 'Leaves & Business Trip'},






    {year: '2022', month: 'Jan', value: 100, category: 'Normal'},
    {year: '2022', month: 'Feb', value: 80, category: 'Normal'},
    {year: '2022', month: 'Mar', value: 75, category: 'Normal'},
    {year: '2022', month: 'Apr', value: 120, category: 'Normal'},
    {year: '2022', month: 'May', value: 100, category: 'Normal'},
    {year: '2022', month: 'Jun', value: 100, category: 'Normal'},
    {year: '2022', month: 'Jul', value: 75, category: 'Normal'},
    {year: '2022', month: 'Aug', value: 80, category: 'Normal'},
    {year: '2022', month: 'Sep', value: 120, category: 'Normal'},
    {year: '2022', month: 'Oct', value: 130, category: 'Normal'},
    {year: '2022', month: 'Nov', value: 100, category: 'Normal'},
    {year: '2022', month: 'Dec', value: 25, category: 'Normal'},
    
    {year: '2022', month: 'Jan', value: 0, category: 'Adsent'},
    {year: '2022', month: 'Feb', value: 0, category: 'Adsent'},
    {year: '2022', month: 'Mar', value: 0, category: 'Adsent'},
    {year: '2022', month: 'Apr', value: 0, category: 'Adsent'},
    {year: '2022', month: 'May', value: 0, category: 'Adsent'},
    {year: '2022', month: 'Jun', value: 0, category: 'Adsent'},
    {year: '2022', month: 'Jul', value: 0, category: 'Adsent'},
    {year: '2022', month: 'Aug', value: 0, category: 'Adsent'},
    {year: '2022', month: 'Sep', value: 0, category: 'Adsent'},
    {year: '2022', month: 'Oct', value: 0, category: 'Adsent'},
    {year: '2022', month: 'Nov', value: 0, category: 'Adsent'},
    {year: '2022', month: 'Dec', value: 0, category: 'Adsent'},

    {year: '2022', month: 'Jan', value: 0, category: 'Delay & Early Leave'},
    {year: '2022', month: 'Feb', value: 0, category: 'Delay & Early Leave'},
    {year: '2022', month: 'Mar', value: 0, category: 'Delay & Early Leave'},
    {year: '2022', month: 'Apr', value: 0, category: 'Delay & Early Leave'},
    {year: '2022', month: 'May', value: 0, category: 'Delay & Early Leave'},
    {year: '2022', month: 'Jun', value: 0, category: 'Delay & Early Leave'},
    {year: '2022', month: 'Jul', value: 0, category: 'Delay & Early Leave'},
    {year: '2022', month: 'Aug', value: 0, category: 'Delay & Early Leave'},
    {year: '2022', month: 'Sep', value: 0, category: 'Delay & Early Leave'},
    {year: '2022', month: 'Oct', value: 0, category: 'Delay & Early Leave'},
    {year: '2022', month: 'Nov', value: 0, category: 'Delay & Early Leave'},
    {year: '2022', month: 'Dec', value: 0, category: 'Delay & Early Leave'},

    {year: '2022', month: 'Jan', value: 80, category: 'Leaves & Business Trip'},
    {year: '2022', month: 'Feb', value: 60, category: 'Leaves & Business Trip'},
    {year: '2022', month: 'Mar', value: 50, category: 'Leaves & Business Trip'},
    {year: '2022', month: 'Apr', value: 120, category: 'Leaves & Business Trip'},
    {year: '2022', month: 'May', value: 60, category: 'Leaves & Business Trip'},
    {year: '2022', month: 'Jun', value: 70, category: 'Leaves & Business Trip'},
    {year: '2022', month: 'Jul', value: 100, category: 'Leaves & Business Trip'},
    {year: '2022', month: 'Aug', value: 120, category: 'Leaves & Business Trip'},
    {year: '2022', month: 'Sep', value: 150, category: 'Leaves & Business Trip'},
    {year: '2022', month: 'Oct', value: 10, category: 'Leaves & Business Trip'},
    {year: '2022', month: 'Nov', value: 75, category: 'Leaves & Business Trip'},
    {year: '2022', month: 'Dec', value: 50, category: 'Leaves & Business Trip'},
  ]);
  
  const dataAreafiltered = dataArea.filter(e => e.year === annualYear);
  const configArea = {
    data: dataAreafiltered,
    xField: 'month',
    yField: 'value',
    seriesField: 'category',
    color: ['#F9A654', '#FD96A6', '#43A2CC', '#66CE9A'],
    
    yAxis: {
      label: {
        formatter: (v) => v,
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



  const data = [
    {
      type: '1',
      value: 30,
    },
    {
      type: '2',
      value: 20,
    },
    {
      type: '3',
      value: 10,
    },
    {
      type: '4',
      value: 40,
    },
    {
      type: '5',
      value: 50,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'value',
    color: ({ type }) => {
      if (type === '1') {
        return '#F9A654';
      } else if (type === '2') {
        return '#FD96A6'
      } else if (type === '3') {
        return '#43A2CC'
      } else if (type === '4') {
        return '#66CE9A'
      } else if (type === '5') {
        return '#897ED4'
      }
      return '#43A2CC';
    },
    label: {
      content: (originData) => {
        const val = parseFloat(originData.value);
        return (val).toFixed(1) + '%';
      },
      offset: 100,
    },
    legend: false,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };

  

  return (
    <div className='statistics-container'>


      <div className='monthly-attendance'>
        <div className="head">
          <h3>Monthly Attendance</h3>
          {/* <p>Dec, 2020</p> */}
          <select name="monthlyYear" onChange={(e) => setMonthlyYear(e.target.value)}>
            <option selected value="Dec, 2020">Dec, 2020</option>
            <option value="Jan, 2021">Jan, 2021</option>
            <option value="Feb, 2021">Feb, 2021</option>
          </select>
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
                // position: 'relative',
                // left: '15%',
                margin: '20px 0 40px 0',
              }} 
            />
          </div>
        </div>
      </div>


      <div className='annual-attendance'>
        <div className="head">
          <h3>Annual Attendance</h3>
          {/* <p>2020</p> */}
          <select name="date" onChange={(e) => setAnnualYear(e.target.value)}>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
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
            <CustomSelect 
              name='by-organization' 
              options={[
                {value: 'Organization 1', name: 'Organization 1'},
                {value: 'Organization 2', name: 'Organization 2'},
              ]}
              onChange={(e) => alert(e.target.value)}
            />
            <CustomSelect 
              name='by-organization' 
              options={[
                {value: 'Organization 1', name: 'Organization 1'},
                {value: 'Organization 2', name: 'Organization 2'},
              ]}
              onChange={(e) => alert(e.target.value)}
            />
            <CustomSelect 
              name='by-organization' 
              options={[
                {value: 'Organization 1', name: 'Organization 1'},
                {value: 'Organization 2', name: 'Organization 2'},
              ]}
              onChange={(e) => alert(e.target.value)}
            />
          </div>

          <div className='column-chart-container'>
            <Column {...config} />
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
          {/* <div className="custom-column-chart-container">
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
          </div> */}
        </div>
      </div>

      
    </div>
  )
}

export default Statistics