import React from 'react';
import zeplinIcon from '../assets/logo-zeplin.svg';
import notificationIcon from '../assets/ic-notification.svg'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


const Header = (props) => {
    
    return (
        <div className= "navbar-fixed">                   
                <nav className="nav-wrapper background">
                    <img src={zeplinIcon} className="logo-zeplin" alt="Zeplin logo" />
                    
                    <Link to="/">
                    <i className={props.backButton ? "fa fa-chevron-left backButton" : "hidden"}><span className="back-title">Dashboard</span></i>         
                    </Link>
                    <div className="project-name center valign-wrapper">{props.projectName}</div>                
                    <img src={notificationIcon} className="ic-notification" alt="Notification Icon" />                        
                </nav>            
        </div>
    )
    
}


export default Header;
