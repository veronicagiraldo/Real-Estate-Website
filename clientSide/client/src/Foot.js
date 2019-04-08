import React from 'react';
// import {reatly} from './images/path.svg'
// import {MV} from './images/MVlogos-1.svg'
// import {mvlogo} from './images/mvlogo.svg'
// import {logo5} from './images/logo5.svg'
// import {pic} from './images/logo.svg'
import './foot.css';
// import {rplogo} from './images/headerLogo.png'

class Foot extends React.Component{
  render(){
    return(
      <footer class="page-footer">
      <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">MV Realtor</h5>
                <p class="grey-text text-lighten-4">
                  Misty  |  801.897.6430 | <a href="misty.vasquez@realtypath.com"/>misty.vasquez@realtypath.com <br></br>
                  Charles | 801.870.0868  | <a href="charles.vasquez@reatlypath.com"/>charles.vasquez@reatlypath.com <br></br>
                <br></br>
                Realtypath LLC<br></br>
                2115 S. Dallin Street
                Salt Lake City, UT 84109<br></br>
               </p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text"></h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="https://www.facebook.com/RealtorsMV/"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a class="grey-text text-lighten-3" href="https://www.instagram.com/mvrealtors/"><i class="fab fa-instagram"></i></a></li>
                  <li><a class="grey-text text-lighten-3" href="https://www.realtypath.com/"><img src="./logo.svg"alt=""/></a></li>
                  {/* <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li> */}
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2019 Copyright
            <a class="grey-text text-lighten-4 right" href="#!">MV Realtors©</a>
            </div>
          </div>
      {/* <div className="footer">
        <p>Misty Vasquez</p>
        <p>801.897.6430</p>
        <p>misty.vasquez@realtypath.com</p>
        <p>Charles Vasquez</p>
        <p>801.870.0868</p>
        <p>charles.vasquez@reatlypath.com</p>
        <img src={logo} alt=""/>
        <img src={pic} alt= ""/>
        <img src={MV} alt="rp"/>
        <img className="logo"src={mvlogo} alt="logo"/> 
        <img className="logo2" src={logo5} alt="logo"/>
      </div> */}
      </footer>
    )
  }
  
}

export default Foot;