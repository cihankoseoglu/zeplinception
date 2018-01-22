import React from 'react';
import zeplinIcon from '../assets/logo-zeplin.svg';
import notificationIcon from '../assets/ic-notification.svg'


const Header = (props) => {
    
    return (
        <div className= "navbar-fixed">                   
                <nav className="nav-wrapper background">
                    <img src={zeplinIcon} className="logo-zeplin" alt="Zeplin logo" />
                    <div className="project-name center valign-wrapper">Project Name (Make this callable)</div>                
                    <img src={notificationIcon} className="ic-notification" alt="Notification Icon" />                        
                </nav>            
        </div>
    )
    
}


export default Header;
