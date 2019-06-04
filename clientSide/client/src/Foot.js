import React from 'react';
// import {reatly} from './images/path.svg'
// import {MV} from './images/MVlogos-1.svg'
// import {mvlogo} from './images/mvlogo.svg'
// import {logo5} from './images/logo5.svg'
// import {pic} from './images/logo.svg'
import './foot.css';
import rp from "./images/headerLogo.png"
import mvlogo from './images/mvlogosvg.svg'
import forsale from './images/mv-home-2.png';
// import {rplogo} from './images/headerLogo.png'

class Foot extends React.Component{
  render(){
    return(
      <footer class="page-footer">
        <div class="row">
            <div class="col s12 l3">
            <img class="realtylogo "src={rp}alt="realtypath"/>
          </div>
    <div class="col s12 l3"><p>Realtypath LLC.</p>
    <i class="fas fa-map-marker-alt"></i> 2115 S. Dallin Street<br></br>
                Salt Lake City, UT 84109
                </div>
    <div class="col s12 l3">
    <ul>
          <li><i class="fas fa-user"></i> Misty Vasquez</li>
          <li><i class="fas fa-phone"></i> 801.897.6430</li>
          <li><i class="fas fa-at"></i> <a href="mailto: misty.vasquez@realtypath.com" target="_blank" without rel="noopener noreferrer">misty.vasquez@realtypath.com</a></li>
          <li><i class="fas fa-user"></i> Charles Vasquez</li>
          <li><i class="fas fa-phone"></i> 801.870.0868</li>
          <li><i class="fas fa-at"></i> <a href="mailto: charles.vasquez@realtypath.com" target="_blank" without rel="noopener noreferrer">charles.vasquez@realtypath.com </a></li>
          </ul>
         
    </div>
    <div class="col s12 l3 hide-on-small-only">
    <img className="forsale" src={forsale} alt="forsale"/>
    </div>
    </div>
        <div class="footer-copyright">
            <div class="container">
            MV Realtors © 2019 Copyright
            </div>
          </div>
          
  </footer>
    )
    }
    }
    export default Foot;

