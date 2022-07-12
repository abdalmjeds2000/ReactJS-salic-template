import React from "react";
import './CompanyCard.css';



const CompanyCard = (props) => {

  return <div className="company-card" style={{top: props.top, right: props.right, float: props.float}}>
    <div className="company-card-name" style={props.logo_name_vertical}>
      <img src={props.logoSrc} alt="Company Logo" />
      <div>
        <h3>{props.companyName}</h3>
        <p>{props.companyLocation}</p>
      </div>
    </div>
    <div className="company-card-description">
      <p>{props.companyDescription}</p>
    </div>
  </div>
}


export default CompanyCard