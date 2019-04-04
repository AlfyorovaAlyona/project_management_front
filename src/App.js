import React, { Component } from 'react';
import './App.css';
import ProjectList from "./components/projects/ProjectList";
import {BrowserRouter, Route} from 'react-router-dom';
import Menu from "./components/menu/Menu";


class App extends Component {
  render() {
    return (
      <div>
          <BrowserRouter>
              <Menu/>
              <div>
                  <Route path='/projects' component={ProjectList}/>
              </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
