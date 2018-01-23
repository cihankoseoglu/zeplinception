import React from 'react';


const ProjectInfo = (props) => {
    
    return (
       
        <div className="project-info-container">
            <div className="project-information">
                <div className="project-title">
                    <span className="project-title-span">{props.projectName}</span>
                </div>
                <div className="project-details">
                    <div className="project-type">
                        <span className="title">Type:</span>
                        <span className="value">{props.projectType}</span>
                    </div>
                    <div className="project-density">
                        <span className="title">Density:</span>
                        <span className="value">{props.projectDensity}</span>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
    
}


export default ProjectInfo;
