import React from 'react';
import {Link} from 'react-router-dom'
import { withContext } from './AppContext';
import {Navbar} from 'react-materialize';
// import './top-nav.css'
// import mvlogo from './images/mvlogosvg.svg'
import './navbar.css';


function Nav (){
  // render(){

  // }
    return(
      // <Navbar>
      //  <div class="nav-wrapper">
      //  <a href="#" class="brand-logo right">MV Realtors</a>
      //  <ul id="nav-mobile" class="left hide-on-med-and-down">
      //       <li><Link className="navLinks" to='/home' >Home</Link></li>
      //       <li><Link className="navLinks" to='/about' >About</Link></li>
      //       <li><Link className="navLinks" to='/contact'>Let's Talk</Link></li>
      //       <li><a class="#006064" href="https://www.facebook.com/RealtorsMV/" target="_blank" without rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a></li>
      //       <li><a class="#006064" href="https://www.instagram.com/mvrealtors/" target="_blank" without rel="noopener noreferrer"><i class="fab fa-instagram"></i></a></li>
      //  </ul> 
      //  </div>
      //   </Navbar>

      <div id="navbar">
        {/* <a class="active" href="javascript:void(0)">Home</a> */}
        <Link className="navLinks" to='/home' >Home</Link>
        <Link className="navLinks" to='/about' >About</Link>
        <Link className="navLinks" to='/contact'>Let's Talk</Link>
      </div>
    )
}
    export default withContext (Nav);
   
//   //       !props.token? 
//   //       <React.Fragment>
//   //         <Link to="/signup">Sign Up</Link>
//   //       </React.Fragment>
//   //       :
//   //       <React.Fragment>
//   //           <Link to="/listing">Update Listings</Link>
//   //       </React.Fragment>

    //  { !props.token? 
  //       <React.Fragment>
  //         <Link to="/login">Log In</Link>
  //       </React.Fragment>
  //       :
  //       <React.Fragment>
  //         <Link to="/profile">contacts</Link> 
  //       </React.Fragment>
  //     }
      
  //       <Link className="navLinks" to='/home' >Home</Link>
  //       <Link className="navLinks" to='/about' >About</Link>
  //       {/* <Link className="navLinks" to='/blog' >Blog</Link> */}
  //       <Link className="navLinks" to='/contact'>Lets Talk</Link>
  //       {/* <Link className="navLinks" to='/display'>Listings</Link>  */}
  //       <ul>
  //         <li><a class="#006064" href="https://www.facebook.com/RealtorsMV/" target="_blank" without rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a></li>
  //         <li><a class="#006064" href="https://www.instagram.com/mvrealtors/" target="_blank" without rel="noopener noreferrer"><i class="fab fa-instagram"></i></a></li>
  //       </ul>
        
  //       {
  //       props.token && <button class="logout" onClick={() => props.logout()}>Logout</button>
  //     }
  //      </div> */}
  //     </Navbar>
  //   )
  // }
