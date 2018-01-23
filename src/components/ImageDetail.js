import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const ImageDetail = (props) => {

    const backgroundColor = props.backgroundColor || {};
    let divStyle = {
        background: `rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, ${backgroundColor.a})`
    }

    return (
         <div className="detail-background" style={divStyle}>
            <div className="image-detail">
                <img src={`https://zpl-mix.now.sh` + props.imageurl} alt={props.name}/>
            </div>
         </div>
    )
    
}


export default ImageDetail;
