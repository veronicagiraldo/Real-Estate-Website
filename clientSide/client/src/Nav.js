import React from 'react';
import {Link} from 'react-router-dom'
import { withContext } from './AppContext';
import {Navbar} from 'react-materialize';
import './top-nav.css'


function Nav (props){
    return(
      
      <Navbar className="navbar-wrapper">
      {
        !props.token? 
        <React.Fragment>
          <div class="nav-link">
          <Link to="/signup">Sign Up</Link>
          </div>
          <div className="nav-link">
            <Link to="/login">Log In</Link>
          </div>
          
        </React.Fragment>
        :
        <React.Fragment>
          <div className="nav-link">
            <Link to="/listing">Update Listings</Link>
            </div>
          <div className="nav-link">
            <Link to="/profile">contacts</Link>
            </div>
            <div className="nav-link">
            <button onClick={() => props.logout()}>Logout</button>
            </div>
        </React.Fragment>
      }
      
        <Link className="navLinks" to='/home' >Home</Link>
        <Link className="navLinks" to='/about' >About</Link>
        <Link className="navLinks" to='/blog' >Blog</Link>
        <Link className="navLinks" to='/contact'>Lets Talk</Link>
        <Link className="navLinks" to='/display'>Listings</Link> 
        <ul>
          <li><a class="grey-text text-lighten-3" href="https://www.facebook.com/RealtorsMV/"><i class="fab fa-facebook-f"></i></a></li>
          <li><a class="grey-text text-lighten-3" href="https://www.instagram.com/mvrealtors/"><i class="fab fa-instagram"></i></a></li>
        </ul>
      </Navbar>
    )
  }
export default withContext (Nav) ;