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
      name: null,
      type: "",
      density: "",
      screens : [],
      tags: [],
      members: [],
      activeTag: "",
    }
  }

  componentWillMount(){

  }
 
  componentDidMount(){
    
    if(sessionStorage.getItem("name")){
      this.setState({
        name: sessionStorage.getItem("name"),
        type: sessionStorage.getItem("type"),
        density: sessionStorage.getItem("density"),
        screens: JSON.parse(sessionStorage.getItem("screens")),
        tags: [],
        members: JSON.parse(sessionStorage.getItem("members")),
        activeTag: "",
      })
    }else {
    this.fetchData();
    this.fetchMemberData();

    }

    
  }

  fetchData(){

    fetch(`https://zpl-mix.now.sh/projects/13`)
      .then(response => response.json())
      .then(info => 
        {
          this.setState(
          { 
            name: info.name,
            type: info.type,
            density: info.density,
            screens: info.screens,
          });

          sessionStorage.setItem('name', info.name);
          sessionStorage.setItem('type', info.type);
          sessionStorage.setItem('density', JSON.stringify(info.density));
          sessionStorage.setItem('screens', JSON.stringify(info.screens));
      
      }
      
      )
      .catch(error => console.log("you cant even parse bruh", error));

  }

  // onSetState = (result, key) => {
  //   sessionStorage.setItem(key, JSON.stringify(result.))
  // }

  fetchMemberData(){
    fetch(`https://zpl-mix.now.sh/projects/13/users`)
    .then(response => response.json())
    .then(members => {this.setState(
      { 
        members: members.users,
      })
        sessionStorage.setItem("members", JSON.stringify(members.users));
    })
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
    console.log(`Im at app level on filterThumbnails and ${tagTitle} was clicked`);
    //removeThumbnails(tagTitle);
    this.setState({
      activeTag: tagTitle
    });  
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