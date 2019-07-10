import React from 'react';
import { withContext } from './AppContext';
import { Link } from 'react-router-dom';
import "./us.css";
import couple2 from './images/pic4.svg';
// import Form from './Contact'

const Us = () => {
return(
  <div class="usContainer">
      <img className="couple"src={couple2} alt="couple"/>
      <ul class="info">
          <li><i class="fas fa-user"></i> Misty Vasquez</li>
          <li><i class="fas fa-phone"></i> 801.897.6430</li>
          <li><i class="fas fa-at"></i> <a href="mailto: misty.vasquez@realtypath.com" target="_blank" without rel="noopener noreferrer">misty.vasquez@realtypath.com</a></li><br></br>
          <li><i class="fas fa-user"></i> Charles Vasquez</li>
          <li><i class="fas fa-phone"></i> 801.870.0868</li>
          <li><i class="fas fa-at"></i> <a href="mailto: charles.vasquez@realtypath.com" target="_blank" without rel="noopener noreferrer">charles.vasquez@realtypath.com </a></li><br></br>
          <li><a href="https://mre.run/APP2624/dashboard"><i class="fas fa-home"></i></a> Search Listings Here</li>
      <ul class="social">
          <li class="sunny"> <a class="socialIcon" href="https://www.instagram.com/mvrealtors/"target="_blank" without rel="noopener noreferrer"><i class="fab fa-instagram"></i></a></li>
          <li class="sunny"> <a class="socialIcon" href="https://www.facebook.com/RealtorsMV/" target="_blank" without rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a></li>
     </ul>
      </ul>   
  </div>
  
)
}
export default withContext(Us);