import React from 'react';
import { withContext } from './AppContext';
import { Link } from 'react-router-dom';
import "./us.css";
import couple2 from './images/pic4.svg';

const Us = () => {
return(
  <div class="usContainer">
      <h5></h5>
      <img className="couple"src={couple2} alt="couple"/>
      <ul class="contactInfo">
          <li><i class="fas fa-user"></i> Misty Vasquez</li>
          <li><i class="fas fa-phone"></i> 801.897.6430</li>
          <li><i class="fas fa-at"></i> <a href="mailto: misty.vasquez@realtypath.com" target="_blank" without rel="noopener noreferrer">misty.vasquez@realtypath.com</a></li>
          <li><i class="fas fa-user"></i> Charles Vasquez</li>
          <li><i class="fas fa-phone"></i> 801.870.0868</li>
          <li><i class="fas fa-at"></i> <a href="mailto: charles.vasquez@realtypath.com" target="_blank" without rel="noopener noreferrer">charles.vasquez@realtypath.com </a></li>
      </ul>   
  {/* <Link className="waves-effect waves-light btn-large" to='/contact'>Click Here</Link> */}
  <Link to="/contact"><button class="waves-effect waves-light btn-large">email us</button></Link>
  </div>
  
)
}
export default withContext(Us);