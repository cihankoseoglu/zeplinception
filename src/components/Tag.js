import React from 'react';



const Tag = (props) => {
    
    return (
       
        <div className="chip" onClick={() => { props.filterThumbnails(`${props.tagTitle}`) }}>
            <span className="tag-text">{props.tagTitle}</span>
        </div>
       
    )
    
}


export default Tag;
