import React from 'react';
// import { Link } from 'react-router-dom';
// import {withContext} from './AppContext';
// import misty from './images/pic2.svg';
// import couple from './images/pic3.svg';
import couple2 from './images/pic4.svg';

class Home extends React.Component{
 
  render(){
    return(
      <div className="homeContainer">
      <div className="home">
        <h2>Our Mission:</h2>
        <h2>To get you into the home of your dreams all while making your transition from Renter to Homeowner painless, flawless and joyous.  <br></br>
Smile!….You’re Home!</h2>
        <h3>Misty & Charles Vasquez</h3>
        <h4>801.897.6430</h4>
        <h4>misty.vasquez@realtypath.com</h4>
        {/* <img className="misty"src={misty} alt="misty"/> */}
        {/* <h3>Charles Vasquez</h3> */}
        <h3>801.870.0868</h3>
        <h4>charles.vasquez@reatlypath.com</h4>
        <img className="couple"src={couple2} alt="couple"/>
        </div>
      </div>
     
    )
  }
}
export default Home;