import React from 'react';
import Tag from './Tag'


class TagHeader extends React.Component {
    constructor(props){
        super(props);
        this.returnTags = this.returnTags.bind(this);
    }

    returnTags(){
        return this.props.tags.map(tag => 
            <Tag tagTitle= {tag} />
        )
    }
    
    render() {
        return(
            <div className= "navbar-fixed">                   
                <div className="tags-header">
                    {this.returnTags()}
                </div>            
             </div>
        )
        
    }


    
}


export default TagHeader;
