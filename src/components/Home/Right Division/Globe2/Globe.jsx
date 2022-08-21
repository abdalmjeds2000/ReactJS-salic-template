import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useContext } from 'react';
import { UserContext } from '../../../../Context/userContext';
import Globe from 'react-globe.gl';
import img from './earth.png';

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




function GlobeE3() {
  const { globe_data } = useContext(UserContext)
  const globeEl = useRef();
  const ourCountry = ['Canada', 'Barzil', 'United Kingdom', 'Ukraine', 'Saudi Arabia', 'India', 'Australia'];
  const [rotation, setRotation] = useState(true);
  const [currentCountry, setCurrentCountry] = useState('Saudi Arabia');
  const [hoverD, setHoverD] = useState();


  useEffect(() => {
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 1.5;
    globeEl.current.pointOfView({ lat: 18, lng: 45, altitude: 2.5 }, 5000);
  }, [rotation]);

  
  return (
    <div className='globe-2'>
      <Globe 
        ref={globeEl}
        backgroundColor='#ffffff00'
        width={650}
        height={850}
        hexPolygonsData={globe_data.features} 
        polygonAltitude={(d) => (d === hoverD ? 0.5 : 0.1)}
        globeImageUrl={img}
        hexPolygonAltitude={0.02}
        hexPolygonMargin={0.1}
        // onHexPolygonClick={(polygon, event, { lat, lng, altitude }) => console.log((polygon, event, { lat, lng, altitude }))}
        hexPolygonLabel={({ properties: d }) => {
          if(ourCountry.includes(d.ADMIN)){
            setCurrentCountry(d.ADMIN)
            return `<div class='card-container'>
                      <div>
                        <img src='' alt="Company Logo" />
                        <div>
                          <h3 data-item='name'>Merredin Farms</h3>
                          <p>Australia,</p>
                        </div>
                      </div>
                      <div>
                        <p>Merredin Farms is one of Australia’s largest farming companies with arable lands extending over 211k ha in western Australia, in addition to a flock of more than 35k Merino sheep.</p>
                      </div>
                    </div>`
          }
          return null
        }}
        // hexPolygonColor={ () => '#0C508C'}
        hexPolygonColor={({ properties: d }) => {
          return ourCountry.includes(d.ADMIN) ? '#fff' : 'rgba(255, 255, 255, 0.25)'
        }}
        atmosphereColor='#0C508C'
        onHexPolygonHover={setHoverD}
      />
      <div className='products-imgs'>
        {
          currentCountry === 'Saudi Arabia'
          ? <><img src={productWheat} alt="product" />
              <img src={productBarley} alt="product" />
              <img src={productCorn} alt="product" />
              <img src={productSoybean} alt="product" /></>
          : currentCountry === 'Canada' 
          ? <><img src={productRice} alt="product" />
              <img src={productPoultry} alt="product" />
              <img src={productOil} alt="product" />
              <img src={productFodder} alt="product" /></> 
          
          : ''
        }
        
        
        {/* <img src={productRedMeat} alt="product" />
        <img src={productSugar} alt="product" />
        <img src={productMilk} alt="product" />
        <img src={productAquaculture} alt="product" />
         */}
      </div>
    </div>
  )
}

export default GlobeE3