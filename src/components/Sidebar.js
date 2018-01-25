import React from 'react';
import Members from './Members';
import ProjectInfo from './ProjectInfo';

const Sidebar = (props) => {
    return(
        <div className="sidebar-container">
            <ProjectInfo projectName={props.projectName} projectType={props.projectType} projectDensity={props.projectDensity} />
            <Members memberInfo={props.members} />
        </div>                   
        
    )
}


export default Sidebar;

