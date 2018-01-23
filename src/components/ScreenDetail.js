import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Header from "./Header";
import ImageDetail from "./ImageDetail";

class ScreenDetail extends React.Component {

  constructor(props){
      super(props);

      this.state ={
          name: "Default Name",
          width: 0,
          height: 0,
          imageUrl: "defaultURL",
          backgroundColor: [],
      };

  }

  fetchScreen(){
    console.log("hello");
    fetch(`https://zpl-mix.now.sh/projects/13/screens/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(info => this.setState(
        { 
          name: info.name,
          width: info.width,
          height: info.height,
          imageUrl: info.imageUrl,
          backgroundColor: info.backgroundColor,
        }))
      .catch(error => console.log("you cant even parse screen image bruh", error));

  }

  
  componentDidMount(){
      this.fetchScreen()
    
  }

  render() {  
    return (
      <div>
        <Header projectName={this.state.name} backButton={true}/>
        <ImageDetail name={this.state.name} width={this.state.width} height={this.state.height} imageurl={this.state.imageUrl}  backgroundColor={this.state.backgroundColor} />
      </div>
    )
  }
}


  export default ScreenDetail;