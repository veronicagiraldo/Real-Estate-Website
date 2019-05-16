import React, {Component} from 'react';
import logo from "./logo.svg";
// import {Link} from 'react-router-dom'
import { withContext } from './AppContext';
import { Link, animateScroll as scroll } from "react-scroll";

// import {Navbar} from 'react-materialize';
// import mvlogo from './images/mvlogosvg.svg'
import './navbartwo.css';

export default class Nav extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    
    return (
      
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
               About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="form"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 3
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 4
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 5
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}

// function Nav (){
  // render(){

  // }
    // return(
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

//       <div id="navbar">
//         {/* <a class="active" href="javascript:void(0)">Home</a> */}
//         <Link className="navLinks" to='/home' >Home</Link>
//         <Link className="navLinks" to='/about' >About</Link>
//         <Link className="navLinks" to='/contact'>Let's Talk</Link>
//       </div>
//     )
// }
    // export default withContext (Nav);
   
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
