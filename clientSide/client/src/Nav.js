import React, {Component} from 'react';
import logo from "./logo.svg";
// import {Link} from 'react-router-dom'
// import { withContext } from './AppContext';
import { Link, animateScroll as scroll } from "react-scroll";

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
              </Link>
            </li>
            <li><a href="https://mre.run/APP2624/dashboard"><i class="fas fa-home"></i></a></li>
            <li><a href="https://www.instagram.com/mvrealtors/"target="_blank" without rel="noopener noreferrer"><i class="fab fa-instagram"></i></a></li>
            <li><a href="https://www.facebook.com/RealtorsMV/" target="_blank" without rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
