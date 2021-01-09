import React from 'react';
import './Login.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

const Login = () => {
    return (
        <div style={{background:'DarkSalmon' ,height:"2000px"}}>
           <div>
           <form className="box" >
              <h1>login page</h1>
            <input type="text" name="" placeholder="userName" />
            <input type="password" name="" placeholder="password" />
            {/* <input type="submit" name="" value="login"/> */}
            <button> <Link to="/header">sign in</Link></button>
           </form>
           </div>
           <div>
           
           </div>
        </div>
    );
};

export default Login;