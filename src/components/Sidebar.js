import React from 'react';
import Members from './Members';
import ProjectInfo from './ProjectInfo';


class Sidebar extends React.Component {
    constructor(props){
        super(props);
        
    }
    
    render() {
        return(
            <div className="sidebar-container">
                <ProjectInfo projectName={this.props.projectName} projectType={this.props.projectType} projectDensity={this.props.projectDensity} />
                <Members memberInfo={this.props.members} />
            </div>                   
            
        )
        
    }


    
}


export default Sidebar;

