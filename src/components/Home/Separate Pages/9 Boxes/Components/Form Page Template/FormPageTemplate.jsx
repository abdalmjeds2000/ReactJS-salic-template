import React, { useContext } from 'react'
import './FormPageTemplate.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import WorldBG from '../../../../../../icons/home/world.svg';
import SimpleUserPanel from '../../../../../global/Simple User Panel/SimpleUserPanel';
import { UserContext } from '../../../../../../Context/userContext';




function FormPageTemplate(props) {
  const { user_data } = useContext(UserContext);
  const { notifications_count } = useContext(UserContext);
  const { mail_count } = useContext(UserContext);


  return (
    <div>
      <SimpleUserPanel
        userImage={`https://salic.sharepoint.com/sites/newsalic/_layouts/15/userphoto.aspx?size=M&username=${user_data.Data?.Mail}`}
        userName={user_data.Data?.DisplayName}
        notificationsCount={notifications_count}
        mailCount={mail_count}
      />
      <div className='it-services_new-request-container'>
        <div className="content-services-request">
        <img src={WorldBG} className='img-bg img-bg-form' alt="world background" />
          
          <div className="header">
            <h1>{props.pageTitle}</h1>
          </div>
          
          <div className="content">
            <div className="form">{props.children}</div>
            <div className="tips">
              <div className="tips_user-info">
                <div className="tips_user-info_text">
                  {
                    props.tips_userInfo?.map((a, i) => {
                      return (
                        <div key={i}>
                          <p><b>{a.title}</b></p>
                          <p>{a.text}</p>
                        </div>
                      )
                    })
                  
                  }
                </div>
                <div className="tips_user-info_img">
                  <img 
                    src={`https://salic.sharepoint.com/sites/newsalic/_layouts/15/userphoto.aspx?size=M&username=${props.user_data.Data?.Mail}`} 
                    alt="" 
                  />
                </div>
              </div>

              <div className="tips_tips-container">
                <div className="tips_header">
                  <FontAwesomeIcon icon={faLightbulb} /> Tips
                </div>
                <ul>
                  {
                    props.tipsList?.map((t, i) => {
                      return (
                        <li key={i}>{t}</li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default FormPageTemplate