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
    <div class="col s12 m6 l3"><p>Icon</p></div>
    <div class="col s12 m6 l3"><p>realtypath info</p></div>
    <div class="col s12 m6 l3"><p>realtor info</p></div>
    <div class="col s12 m6 l3"><p>ugly photo</p></div>
  </div>
        <div class="row">
          {/* <div class="col s12">MV Realtors</div> */}
          <div class="col m6 s12">
          <img class="realtylogo"src={rp}alt="realtypath"/>
          </div>
          
          <div class="col m6 s12">
          <h6>Realtypath LLC.</h6>
          <i class="fas fa-map-marker-alt">  2115 S. Dallin Street
                Salt Lake City, UT 84109</i>
        
          </div>
          {/* <div class="col m3 s12 left-align">
          <div class="col container">
          <i class="fas fa-user"> Misty Vasquez</i>
          <i class="fas fa-phone"> 801.897.6430</i> 
          <i class="fas fa-at"><a href="mailto: misty.vasquez@realtypath.com" target="_blank" without rel="noopener noreferrer"> misty.vasquez@realtypath.com </a></i>
          <i class="fas fa-user"> Charles Vasquez</i>
          <i class="fas fa-phone"> 801.870.0868</i> 
          <i class="fas fa-at"><a href="mailto: charles.vasquez@realtypath.com" target="_blank" without rel="noopener noreferrer"> charles.vasquez@realtypath.com </a></i>
         
         </div> */}
        <h6>Contact Me</h6>
          <ul>
          <li><i class="fas fa-user">Misty Vasquez</i></li>
          <li><i class="fas fa-phone"></i> 801.897.6430</li>
          <li><i class="fas fa-at"><a href="mailto: misty.vasquez@realtypath.com" target="_blank" without rel="noopener noreferrer">misty.vasquez@realtypath.com </a></i></li>
          <li><i class="fas fa-user">Charles Vasquez</i></li>
          <li><i class="fas fa-phone"></i> 801.870.0868</li>
          <li><i class="fas fa-at"><a href="mailto: charles.vasquez@realtypath.com" target="_blank" without rel="noopener noreferrer">charles.vasquez@realtypath.com </a></i></li>
          </ul>
         
          <div class="col m6 s12 offset-s6">
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

            {/* <div class="row">
              <div class="col l6 s12">
                <p class="white-text">MV Realtors</p> */}
                
                {/* <p class="footInfo">
               
                Realtypath LLC.
                2115 S. Dallin Street
                Salt Lake City, UT 84109
               <br></br>
               Misty |  801.897.6430 | <a href="mailto: misty.vasquez@realtypath.com" target="_blank" without rel="noopener noreferrer">misty.vasquez@realtypath.com </a>
            <br></br>  Charles | 801.870.0868  | <a href="mailto: charles.vasquez@realtypath.com"target="_blank" without rel="noopener noreferrer">charles.vasquez@realtypath.com </a>
              </p> */}
              {/* </div>
                
                <ul>
                  <li><a class="grey-text text-lighten-3" href="https://www.facebook.com/RealtorsMV/" target="_blank" without rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a class="grey-text text-lighten-3" href="https://www.instagram.com/mvrealtors/"target="_blank" without rel="noopener noreferrer"><i class="fab fa-instagram"></i></a></li>
                  <li><a class="grey-text text-lighten-3" href="https://www.realtypath.com/"target="_blank" without rel="noopener noreferrer"><i class="rp"></i></a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                  <li><img class="mvlogo"src={mvlogo} alt="mvlogo"/></li>
           
                </ul>
              </div>
            </div> */}
         
          {/* <div class="footer-copyright">
            <div class="container">
            MV Realtors © 2019 Copyright
            </div>
          </div>
      </footer> */}
    {/* )
  }
  
} */}

// export default Foot;