import React from "react";
import './Numbers.css';

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const Number = (props) => {

  return <div className="number-box-container">
    <div className="circular-progress-bar">
      <CircularProgressbar
        value={props.value}
        text={props.text}
        minValue={props.minValue}
        maxValue={props.maxValue}
        strokeWidth={props.strokeWidth}
        styles={buildStyles({
          pathColor: props.pathColor,
          trailColor: '#EEF3FF',
          textSize: '2rem',
          textColor: props.textColor,
        })
        }
      />
    </div>
    <div className="number-box-info">
      <h3>{props.header}</h3>
      <p>{props.description}</p>
    </div>
  </div>
}

export default Number