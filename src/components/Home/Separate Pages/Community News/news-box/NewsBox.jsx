import React from 'react'
import './NewsBox.css';

import PersonImg from '../../../../../icons/home/person.png';

function NewsBox(props) {
  return (
    <div className='news-box'>
      <div className="header">
        <img src={PersonImg} alt="" />
        <div>
          <h3>Abdullah Al-Mosa</h3>
          <p>HR Manager</p>
        </div>
      </div>
      <h2>New Employee: Abdulaziz Aldalaan</h2>
      <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 
      </p>
      <a href="/">More</a>
    </div>
  )
}


export default NewsBox
