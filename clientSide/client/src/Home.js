import React from 'react';
// import { Link } from 'react-router-dom';
// import {withContext} from './AppContext';
// import misty from './images/pic2.svg';
// import couple from './images/pic3.svg';
import couple2 from './images/pic4.svg';
import {Carousel} from 'react-materialize';
import living from './images/apartment-architecture-bookcase-271795.jpg'
import ceiling from './images/ceiling.jpg';
import apartment from './images/apartment-.jpg';
import utah from './images/utah.jpg';
import lroom from './images/lroom.jpg';
import keycouple from './images/couple-investment-key-1288482.jpg';
import adults from './images/adult-casual-chef-1418355.jpg';
import feet from './images/adult-baby.jpg';
// import smile from './images/MV logos-2.png';
import mvlogo from './images/mvlogosvg.svg'
import './home.css'
import rp from "./images/headerLogo.png"

class Home extends React.Component{
 constructor(){
   super()
   this.style={
     fontStyle: "italic"
   }
 }
  componentDidUpdate(){
      setTimeout(() => {
        window.location.reload();
    }, 1000);
  }
  
  render(){
    return(
      <div className="homeContainer">
        <div className="home">
        <img className="mvlogo left" src={mvlogo} alt="mvlogo"/>
        <img class="responsive-img realtylogo right"src={rp}alt="realtypath"/>
        <h1 className="header">MV Realtors</h1>
    
  <Carousel options={{fullWidth: true ,indicators: true,  setTimeout: 1000}} images={[
    `${ceiling}`,
    `${lroom}`, 
    `${keycouple}`,
    `${adults}`,
    `${feet}`,
    // `${smile}`,
  ]} />
   
        <p>Our Mission:</p>
        <p style={this.style}>To get you into the home of your dreams all while making your transition from 
          Renter to Homeowner painless, flawless, and joyous.</p>
           <p class="smile"> Smile!<br></br>…You’re Home!</p>
  
        <img className="responsive-img couple"src={couple2} alt="couple"/>
        </div>
      </div>
     
    )
  }
}
export default Home;