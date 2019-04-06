import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Listing from './Listing';
import Signup from './Auth/Signup';
import Login from './Auth/Login';
import ProtectedRoute from "./Auth/ProtectedRoute";
import Footer from './Footer';
import Profile from '../src/Auth/Profile';

// import logo from './logo.svg';

function App () {
    return (
      <div className="Real-Estate">
       {/* <h1>MV Realtors</h1> */}
        <header className="AppContainer">
          <Navbar />
          <Switch>
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/>
            {/* <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/> */}
                {/* <Route path="/todos" component={TodoList}/> */}
                <Route exact path="/" render={() => <Redirect to="/home"/>}/>

            <ProtectedRoute path ="/profile" component={Profile}/>
            <Route exact path ='/home' component ={Home}/>
            <Route path ='/About' component ={About}/>
            <Route path ='/Blog' component ={Blog}/>
            <Route path ='/Contact' component={Contact}/>
            <Route path ='/Listing' component={Listing}/>
          </Switch>
          <Footer/>
        </header>
      </div>
    );
  }


export default App;
