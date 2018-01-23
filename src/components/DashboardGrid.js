import React from 'react';
import Thumbnail from './Thumbnail';

class DashboardGrid extends React.Component {
    constructor(props){
        super(props);
    }

    renderItems(){
        return this.props.screens.map((item, index) => 
            <Thumbnail 
                key={index.toString().concat("uniquenessmuch")}
                id={item.id}
                name={item.name}
                tags={item.tags}
                thumbnailImage={item.thumbnail}
            />
        )
    }

    
    render() {
        return(
            <div className="dashboard-grid">
                <div className="row">
                    <ul>
                    {this.renderItems()}          
                    </ul>
                </div>
            </div>            
        )        
    }


    
}


export default DashboardGrid;

