import React from 'react';

// class Tag extends React.Component {
//     constructor(props){
//         super(props);

//         this.state = 
//         {
//             clicked: false
        
//         }
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick(){
//         this.setState({
//             clicked: !this.state.clicked
//         });
//         this.props.filterThumbnails(`${this.props.tagTitle}`);
//     }

//     render(){
//         return(
       
//         <div className={this.state.clicked ? "chip chip-selected" : "chip"} onClick={this.handleClick()}>
//             <span className="tag-text">{this.props.tagTitle}</span>
//         </div>

//         )
//     }
// }

const Tag = (props) => {
    
    return (
       
        <div className="chip" onClick={() => { props.filterThumbnails(`${props.tagTitle}`) }}>
            <span className="tag-text">{props.tagTitle}</span>
        </div>
       
    )
    
}


export default Tag;
