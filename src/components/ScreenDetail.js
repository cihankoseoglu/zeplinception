import React from 'react';
import Header from "./Header";
import ImageDetail from "./ImageDetail";

// API endpoint example 13 is called, this const should be changed if other endpoints are to be called.
const apiNum = 13;

class ScreenDetail extends React.Component {

  constructor(props){
      super(props);

      this.state ={
          imageName: null,
          width: 0,
          height: 0,
          imageUrl: "/imageURL",
          backgroundColor: null,
      };

  }

  fetchScreen(){
    console.log("hello im fetching screen");
    fetch(`https://zpl-mix.now.sh/projects/${apiNum}/screens/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(info => this.setState(
        { 
          imageName: info.name,
          width: info.width,
          height: info.height,
          imageUrl: info.imageUrl,
          backgroundColor: info.backgroundColor,
        }))
      .catch(error => console.log("you cant even parse screen image bruh", error));

  }

  
  componentDidMount(){

      this.fetchScreen();
 
      

  }

  componentWillMount(){
      document.body.style.overflow = "scroll"; 
  }

  componentWillUnmount(){
    document.body.style.overflow = "hidden"; 
  }

  render() {  
    return (
      <div className="screen-detail">
        <Header projectName={this.state.imageName} backButton={true}/>
        <ImageDetail name={this.state.imageName} width={this.state.width} height={this.state.height} imageurl={this.state.imageUrl}  backgroundColor={this.state.backgroundColor} />
      </div>
    )
  }
}


  export default ScreenDetail;