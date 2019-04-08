import React from 'react';
import {Link} from 'react-router-dom'
import { withContext } from './AppContext';

function Navbar (props){
    return(
      <div className="navbar-wrapper">
      {
        !props.token? 
        <React.Fragment>
          <div className="nav-link">
          <Link to="/signup">Sign Up</Link>
          </div>
          <div className="nav-link">
            <Link to="/login">Log In</Link>
          </div>
        </React.Fragment>
        :
        <React.Fragment>
          <div className="nav-link">
            <Link to="/listing">Add to Listing </Link>
            </div>
          <div className="nav-link">
            <Link to="/profile">Profile</Link>
            </div>
            <div className="nav-link">
            <button onClick={() => props.logout()}>Logout</button>
            </div>
        </React.Fragment>
      }
        <Link className="navLinks" to='/' >Home</Link>
        <Link className="navLinks" to='/About' >About</Link>
        <Link className="navLinks" to='/Blog' >Blog</Link>
        <Link className="navLinks" to='/Contact'>Contact</Link>
        <Link className="navLinks" to='/list'>ontheMARKET</Link> 
       
      </div>
    )
  }
export default withContext (Navbar) ;