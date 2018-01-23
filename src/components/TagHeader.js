import React from 'react';
import Tag from './Tag';



class TagHeader extends React.Component {
    constructor(props){
        super(props);
        this.renderTags = this.renderTags.bind(this);
        this.buildTags = this.buildTags.bind(this);
        this.state = {
            tags: []
        }
    }

    filterThumbnails(tag){
        this.props.filterThumbnails(tag);
    }

    componentWillReceiveProps(){
        setTimeout(() => {
            this.buildTags()
        }, 1000);
    }

    buildTags(){
        // I am proud of this one liner
        this.setState({
            tags: Array.from(new Set(this.props.tags.map(screen => screen.tags).toString().split(","))).filter(v=>v!=='')
        })

    }

    renderTags(){
        return this.state.tags.map((tag, index) => 
            <Tag 
                key= {index.toString().concat("taguniquenessmuch")}
                tagTitle= {tag} 
                filterThumbnails={this.filterThumbnails.bind(this)}
            />
        )
    }
    
    render() {
        return(
                        
                <div className="tags-header fixed">
                    {this.renderTags()}
                </div>            
            
        )
        
    }


    
}


export default TagHeader;

