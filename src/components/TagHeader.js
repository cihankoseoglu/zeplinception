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
                        
                <div className="tags-header fixed">
                    {this.returnTags()}
                </div>            
            
        )
        
    }


    
}


export default TagHeader;

