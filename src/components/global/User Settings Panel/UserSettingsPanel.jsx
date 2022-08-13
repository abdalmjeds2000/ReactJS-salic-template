import React from 'react'
import './UserSettingsPanel.css'

import logo from '../../../icons/icons-menu/logo.jpg';



function UserSettingsPanel(props) {
  return (
    <div className="user-setting-panel" onClick={props.onclick}>
      <div className='user-details' onclick={e => e.preventDefault()}>
        <div className='header'>
          <img src={logo} alt="logo" />
          <a href="https://salic.sharepoint.com/sites/newsalic/_layouts/closeConnection.aspx?loginasanotheruser=true&Source=https://salic.sharepoint.com/sites/dev">Sign Out</a>
        </div>
        <div className='details'>
          <img 
            src={props.userImage} 
            alt="user face" 
          />
          <div>
            <h2>{props.userName}</h2>
            <a target='_blank' href="https://myaccount.microsoft.com/?ref=MeControl&login_hint=Akmal.Eldahdouh%40salic.com&tid=bea1b417-4237-40b8-b020-57fce9abdb43">Microsoft Account</a>
            <a target='_blank' href="https://salic.sharepoint.com/sites/dev/_layouts/15/settings.aspx">Site Setting</a>
            <a target='_blank' href="https://account.activedirectory.windowsazure.com/ChangePassword.aspx">Change Password</a>
          </div>
        </div>
        {/* <div className='gradient-bg-ud' onClick={props.onClickGradient}></div> */}
      </div>
    </div>
  )
}

export default UserSettingsPanel