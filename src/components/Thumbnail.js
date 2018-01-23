import React from 'react';



const Thumbnail = (props) => {
    
    return (
       <li>
            <div className="col s12 m6">
                <div className="thumbnail-card">
                    <div className="thumbnail-border">
                        <img className="thumbnail-image" src={`https://zpl-mix.now.sh` + props.thumbnailImage.d2x} alt="Thumbnail img"/>
                    </div>
                    <div className="name">
                        <p>{props.name}</p>
                    </div>
                </div>
            </div>
        </li>
    )
    
}


export default Thumbnail;
