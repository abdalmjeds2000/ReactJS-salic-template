import React from "react";
import { Tweet } from 'react-twitter-widgets'

import { NavLink } from 'react-router-dom';


import './ThreeDivisions.css';

import WorldBG from '../../../../icons/home/world.svg';


import PlayIcon from '../../../../icons/home/media center/Iconly-Light-Play.svg'

import Policies from '../../../../icons/home/Organization Documents/Policies.svg'
import Circulations from '../../../../icons/home/Organization Documents/Circulations.svg'
import Offers from '../../../../icons/home/Organization Documents/Offers.svg'
import UserGuides from '../../../../icons/home/Organization Documents/User Guides.svg'
import Research from '../../../../icons/home/Organization Documents/Research.svg'
import SALICTemplates from '../../../../icons/home/Organization Documents/SALIC Templates.svg'



import communityNews from '../../../../icons/home/community news/news-person.png'

const communityNewsBoxs = [
  {id: 0, name: 'Policies', icon: Policies},
  {id: 1, name: 'Circulations', icon: Circulations},
  {id: 2, name: 'Offers', icon: Offers},
  {id: 3, name: 'User Guides', icon: UserGuides},
  {id: 4, name: 'Research', icon: Research},
  {id: 5, name: 'SALIC Templates', icon: SALICTemplates},
];

const ThreeDivisions = (props) => {



  return <div className="three-divisions">
      
    <div className="media-center">
      <div className="header">
        <h3>Media Center</h3>
        <a href="/">See All</a>
      </div>
      <div className="gallerys">
        <div className="gallery1"><img src={PlayIcon} alt="" /></div>
        <div className="gallery2"></div>
        <div className="gallery3"></div>
        <div className="gallery4"></div>
        <div className="gallery5"></div>
      </div>
    </div>



    <div className="community-news">
      

      <div className="news_organization_container">
        <div className="news">
          <div className="header">
            <h3>Community News</h3>
            <NavLink to="community-news">See All</NavLink>
          </div>
          <div className="box">
            <h3 className="title">New Hire: Abdullah Al-Mosa</h3>
            <p className="description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout, content here’, making it look like readable English.</p>
            <div className="by">
              <img src={communityNews} alt="" />
              <div>
                <p>Naser Mohna</p>
                <p>HR Manager</p>
              </div>
            </div>
          </div>
          <div className="box">
            <h3 className="title">New Hire: Abdullah Al-Mosa</h3>
            <p className="description">It is a long established fact that a reader will be distracted by the readable. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.</p>
            <div className="by">
              <img src={communityNews} alt="" />
              <div>
                <p>Naser Mohna</p>
                <p>HR Manager</p>
              </div>
            </div>
          </div>
        </div>
        <div className="organization-documents-container">
          <div className="header">
            <h3>Organization Documents</h3>
          </div>
          <div className="boxs">
            {communityNewsBoxs.map(box => {
              return <div key={box.id} className="oranization-documents">
                <img src={box.icon} alt={box.name} />
                <p>{box.name}</p>
              </div>
            })}
          </div>
        </div>
      </div>

    </div>



    <div className="twitter-wid">
      <Tweet tweetId="1538823702271430656" />
    </div>
    
    <img src={WorldBG} alt="world background" />


  </div>
}

export default ThreeDivisions