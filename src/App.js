import React, { Component } from 'react';
import './App.css';
import ProjectList from "./components/projects/ProjectList";
import TaskList from "./components/tasks/TaskList";
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
                  <Route path='/tasks' component={TaskList}/>
              </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
