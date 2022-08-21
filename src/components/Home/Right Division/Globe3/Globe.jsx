import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useContext } from 'react';
import { UserContext } from '../../../../Context/userContext';
import './Globe.css'
import Globe from 'react-globe.gl';
import img from './earth.png';

function GlobeE3() {
  const { globe_data } = useContext(UserContext)
  const globeEl = useRef();
  const ourCountry = ['Canada', 'Barzil', 'United Kingdom', 'Ukraine', 'Saudi Arabia', 'India', 'Australia'];
  const [rotation, setRotation] = useState(true);

  const [hoverD, setHoverD] = useState();


  useEffect(() => {
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 1.5;
    globeEl.current.pointOfView({ lat: 18, lng: 45, altitude: 2.4 }, 5000);
  }, [rotation]);

  
  return (
    <div className='globe-3'>
      <Globe 
        ref={globeEl}
        backgroundColor='#ffffff00'
        width={1180}
        height={1550}
        hexPolygonsData={globe_data.features} 
        polygonAltitude={(d) => (d === hoverD ? 0.5 : 0.1)}
        globeImageUrl={img}
        hexPolygonAltitude={0.02}
        hexPolygonMargin={0.1}
        // onHexPolygonClick={(polygon, event, { lat, lng, altitude }) => console.log((polygon, event, { lat, lng, altitude }))}
        hexPolygonLabel={({ properties: d }) => {
          if(ourCountry.includes(d.ADMIN)){
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
    </div>
  )
}

export default GlobeE3