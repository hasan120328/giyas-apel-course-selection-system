import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import Course from './Components/Course/Course';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useState} from 'react';
import Schedule from './Components/Schedule/Schedule';
import Teacher from './Components/Teacher/Teacher';
import Student from './Components/Student/Student';
import Header from './Components/Header/Header';



export const UserContext=createContext();

function App() {

const [loggedInUser,setLoggedInUser]=useState();

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    
      <Router>
        <Switch>
          <Route exact path="/">
              <Login></Login>
          </Route>
          <Route exact path="/login">
              <Login></Login>
          </Route>
          <Route path="/course">
            <Course></Course>
          </Route>
          <Route path="/schedule">
             <Schedule></Schedule>
          </Route>
          <Route path="/student">
            <Student></Student>
          </Route>
      <Route path="/teacher">
           <Teacher></Teacher>
      </Route>
      <Route path="/header">
           <Header></Header>
      </Route>
        </Switch>
      </Router>
      
    </UserContext.Provider>
  );
}

export default App;
