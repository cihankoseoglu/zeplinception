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
                <ProjectInfo />
                <Members />
            </div>                   
            
        )
        
    }


    
}


export default Sidebar;

