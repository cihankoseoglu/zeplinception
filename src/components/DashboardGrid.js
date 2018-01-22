import React from 'react';
import Thumbnail from './Thumbnail';


class DashboardGrid extends React.Component {
    constructor(props){
        super(props);

    }

    
    render() {
        return(
            <div className="dashboard-grid">
            
            
            <div className="row">
                <ul>
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                </ul>
            </div>
            </div>            
        )        
    }


    
}


export default DashboardGrid;

