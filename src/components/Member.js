import React from 'react';
import logoZep from '../assets/logo-zeplin.svg';

const Member = (props) => {
    
    return (
        <li className="collection-item avatar">
            <img src={logoZep} alt="" className="circle member-img" />
            <div className="member-information">
                <span className="member-username">username</span>
                <p className="member-permission">permission</p>            
            </div>
            
        </li>
    )
    
}


export default Member;
