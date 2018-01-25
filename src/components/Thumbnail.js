import React from 'react';
import {Link} from 'react-router-dom';


class Thumbnail extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isHidden: false,
            active: null,
            tags: []
        }
    }

    thumbnailClicked(event){
        event.preventDefault();
        console.log("thumbnail clicked");
        //this.context.router.transitionTo(`/screen/${this.props.id}`);
    }

    componentWillReceiveProps(){
            
        const activeTag = this.props.active;
        const tags = this.state.tags || [];

        if(activeTag){
            this.setState({
                isHidden: true,
                active: activeTag
            })
        }

        if(activeTag === null){
            this.setState({
                isHidden: false,
                active: activeTag
            })
        }
        
        for (let tag of tags){
            
            if(activeTag === tag){
                this.setState({
                    isHidden: false,
                    active: activeTag
                })
            }
        }
        
        
    }

    componentDidMount(){
        const tags = this.props.tags;
        this.setState({
            tags
        })


    }

    render(){
    return (
       <li className= { this.state.isHidden ? "thumbnail-hidden" : ""}>
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
