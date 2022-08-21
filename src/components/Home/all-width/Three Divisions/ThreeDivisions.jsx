import React, { useCallback, useEffect, useState } from "react";
import './ThreeDivisions.css';
import { AlertFilled } from '@ant-design/icons'
import { Timeline, Tweet } from 'react-twitter-widgets'
import { NavLink } from 'react-router-dom';
import ImageViewer from 'react-simple-image-viewer';

import Plyr from "plyr-react"
import "plyr-react/plyr.css"

import WorldBG from '../../../../icons/home/world.svg';
import { ReactComponent as Policies } from '../../../../icons/home/Organization Documents/Policies.svg'
import { ReactComponent as Circulations } from '../../../../icons/home/Organization Documents/Circulations.svg'
import { ReactComponent as Offers } from '../../../../icons/home/Organization Documents/Offers.svg'
import { ReactComponent as UserGuides } from '../../../../icons/home/Organization Documents/User Guides.svg'
import { ReactComponent as Research } from '../../../../icons/home/Organization Documents/Research.svg'
import { ReactComponent as SALICTemplates } from '../../../../icons/home/Organization Documents/SALIC Templates.svg'

import communityNews from '../../../../icons/home/community news/news-person.png'
import VideoPoster from '../../../../icons/home/media center/gallery1.png'
import Image1 from '../../../../icons/home/media center/gallery2.png'
import Image2 from '../../../../icons/home/media center/gallery3.png'
import Image3 from '../../../../icons/home/media center/gallery4.png'
import Image4 from '../../../../icons/home/media center/gallery5.png'

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
  // Image Viewer Code
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [Image1, Image2, Image3, Image4];
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
          <Plyr
            source={{
              type: "video", 
              sources: [{ src: 'zj_sRm4amu8', provider: 'youtube'}], 
              poster: VideoPoster,
            }}
            options={{iconPrefix: <AlertFilled />, loadSprite: true}}
          />
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
          height: 'calc(100vh - 125px)'
        }}
      />
      {/* <Tweet tweetId="1538823702271430656"  /> */}
    </div>


    <img src={WorldBG} alt="world background" />
  </div>
}

export default ThreeDivisions