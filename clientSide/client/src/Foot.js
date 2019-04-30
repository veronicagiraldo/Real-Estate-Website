import React from 'react';
// import {reatly} from './images/path.svg'
// import {MV} from './images/MVlogos-1.svg'
// import {mvlogo} from './images/mvlogo.svg'
// import {logo5} from './images/logo5.svg'
// import {pic} from './images/logo.svg'
import './foot.css';
import rp from "./images/headerLogo.png"
import mvlogo from './images/mvlogosvg.svg'
// import {rplogo} from './images/headerLogo.png'

class Foot extends React.Component{
  render(){
    return(
      <footer class="page-footer">
      <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h4 class="white-text">MV Realtors</h4>
                <p class="footInfo">
                Realtypath LLC.<br></br>
                2115 S. Dallin Street
                Salt Lake City, UT 84109
                </p>
                {/* <br></br> */}
                <p>
              Misty |  801.897.6430 | <a href="misty.vasquez@realtypath.com"/>misty.vasquez@realtypath.com <br></br>
              Charles | 801.870.0868  | <a href="charles.vasquez@reatlypath.com"/>charles.vasquez@realtypath.com <br></br>
               </p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text"></h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="https://www.facebook.com/RealtorsMV/"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a class="grey-text text-lighten-3" href="https://www.instagram.com/mvrealtors/"><i class="fab fa-instagram"></i></a></li>
                  <li><a class="grey-text text-lighten-3" href="https://www.realtypath.com/"><i class="rp"></i></a></li>
                  {/* <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li> */}
                  <li><img class="mvlogo"src={mvlogo} alt="mvlogo"/></li>
                  <li><img class="realtylogo"src={rp}alt="realtypath"/></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            MV Realtors © 2019 Copyright
            
            {/* <a class="grey-text text-lighten-4 right" href="#!">MV Realtors©</a> */}
            </div>
          </div>
      </footer>
    )
  }
  
}

export default Foot;