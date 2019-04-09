import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import List from './Listing';
import Signup from './Auth/Signup';
import Login from './Auth/Login';
import Profile from '../src/Auth/Profile'
import ProtectedRoute from "./Auth/ProtectedRoute";
import Foot from './Foot';
import Display from './Auth/Display';
import mvlogo from './images/mvlogosvg.svg'
// import logo from './logo.svg';

function App () {
    return (
      <div className="Real-Estate">
      <img className="mvlogo" src={mvlogo} alt="mvlogo"/>
       <h1 className="header">MV Realtors</h1>
        <header className="AppContainer">
          <Nav />
          <Switch>
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/>
              <Route exact path="/" render={() => <Redirect to="/home"/>}/>
            <ProtectedRoute path ="/profile" component={Profile}/>
            <Route exact path ='/home' component ={Home}/>
            <Route path ='/About' component ={About}/>
            <Route path ='/Blog' component ={Blog}/>
            <Route path ='/Contact' component={Contact}/>
            <Route path ='/Listing' component={List}/>
            <Route path ='/display' component={Display}/>
          </Switch>
          <Foot/>
        </header>
      </div>
    );
  }


export default App;
