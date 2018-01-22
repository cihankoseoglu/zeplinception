import React from 'react';
import logoZeplin from '../assets/logo-zeplin.svg';


const Thumbnail = (props) => {
    
    return (
       <li>
            <div className="col s12 m6">
                <div className="thumbnail-card">
                    <div className="thumbnail-border">
                        <img className="thumbnail-image" src={logoZeplin} alt="Thumbnail img"/>
                    </div>
                    <div className="name">
                        <p>TitleThumb</p>
                    </div>
                </div>
            </div>
        </li>
    )
    
}


export default Thumbnail;
