import React from 'react';
import Form from './Contact';
import Nav from './Nav';
import Home from './Home';
import Foot from './Foot';
import About from './About';
import InstaFeed from './InstaFeed';
import Welcome from './Welcome';
import Us from './Us';

import {Switch, Route, Redirect} from 'react-router-dom';
import Blog from './Blog';
import List from './Listing';
import Signup from './Auth/Signup';
import Login from './Auth/Login';
import Profile from '../src/Auth/Profile'
import ProtectedRoute from "./Auth/ProtectedRoute";
import Display from './Auth/Display';
import Contact from './Contact';
// import NavbarTwo from './NavbarTwo';


function App () {
    return (
      <div className="Real-Estate">
        {/* <NavbarTwo /> */}
          <Nav />
          <Home 
            title="Home"
            subtitle={Home}
            dark ={false}
            id="home"/>
          <Welcome />
          
          <Form
            title="contact"
            subtitle={Form}
            dark={false}
            id="contact"
            />
            <Us />
            {/* <About 
            title="About"
            subtitle={About}
            dark ={false}
            id="about"
            /> */}
          <InstaFeed 
            title="insta"
            subtitle={InstaFeed}
            dark={false}
            id="instafeed"
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
              <Route path= '/Us' component={Us}/>
           </Switch> 
          <Foot/>
      
      </div>
    );
  }


export default App;
