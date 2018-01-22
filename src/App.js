import React, { Component } from 'react';
import './styles/css/App.css';
import Header from "./components/Header"
import TagHeader from './components/TagHeader';
import SplitPane from 'react-split-pane';
import DashboardGrid from './components/DashboardGrid';
import Sidebar from './components/Sidebar';


const tags = ['Library', 'In development', 'Some other stuff that is way too long'];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SplitPane split="vertical" minSize={224} defaultSize={280} primary="second">
          <div>
            <TagHeader tags={tags}/>
            <div>
             <DashboardGrid />
            </div>
          </div>
          <div>
            <Sidebar />
          </div>
          
        </SplitPane>
        
      </div>
    );
  }
}

export default App;
