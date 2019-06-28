import React from 'react';
import { withContext } from './AppContext';
import './welcome.css'
import misty from './images/pic2.svg';
import charles from './images/pic1.svg';
import {Link} from 'react-router-dom';
// import Contact from './Contact';
// import About from './About';


const Welcome = () => {
 return(
<div className="row">
  <div className="columnWelcome"> 
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
  <Link to="./about"class="waves-effect waves-light btn-large">Read More</Link>
  </div>
  </div>
  <div className="column"> 
  <div className="card">
  <img className="charles"src={charles} alt="Charles"/>
  <h5>Charles Vasquez</h5>
  <p>Charles's attention to fine detail makes him a focused and thorough Real Estate Agent...</p>
  <Link to="/about"class="waves-effect waves-light btn-large">Read More</Link>
  {/* <a >Read More</a> */}
  </div>
  </div>
  {/* <div className="column"> 
  <div className="card">
  <h5>Contact Us</h5>
  <p></p>
  {/* <button onClick={()=> <Link to='/contact'/>}>hello</button> */}
  {/* <a href="/contact">Contact</a> */}
  {/* <Link className="waves-effect waves-light btn-large" to='/Contact'>Click Here</Link>
  </div>
  </div> */}

</div>
 )
  
}
export default withContext(Welcome);
