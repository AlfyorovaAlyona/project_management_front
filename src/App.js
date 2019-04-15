import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Menu from "./components/menu/Menu";
import SendHttpSample from "./components/samples/SendHttpSample"
import Header from "./components/header/Header";
import ProjectsPageContainer from "./components/projects/ProjectsPageContainer";
import TaskPageContainer from './components/tasks/TaskPageContainer'
import ProfilePageContainer from './components/profile/ProfilePageContainer'

const App  = (props) => {
    return (
      <div>
          <div className='app-wrapper'>
            <Header/>
            <Menu/>
              <div className='content'>
                  <Route path='/projects' render={() => <ProjectsPageContainer store={props.store}/>} />
              </div>
          </div>
      </div>
    );

};

export default App;
