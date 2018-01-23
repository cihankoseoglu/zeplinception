import React from 'react';


const Member = (props) => {

    let isEvenMember = props.id % 2;
    
    return (
         <li className={isEvenMember ? "collection-item avatar collection-item-gray" : "collection-item avatar"}>
            <img src={props.avatar} alt="" className="circle member-img" />
            <div className="member-information">
                <span className="member-username">{props.username}</span>
                <p className="member-permission">{props.role}</p>            
            </div>
            
        </li>
    )
    
}


export default Member;
