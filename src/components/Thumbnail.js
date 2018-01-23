import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


class Thumbnail extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isHidden: false,
            active: this.props.active
        }
    }

    thumbnailClicked(event){
        event.preventDefault();
        console.log("thumbnail clicked");
        //this.context.router.transitionTo(`/screen/${this.props.id}`);
    }

    render(){
    return (
       <li onClick={(e) => this.thumbnailClicked(e)} className={this.state.active === "" ? "thumbnail-hidden" : ""}>
        <Link to={"/screens/" + this.props.id}>
            <div className="col s12 m6">
                <div className="thumbnail-card">
                         
                    <div className="thumbnail-border">
                        <img className="thumbnail-image" src={`https://zpl-mix.now.sh` + this.props.thumbnailImage.d2x} alt="Thumbnail img"/>
                    </div>
                    <div className="name">
                        <p>{this.props.name}</p>
                    </div>
                    
                </div>
            </div>
        </Link>
        </li>
    )
}
}



export default Thumbnail;
