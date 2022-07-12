import React, { useState } from 'react'
import './CommunityNews.css';

import NewsBox from './news-box/NewsBox';

import PersonImg from '../../../../icons/home/person.png';
import worldIllustration from '../../../../icons/home/world.svg';


function CommunityNews() {

  const [news, setNews] = useState([
    {id: 0, img: PersonImg, name: 'Abdullah Al-Mosa', jobTitle: 'HR Manager', newsTitle: 'New Employee: Abdulaziz Aldalaan ', newsDetails: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using '},
    {id: 1, img: PersonImg, name: 'Abdullah Al-Mosa', jobTitle: 'HR Manager', newsTitle: 'New Employee: Abdulaziz Aldalaan ', newsDetails: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using '},
    {id: 2, img: PersonImg, name: 'Abdullah Al-Mosa', jobTitle: 'HR Manager', newsTitle: 'New Employee: Abdulaziz Aldalaan ', newsDetails: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using '},
    {id: 3, img: PersonImg, name: 'Abdullah Al-Mosa', jobTitle: 'HR Manager', newsTitle: 'New Employee: Abdulaziz Aldalaan ', newsDetails: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using '},
    {id: 4, img: PersonImg, name: 'Abdullah Al-Mosa', jobTitle: 'HR Manager', newsTitle: 'New Employee: Abdulaziz Aldalaan ', newsDetails: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using '},
    {id: 5, img: PersonImg, name: 'Abdullah Al-Mosa', jobTitle: 'HR Manager', newsTitle: 'New Employee: Abdulaziz Aldalaan ', newsDetails: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using '},
    {id: 6, img: PersonImg, name: 'Abdullah Al-Mosa', jobTitle: 'HR Manager', newsTitle: 'New Employee: Abdulaziz Aldalaan ', newsDetails: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using '},
    {id: 7, img: PersonImg, name: 'Abdullah Al-Mosa', jobTitle: 'HR Manager', newsTitle: 'New Employee: Abdulaziz Aldalaan ', newsDetails: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using '},
    {id: 8, img: PersonImg, name: 'Abdullah Al-Mosa', jobTitle: 'HR Manager', newsTitle: 'New Employee: Abdulaziz Aldalaan ', newsDetails: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using '},
    {id: 9, img: PersonImg, name: 'Abdullah Al-Mosa', jobTitle: 'HR Manager', newsTitle: 'New Employee: Abdulaziz Aldalaan ', newsDetails: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using '},
    {id: 10, img: PersonImg, name: 'Abdullah Al-Mosa', jobTitle: 'HR Manager', newsTitle: 'New Employee: Abdulaziz Aldalaan ', newsDetails: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using '},
  ])


  return (
    <div className='community-news-page-container'>
      <img src={worldIllustration} className='bg-img-world' />
      <h1>Community News</h1>
      <div className='news-boxs'>
        {news.map(box => {
          return <NewsBox key={box.id} />
        })}
      </div>
    </div>
  )
}

export default CommunityNews