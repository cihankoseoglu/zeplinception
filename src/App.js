import React, { Component } from 'react';
import './styles/css/App.css';
import Header from "./components/Header"
import TagHeader from './components/TagHeader';
import SplitPane from 'react-split-pane';
import DashboardGrid from './components/DashboardGrid';
import Sidebar from './components/Sidebar';
//import { prefixAll } from 'inline-style-prefixer';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: "Default Name",
      type: "Default Type",
      density: "Default Density",
      screens : [],
      tags: [],
      members: [],
    }
  }
  componentDidMount(){

    this.fetchData();
    this.fetchMemberData();
  }


  fetchData(){

    fetch(`https://zpl-mix.now.sh/projects/13`)
      .then(response => response.json())
      .then(info => this.setState(
        { 
          name: info.name,
          type: info.type,
          density: info.density,
          screens: info.screens,
        }))
      .catch(error => console.log("you cant even parse bruh", error));




  }

  fetchMemberData(){
    fetch(`https://zpl-mix.now.sh/projects/13/users`)
    .then(response => response.json())
    .then(members => this.setState(
      { 
        members: members.users,
      }))
    .catch(error => console.log("you cant even parse memberz bruh", error));
  }

  buildTags(){
     let tags = [];
     for(let tag of this.state.screens.tags){
      tags.concat(tag);
     }
     this.setState({
       tags
     })
  }

  render() {
    return (
      <div className="App">
        <Header projectName={this.state.name} />
        <SplitPane split="vertical" minSize={224} defaultSize={280} maxSize={window.innerWidth/2} primary="second">
          <div className="left-pane">
            <TagHeader tags={this.state.screens}/>
            <div>
             <DashboardGrid screens={this.state.screens}/>
            </div>
          </div>
          <div className="right-pane">
            <Sidebar projectName={this.state.name} projectType={this.state.type} projectDensity={this.state.density} members={this.state.members} />
          </div>
          
        </SplitPane>
        
      </div>
    );
  }
}

export default App;
