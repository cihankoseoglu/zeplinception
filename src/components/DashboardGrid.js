import React from 'react';
import Thumbnail from './Thumbnail';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ScreenDetail from './ScreenDetail';

class DashboardGrid extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            screens: this.props.screens,
            active: this.props.activeTag
        }
    }

    componentWillUpdate(){
        console.log("dashoard update")
    }

    renderItems(){

       
            return this.props.screens.map((item, index) =>             
                    <Thumbnail 
                        key={index.toString().concat("uniquenessmuch")}
                        id={item._id}
                        name={item.name}
                        tags={item.tags}
                        active={this.state.active}
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

