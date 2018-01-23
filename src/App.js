import React, { Component } from 'react';
import './styles/css/App.css';
import Header from "./components/Header"
import TagHeader from './components/TagHeader';
import SplitPane from 'react-split-pane';
import DashboardGrid from './components/DashboardGrid';
import Sidebar from './components/Sidebar';



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
      activeTag: "",
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

  filterThumbnails(tagTitle){
    console.log("Im at app level on filterThumbnails");
    //removeThumbnails(tagTitle);
    this.setState({
      activeTag: tagTitle
    });  
  }

  removeThumbnails(selectedTag){

  }

  render() {
    return (
      <div className="App">

        <Header projectName={this.state.name} backButton={false} />
        <SplitPane split="vertical" minSize={224} defaultSize={280} maxSize={window.innerWidth/2} primary="second">
          <div className="left-pane">
            <TagHeader 
              tags={this.state.screens}
              filterThumbnails={this.filterThumbnails.bind(this)}
            />
            <div>
             <DashboardGrid screens={this.state.screens} active={this.state.activeTag} />
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