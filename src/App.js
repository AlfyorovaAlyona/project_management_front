import React, { Component } from 'react';
import './App.css';
import ProjectList from "./components/projects/ProjectList"

class App extends Component {
  render() {
    return (
      <div>
        <ProjectList/>
      </div>
    );
  }
}

export default App;
