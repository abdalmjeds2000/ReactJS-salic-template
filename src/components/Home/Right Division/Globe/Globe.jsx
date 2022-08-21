import React, { useCallback, useEffect, useRef, useState } from 'react'
import './globe.css'
import { Carousel } from 'antd';
import { useContext } from 'react';
import { UserContext } from '../../../../Context/userContext';
import Globe from 'react-globe.gl';
import img from './earth.png';
import MerredinLogo from '../../../../icons/home/Companys/merredin_logo.png'
import DawatLogo from '../../../../icons/home/Companys/dawat_logo.png'
import UnitedFarmers from '../../../../icons/home/Companys/United Farmers.png'
import SalicHQ from '../../../../icons/home/Companys/salic_HQ.png'
import SALICUK from '../../../../icons/home/Companys/SALIC UK.png'
import MinervaFoods from '../../../../icons/home/Companys/Minerva Foods.png'
import G3 from '../../../../icons/home/Companys/G3.png'

import productWheat from '../../../../icons/home/Products/Wheat.png'
import productBarley from '../../../../icons/home/Products/Barley.png'
import productCorn from '../../../../icons/home/Products/Corn.png'
import productSoybean from '../../../../icons/home/Products/Soybean.png'
import productRice from '../../../../icons/home/Products/Rice.png'
import productSugar from '../../../../icons/home/Products/Sugar.png'
import productOil from '../../../../icons/home/Products/Edible Oil.png'
import productFodder from '../../../../icons/home/Products/Fodder.png'
import productRedMeat from '../../../../icons/home/Products/Red Meat.png'
import productAquaculture from '../../../../icons/home/Products/Aquaculture.png'
import productMilk from '../../../../icons/home/Products/Milk Products.png'
import productPoultry from '../../../../icons/home/Products/Poultry.png'


function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};



