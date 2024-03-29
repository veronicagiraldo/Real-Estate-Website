import React from 'react';
// import Form from './Contact';
import Nav from './Nav';
import Home from './Home';
import Foot from './Foot';
import About from './AboutTwo';
import InstaFeed from './InstaFeed';
import Welcome from './Welcome';
// import Us from './Us';
// import Section from './Section';
import Message from './Message';
import './index.css';
import Admin from './Auth/Admin';
// import {Switch, Route, Redirect} from 'react-router-dom';


import {Switch, Route, Redirect} from 'react-router-dom';
import Blog from './Blog';
import List from './Listing';
import Signup from './Auth/Signup';
import Login from './Auth/Login';
import Profile from '../src/Auth/Profile'
import ProtectedRoute from "./Auth/ProtectedRoute";
import Display from './Auth/Display';
import Contact from './Contact';


function App () {
    return (
      <div className="Real-Estate">
          <Nav />
          <Home 
            title="Home"
            subtitle={Home}
            dark ={false}
            id="home"/>
          <Welcome />
          <Message />
            <InstaFeed 
              title="insta"
              subtitle={InstaFeed}
              dark={false}
              id="instafeed"
              />
            <About 
            title="About"
            subtitle={About}
            dark ={false}
            id="about"
            />
          
          <Switch>
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/>
            <Route exact path="/" render={() => <Redirect to="/home"/>}/>
            <ProtectedRoute path ="/profile" component={Profile}/>
           <Route exact path ='/home' component ={Home}/>
           <Route path ='/About' component ={About}/>
            <Route path ='/Blog' component ={Blog}/>
            <Route path ='/Contact' component={Contact}/>
             <Route path ='/display' component={Display}/>
             <Route path ='/Listing' component={List}/>
              {/* <Route path= '/Us' component={Us}/> */}
           </Switch> 
          <Foot/>
          <Admin />
      </div>
    );
  }


export default App;
