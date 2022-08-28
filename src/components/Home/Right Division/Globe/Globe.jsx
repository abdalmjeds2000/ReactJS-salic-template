import React, { useCallback, useEffect, useRef, useState } from 'react'
import './globe.css'
import { useContext } from 'react';
import { UserContext } from '../../../../Context/userContext';
import Globe from 'react-globe.gl';
import Slider from 'infinite-react-carousel';

import img from './earth.png';
import MerredinLogo from '../../../../icons/home/Companys/merredin_logo.png'
import DawatLogo from '../../../../icons/home/Companys/dawat_logo.png'
import UnitedFarmers from '../../../../icons/home/Companys/United Farmers.png'
import SalicHQ from '../../../../icons/home/Companys/salic_HQ.png'
import SALICUK from '../../../../icons/home/Companys/SALIC UK.png'
import MinervaFoods from '../../../../icons/home/Companys/Minerva Foods.png'
import G3 from '../../../../icons/home/Companys/G3.png'
import Hummingbird from '../../../../icons/home/Companys/Hummingbird.jpg'

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



function GlobeE3(props) {
  const globeEl = useRef();
  const ourCountry = ['Canada', 'Barzil', 'United Kingdom', 'Ukraine', 'Saudi Arabia', 'India', 'Australia'];
  const [rotation, setRotation] = useState(true);
  const [currentCountry, setCurrentCountry] = useState('Saudi Arabia');
  const { globe_data, isGlobeReady, toggleGlobeReady } = useContext(UserContext)
  const [hover, setHover] = useState();


  // Get Window Size
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {setWindowSize(getWindowSize());}
    window.addEventListener('resize', handleWindowResize);
  }, []);

  // Not Load in Mobile
  useEffect(() => {
    if(windowSize.innerWidth < 990) {
      toggleGlobeReady(true)
    }
  }, [])

  // Globe Ref
  useEffect(() => {
    if(windowSize.innerWidth > 990) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().enableZoom = false
      globeEl.current.controls().autoRotateSpeed = 1.5;
      globeEl.current.pointOfView({ lat: 30, lng: 45, altitude: 1.7 }, 5000);
    }
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
                <div className='products-imgs'>
                  <img src={productWheat} alt="product" />
                  <img src={productBarley} alt="product" />
                  <img src={productCorn} alt="product" />
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
                  <div className='products-imgs'>
                    <img src={productRedMeat} alt="product" />
                  </div>
                  {/* <ul>
                    <li>Red Meat</li>
                  </ul> */}
                </div>
    } else if(country === 'United Kingdom') {
        return  <Slider autoplay={true}>
                  <div class='card-container'>
                    <div>
                      <img src={SALICUK} alt="Company Logo" />
                      <div>
                        <h3>SALIC UK</h3>
                        <p>United Kingdom, London</p>
                      </div>
                    </div>
                    <div>
                      <p>Facilitating SALIC’s investments in new overseas ventures.  SALIC UK will oversee SALIC’s investment fund management activities in the UK, acting as a holding company for investments in Europe, North America and other regions.</p>
                    </div>
                    <div className='products-imgs'>
                      <img src={productWheat} alt="product" />
                      <img src={productBarley} alt="product" />
                      <img src={productCorn} alt="product" />
                    </div>
                    {/* <ul>
                      <li>Wheat</li>
                      <li>Barley</li>
                      <li>Corn</li>
                    </ul> */}
                  </div>
                  <div class='card-container'>
                    <div>
                      <img src={Hummingbird} alt="Company Logo" />
                      <div>
                        <h3>Hummingbird</h3>
                        <p>United Kingdom,</p>
                      </div>
                    </div>
                    <div>
                      <p>Hummingbird Technologies is an artificial intelligence business, using imagery and data analytics from satellite, drone, plane and robot technology, along with proprietary algorithms, to provide farmers with high-resolution maps of their crops at critical decision-making junctions in the season.</p>
                    </div>
                    <div className='products-imgs'>
                      <img src={productSoybean} alt="product" />
                      <img src={productSugar} alt="product" />
                      <img src={productOil} alt="product" />
                    </div>
                    {/* <ul>
                      <li>Wheat</li>
                      <li>Barley</li>
                      <li>Corn</li>
                    </ul> */}
                  </div>
                </Slider>
    } else if(country === 'Australia') {
        return  <Slider autoplay={true}>
                  <div class='card-container'>
                    <div>
                      <img src={MerredinLogo} alt="Company Logo" />
                      <div>
                        <h3>Merredin Farms</h3>
                        <p>Australia,</p>
                      </div>
                    </div>
                    <div>
                      <p>Merredin Farms is one of Australia’s largest farming companies with arable lands extending over 211k ha in western Australia, in addition to a flock of more than 35k Merino sheep.</p>
                    </div>
                    <div className='products-imgs'>
                      <img src={productRedMeat} alt="product" />
                    </div>
                    {/* <ul>
                      <li>Meat</li>
                    </ul> */}
                  </div>
                  <div class='card-container'>
                    <div>
                      <img src={MerredinLogo} alt="Company Logo" />
                      <div>
                        <h3>Baladjie</h3>
                        <p>Australia,</p>
                      </div>
                    </div>
                    <div>
                      <p>Baladjie is an aggregation of over 200,000 hectares of farming in Western Australia’s wheatbelt that also carries a 40,000 head Merino sheep flock. SALIC owns 100 % of Baladji</p>
                    </div>
                    <div className='products-imgs'>
                      <img src={productWheat} alt="product" />
                      <img src={productRedMeat} alt="product" />
                    </div>
                    {/* <ul>
                      <li>Meat</li>
                    </ul> */}
                  </div>
                </Slider>
    } else if(country === 'Saudi Arabia') {
      return  <div class='card-container'>
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
                <div className='products-imgs'>
                  <img src={productWheat} alt="product" />
                  <img src={productBarley} alt="product" />
                  <img src={productCorn} alt="product" />
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
                    <h3>Daawat</h3>
                    <p>India, Saket, New Delhi</p>
                  </div>
                </div>
                <div>
                  <p>Daawat is India's Finest Basmati Rice, which is produced by one of the leading Basmati rice manufacturers in the country, LT Foods Ltd.</p>
                </div>
                <div className='products-imgs'>
                  <img src={productRice} alt="product" />
                </div>
                {/* <ul>
                  <li>Rice</li>
                </ul> */}
              </div>
    } else if(country === 'Ukraine') {
      return  <Slider autoplay={true}>
                <div class='card-container'>
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
                  <div className='products-imgs'>
                    <img src={productWheat} alt="product" />
                    <img src={productBarley} alt="product" />
                    <img src={productCorn} alt="product" />
                  </div>
                  {/* <ul>
                    <li>Grain</li>
                  </ul> */}
                </div>
                <div class='card-container'>
                  <div>
                    <img src={UnitedFarmers} alt="Company Logo" />
                    <div>
                      <h3>Mriya Agro Holding</h3>
                      <p>Ukraine, Western Ukraine</p>
                    </div>
                  </div>
                  <div>
                    <p>A subsidiary of SALIC, one of the largest agricultural companies in Ukraine. Mriya Agro Holding, based in Ternopol, has an agricultural land area of 165,000 hectares in six regions of western Ukraine, a storage capacity of 380,000 tons and its main product is grain.</p>
                  </div>
                  <div className='products-imgs'>
                  </div>
                  {/* <ul>
                    <li>Grain</li>
                  </ul> */}
                </div>
              </Slider>
    }
  }

  return (
    windowSize.innerWidth > 990
    ? <div className='globe'>
        <Globe 
          ref={globeEl}
          backgroundColor='#ffffff00'
          width={windowSize.innerWidth >= 1900 ? 550 : windowSize.innerWidth >= 1750 ? 520 : windowSize.innerWidth >= 1500 ? 450 : windowSize.innerWidth >= 1400 ? 410 : windowSize.innerWidth >= 1300 ? 380 : windowSize.innerWidth >= 1150 ? 340 : windowSize.innerWidth >= 1000 ? 280 : 0}
          height={windowSize.innerWidth >= 1900 ? 550 : windowSize.innerWidth >= 1750 ? 520 : windowSize.innerWidth >= 1500 ? 450 : windowSize.innerWidth >= 1400 ? 410 : windowSize.innerWidth >= 1300 ? 380 : windowSize.innerWidth >= 1150 ? 340 : windowSize.innerWidth >= 1000 ? 280 : 0}
          hexPolygonsData={globe_data.features} 
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
      </div>
    : null
  )
}

export default GlobeE3