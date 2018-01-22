import React, { Component } from 'react';
import './styles/css/App.css';
import Header from "./components/Header"
import TagHeader from './components/TagHeader';


const tags = ['Library', 'In development', 'Some other stuff that is way too long'];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TagHeader tags={tags}/>
      </div>
    );
  }
}

export default App;
