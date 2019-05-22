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
                <p class="white-text">MV Realtors</p>
                <p class="footInfo">
                Realtypath LLC.
                2115 S. Dallin Street
                Salt Lake City, UT 84109
               <br></br>
               Misty |  801.897.6430 | <a href="mailto: misty.vasquez@realtypath.com" target="_blank" without rel="noopener noreferrer">misty.vasquez@realtypath.com </a>
            <br></br>  Charles | 801.870.0868  | <a href="mailto: charles.vasquez@realtypath.com"target="_blank" without rel="noopener noreferrer">charles.vasquez@realtypath.com </a>
              </p>
              </div>
              {/* <div class="col l4 offset-l2 s12"> */}
                
                <ul>
                  <li><a class="grey-text text-lighten-3" href="https://www.facebook.com/RealtorsMV/" target="_blank" without rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a class="grey-text text-lighten-3" href="https://www.instagram.com/mvrealtors/"target="_blank" without rel="noopener noreferrer"><i class="fab fa-instagram"></i></a></li>
                  <li><a class="grey-text text-lighten-3" href="https://www.realtypath.com/"target="_blank" without rel="noopener noreferrer"><i class="rp"></i></a></li>
                  {/* <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li> */}
                  {/* <li><img class="mvlogo"src={mvlogo} alt="mvlogo"/></li> */}
                  <li><img class="realtylogo"src={rp}alt="realtypath"/></li>
                </ul>
              </div>
            </div>
          {/* </div> */}
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