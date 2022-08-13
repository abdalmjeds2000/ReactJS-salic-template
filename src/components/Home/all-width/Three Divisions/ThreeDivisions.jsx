import React, { useCallback, useEffect, useState } from "react";
import './ThreeDivisions.css';

import { Timeline, Tweet } from 'react-twitter-widgets'
import { NavLink } from 'react-router-dom';
import ImageViewer from 'react-simple-image-viewer';
import Plyr from "plyr-react"
import "plyr-react/plyr.css"


import WorldBG from '../../../../icons/home/world.svg';
import PlayIcon from '../../../../icons/home/media center/Iconly-Light-Play.svg'
import { ReactComponent as Policies } from '../../../../icons/home/Organization Documents/Policies.svg'
import { ReactComponent as Circulations } from '../../../../icons/home/Organization Documents/Circulations.svg'
import { ReactComponent as Offers } from '../../../../icons/home/Organization Documents/Offers.svg'
import { ReactComponent as UserGuides } from '../../../../icons/home/Organization Documents/User Guides.svg'
import { ReactComponent as Research } from '../../../../icons/home/Organization Documents/Research.svg'
import { ReactComponent as SALICTemplates } from '../../../../icons/home/Organization Documents/SALIC Templates.svg'

import communityNews from '../../../../icons/home/community news/news-person.png'

// import video from '../../../../icons/video.mp4';



const communityNewsBoxs = [
  {id: 0, name: 'Policies', icon: <Policies />},
  {id: 1, name: 'Circulations', icon: <Circulations />},
  {id: 2, name: 'Offers', icon: <Offers />},
  {id: 3, name: 'User Guides', icon: <UserGuides />},
  {id: 4, name: 'Research', icon: <Research />},
  {id: 5, name: 'SALIC Templates', icon: <SALICTemplates />},
];



const ThreeDivisions = (props) => {

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    'https://images.unsplash.com/photo-1660299678227-30da3150f1f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1660227807238-a6591b9c0c11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1660275780310-e705e007b18b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1660239963313-8bc0c2735281?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
  ];


  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);
  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };


  return <div className="three-divisions">
    

    <div className="media-center">
      <div className="header">
        <h3>Media Center</h3>
        <a href="/">See All</a>
      </div>

      <div className="gallerys">
        {/* Video Section */}
        <div className="gallery gallery1">
          {/* <img src={PlayIcon} alt="" /> */}
          {/* <video width="100%" height="100%" controls poster="https://pbs.twimg.com/media/FYrTZYPX0AU62b7?format=jpg&name=small">
            <source src={video} type="video/mp4" />
          </video> */}
          {/* <iframe width="100%" src="https://www.youtube.com/embed/zj_sRm4amu8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
          <Plyr options />
        </div>

        {/* Images Section */}
        {images.map((src, index) => (
          <div
            src={src}
            onClick={ () => openImageViewer(index) }
            key={ index }
            className={`gallery gallery${index+2}`}
            style={{backgroundImage: `url(${src})`}}
          ></div>
        ))}
        {isViewerOpen && (
          <ImageViewer
            src={ images }
            currentIndex={ currentImage }
            disableScroll={ true }
            closeOnClickOutside={ true }
            onClose={ closeImageViewer }
          />
        )}
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
                <div>
                  {box.icon}
                </div>
                <p>{box.name}</p>
              </div>
            })}
          </div>
        </div>
      </div>

    </div>


    <div className="twitter-wid">
      <div className="header">
        <h3>Social Media</h3>
      </div>
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'KSA_SALIC'
        }}
        options={{
          height: 'calc(100vh - 115px)'
        }}
      />
      {/* <Tweet tweetId="1538823702271430656"  /> */}
    </div>

    <img src={WorldBG} alt="world background" />
  </div>
}

export default ThreeDivisions