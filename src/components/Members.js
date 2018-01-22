import React from 'react';
import Member from './Member';

const Members = (props) => {
    
    return (
       <div>
       <div className="members-container">
            <div className="members-header">
                <div className="members-title">
                    Members
                </div>

                <div className="member-count">
                    <span className="member-count-span">13</span>
                </div>
            </div>
        
       <ul class="collection">
            <Member />
            <Member />
            <Member />
            <Member />
            <Member />
            <Member />
        </ul>
       
       </div>
        </div>
    )
    
}


export default Members;
