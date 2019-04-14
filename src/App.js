import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Menu from "./components/menu/Menu";
import SendHttpSample from "./components/samples/SendHttpSample"
import Header from "./components/header/Header";
import ProjectListContainer from "./components/projects/ProjectListContainer";
import TaskPageContainer from './components/tasks/TaskPageContainer'
import ProfilePageContainer from './components/profile/ProfilePageContainer'

const App  = (props) => {
    return (
      <div>
          <div className='app-wrapper'>
            <Header/>
            <Menu/>
              <div className='content'>
                  <Route path='/profile' render={() => <ProfilePageContainer store={props.store}/>} />
                  <Route path='/projects' render={() => <ProjectListContainer store={props.store}/>} />
                <Route path='/tasks' render={() => <TaskPageContainer store={props.store}/>} />
              </div>
          </div>
      </div>
    );

};

export default App;
