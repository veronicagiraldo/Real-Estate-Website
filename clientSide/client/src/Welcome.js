import React from 'react';
import { withContext } from './AppContext';
import './welcome.css'
import misty from './images/pic2.svg';
import charles from './images/pic1.svg';

const Welcome = () => {
 return(
<div className="row">
  <div className="column"> 
  <div className="card">
  <h4>Welcome</h4>
    <p>Our Mission:</p>
  <p>To get you into the home of your dreams all while making your transition from 
      Renter to Homeowner painless, flawless, and joyous.</p> 
  </div>
  </div>
  <div className="column">
  <div className="card">
  <img className ="misty"src={misty} alt="Misty"/>
  <h5>Misty Vasquez</h5> 
  <p>Misty's passion for serving others, drove her in the direction of Real Estate...</p>
  <a class="waves-effect waves-light btn-large">Read More</a>
  </div>
  </div>
  <div className="column"> 
  <div className="card">
  <img className="charles"src={charles} alt="Charles"/>
  <h5>Charles Vasquez</h5>
  <p>Charles's attention to fine detail makes him a focused and thorough Real Estate Agent...</p>
  <a class="waves-effect waves-light btn-large">Read More</a>
  </div>
  </div>
</div>
 )
  
}
export default withContext(Welcome);