function GlobeE3(props) {
  const context = useContext(UserContext)
  const globeEl = useRef();
  const ourCountry = ['Canada', 'Barzil', 'United Kingdom', 'Ukraine', 'Saudi Arabia', 'India', 'Australia'];
  const [rotation, setRotation] = useState(true);
  const [currentCountry, setCurrentCountry] = useState('Saudi Arabia');
  const { isGlobeReady, toggleGlobeReady } = useContext(UserContext)
  const [hover, setHover] = useState();

  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {setWindowSize(getWindowSize());}
    window.addEventListener('resize', handleWindowResize);
  }, []);

  // Auto Rotation
  useEffect(() => {
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().enableZoom = false
    globeEl.current.controls().autoRotateSpeed = 1.5;
    globeEl.current.pointOfView({ lat: 45, lng: 45, altitude: 2.1 }, 5000);
  }, [rotation]);
  // Stop Rotation on Hover 
  const onHoverHandler = useCallback((polygon) => {
    if (polygon !== null) {
      setHover(polygon.properties.ISO_A3);
      // setRotation(false);
      globeEl.current.controls().autoRotate = false;
    } else {
      setHover(null);
      // setRotation(true);
      globeEl.current.controls().autoRotate = true;
    }
  }, []);
  // Return Card by hover on Country
  let cardDataByCountry = (country) => {
    if(country === 'Canada') {
      return  <div class='card-container'>
                <div>
                  <img src={G3} alt="Company Logo" />
                  <div>
                    <h3>G3 Global Grain Group (G3)</h3>
                    <p>Canada, Winnipeg</p>
                  </div>
                </div>
                <div>
                  <p>A joint venture between SALIC Canada Limited,our wholly owned affiliate, and Bunge Canada Limited. The formation of G3 and its acquisition of the majority stake in CWB.</p>
                </div>
                {/* <ul>
                  <li>Wheat</li>
                  <li>Barley</li>
                  <li>Corn</li>
                </ul> */}
              </div>
    } else if(country === 'Barzil') {
        return <div class='card-container'>
                  <div>
                    <img src={MinervaFoods} alt="Company Logo" />
                    <div>
                      <h3>Minerva Foods</h3>
                      <p>Brazil, São Paulo</p>
                    </div>
                  </div>
                  <div>
                    <p>Minerva Foods is one of the South American leaders in the production and sale of fresh beef and its byproducts, as well as live cattle exports.</p>
                  </div>
                  {/* <ul>
                    <li>Red Meat</li>
                  </ul> */}
                </div>
    } else if(country === 'United Kingdom') {
        return <div class='card-container'>
                  <div>
                    <img src={SALICUK} alt="Company Logo" />
                    <div>
                      <h3>Hummingbird</h3>
                      <p>United Kingdom,</p>
                    </div>
                  </div>
                  <div>
                    <p>Facilitating SALIC’s investments in new overseas ventures.  SALIC UK will oversee SALIC’s investment fund management activities in the UK, acting as a holding company for investments in Europe, North America and other regions.</p>
                  </div>
                  {/* <ul>
                    <li>Wheat</li>
                    <li>Barley</li>
                    <li>Corn</li>
                  </ul> */}
                </div>
    } else if(country === 'Australia') {
        return <div class='card-container'>
                  <div>
                    <img src={MerredinLogo} alt="Company Logo" />
                    <div>
                      <h3>Merredin Farms</h3>
                      <p>Australia,</p>
                    </div>
                  </div>
                  <div>
                    <p>Merredin Farms is one of Australia’s largest farming companies with arable lands extending over 211k ha in western Australia, in addition to a flock of more than 35k Merino sheep.
                    Merredin farms produce around 117,000 tons of wheat and 8,500 tons Barley annually The acquisition was successfully finalized in April 2019</p>
                  </div>
                  {/* <ul>
                    <li>Meat</li>
                  </ul> */}
                </div>
    } else if(country === 'Saudi Arabia') {
      return <div class='card-container'>
                <div>
                  <img src={SalicHQ} alt="Company Logo" />
                  <div>
                    <h3>SALIC HQ</h3>
                    <p>Saudi Arabia, Riyadh</p>
                  </div>
                </div>
                <div>
                  <p>Established by Royal Decree at 04/14/2009, as a Saudi joint stock company that is owned by PIF. Its statutes state that its activity is in the field of investments in agricultural and livestock in countries that have a competitive advantage in contributing to the production of selected food goods and their availability for export markets.</p>
                </div>
                {/* <ul>
                  <li>Wheat</li>
                  <li>Barley</li>
                  <li>Corn</li>
                </ul> */}
              </div>
    } else if(country === 'India') {
      return <div class='card-container'>
                <div>
                  <img src={DawatLogo} alt="Company Logo" />
                  <div>
                    <h3>DawatLogo</h3>
                    <p>India, Saket, New Delhi</p>
                  </div>
                </div>
                <div>
                  <p>Daawat is India's Finest Basmati Rice, which is produced by one of the leading Basmati rice manufacturers in the country, LT Foods Ltd.</p>
                </div>
                {/* <ul>
                  <li>Rice</li>
                </ul> */}
              </div>
    } else if(country === 'Ukraine') {
      return <div class='card-container'>
                <div>
                  <img src={UnitedFarmers} alt="Company Logo" />
                  <div>
                    <h3>United Farmers Holding Company (UFHC)</h3>
                    <p>Ukraine, Western Ukraine</p>
                  </div>
                </div>
                <div>
                  <p>A joint venture equally owned by SALIC and two Saudi private sector companies to explore global agribusiness investment opportunities.</p>
                </div>
                {/* <ul>
                  <li>Grain</li>
                </ul> */}
              </div>
    }
  }

  return (
    <div className='globe'>
      <Globe 
        ref={globeEl}
        backgroundColor='#ffffff00'
        width={windowSize.innerWidth >= 1750 ? 600 : windowSize.innerWidth >= 1500 ? 480 : windowSize.innerWidth >= 1400 ? 430 : windowSize.innerWidth >= 1300 ? 400 : windowSize.innerWidth >= 1150 ? 340 : windowSize.innerWidth >= 1000 ? 320 : 0}
        height={windowSize.innerWidth >= 1750 ? 650 : windowSize.innerWidth >= 1500 ? 480 : windowSize.innerWidth >= 1400 ? 430 : windowSize.innerWidth >= 1300 ? 400 : windowSize.innerWidth >= 1150 ? 340 : windowSize.innerWidth >= 1000 ? 320 : 0}
        hexPolygonsData={context.globe_data.features} 
        globeImageUrl={img}
        hexPolygonAltitude={0.02}
        hexPolygonMargin={0.1}
        onGlobeReady={toggleGlobeReady}
        // onHexPolygonClick={(polygon, event, { lat, lng, altitude }) => console.log((polygon, event, { lat, lng, altitude }))}
        hexPolygonLabel={({ properties: d }) => {
          if(ourCountry.includes(d.ADMIN)){
            setCurrentCountry(d.ADMIN)
            return `<p style='color: white !important;'>${d.ADMIN}</p>`
          }
          return null
        }}
        hexPolygonColor={({ properties: d }) => {
          return ourCountry.includes(d.ADMIN) ? '#fff' : 'rgba(255, 255, 255, 0.25)'
        }}
        atmosphereColor='#0C508C'
        onHexPolygonHover={onHoverHandler}
      />

      <div className="cards">
        {cardDataByCountry(currentCountry)}
      </div>
      <div className='products-imgs'>
        {
          currentCountry === 'Saudi Arabia'
          ? <>
              <img src={productWheat} alt="product" />
              <img src={productBarley} alt="product" />
              <img src={productCorn} alt="product" />
            </>
          : currentCountry === 'Canada' 
          ? <>
              <img src={productWheat} alt="product" />
              <img src={productBarley} alt="product" />
              <img src={productCorn} alt="product" />
            </>
          : currentCountry === 'Brazil' 
          ? <>
              <img src={productRedMeat} alt="product" />
            </>
          : currentCountry === 'Australia' 
          ? <>
              <img src={productRedMeat} alt="product" />
            </>
          : currentCountry === 'India' 
          ? <>
              <img src={productRice} alt="product" />
            </>
          : currentCountry === 'Ukraine' 
          ? <>
              <img src={productRice} alt="product" />
            </>
          : currentCountry === 'United Kingdom' 
          ? <>
              <img src={productSoybean} alt="product" />
              <img src={productSugar} alt="product" />
              <img src={productOil} alt="product" />
            </>

          
          : ''
        }
      </div>
    </div>
  )
}

export default GlobeE3