import React from 'react';
import './foot.css';
import rp from "./images/headerLogo.png"
import forsale from './images/mv-home-2.png';
import Admin from './Auth/Admin';

class Foot extends React.Component{
  render(){
    return(
    <footer class="page-footer">
        <div class="row">
            <div class="col s12 l3">
            <img class="realtylogo"src={rp}alt="realtypath"/>
          </div>
    <div class="col s12 l3 realty"><p>Realtypath LLC.</p>
        <i class="fas fa-map-marker-alt"></i> 2115 S. Dallin Street<br></br>
                Salt Lake City, UT 84109
                </div>
    <div class="col s12 l3">
      <ul class="contactInfo">
          <li><i class="fas fa-user"></i> Misty Vasquez</li>
          <li><i class="fas fa-phone"></i> 801.897.6430</li>
          <li><i class="fas fa-at"></i> <a href="mailto: misty.vasquez@realtypath.com" target="_blank" without rel="noopener noreferrer">misty.vasquez@realtypath.com</a></li>
          <li><i class="fas fa-user"></i> Charles Vasquez</li>
          <li><i class="fas fa-phone"></i> 801.870.0868</li>
          <li><i class="fas fa-at"></i> <a href="mailto: charles.vasquez@realtypath.com" target="_blank" without rel="noopener noreferrer">charles.vasquez@realtypath.com</a></li>
          </ul>   
      </div>
    <div class="col s12 l3">
      <img className="forsale" src={forsale} alt="forsale"/>
      </div>
     </div>
        <div class="footer-copyright">
            <div class="container">
            MV Realtors © 2019 Copyright
            </div>
          </div>
          <Admin />
  </footer>
    )
  }
}
 export default Foot;

