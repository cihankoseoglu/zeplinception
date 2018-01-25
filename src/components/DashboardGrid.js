import React from 'react';
import Thumbnail from './Thumbnail';


class DashboardGrid extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            screens: null,
            active: "Ahmet"
        }
    }

    componentWillUpdate(){
        console.log("dashboard grid update")
        
    }

    componentWillReceiveProps(){
        setTimeout(() => {
            this.setState({
                active: this.props.activeTag,
            });
        }, 100);
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                screens: this.props.screens,
                active: "",
            });
        }, 100);
    }

    // shouldComponentUpdate(){
    //     setTimeout(() => {
    //         this.setState({
    //             active: this.props.activeTag,
    //         });
    //     }, 100);
    // }

    renderItems(){

       
            return this.props.screens.map((item, index) =>             
                    <Thumbnail 
                        key={index.toString().concat("uniquenessmuch")}
                        id={item._id}
                        name={item.name}
                        tags={item.tags}
                        active={this.props.active}
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

