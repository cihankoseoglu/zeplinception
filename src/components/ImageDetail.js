import React from 'react';

const ImageDetail = (props) => {

    const backgroundColor = props.backgroundColor || {};
    let divStyle = {
        background: `rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, ${backgroundColor.a})`

    }

    let imageStyle = {
        width: props.width,
        height: props.height
    }

    return (
         <div className="detail-background" style={divStyle}>
            <div className="image-detail" style={imageStyle}>
                <img src={`https://zpl-mix.now.sh` + props.imageurl} alt={props.name}/>
            </div>
         </div>
    )
    
}


export default ImageDetail;
