import React from 'react';
import './App.css';
import ProjectList from "./components/projects/ProjectList";
import TaskList from "./components/tasks/TaskList";
import {Route} from 'react-router-dom';
import Menu from "./components/menu/Menu";
import SendHttpSample from "./components/samples/SendHttpSample"
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";

const App  = (props) => {
    return (
      <div>
        { /*<SendHttpSample/>*/}
          <div className='app-wrapper'>
            <Header/>
            <Menu/>
              <div className='content'>
                <Route path='/profile' render={() => <Profile state={props.state.ProfilePage}/>} />
                <Route path='/projects' render={() => <ProjectList state={props.state.MyProjectsPage}/>} />
                <Route path='/tasks' render={() => <TaskList state={props.state.MyTasksPage}/>} />
              </div>
          </div>
      </div>
    );

};

export default App;
