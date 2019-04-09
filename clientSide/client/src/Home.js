import React from 'react';
// import { Link } from 'react-router-dom';
// import {withContext} from './AppContext';
// import misty from './images/pic2.svg';
// import couple from './images/pic3.svg';
import couple2 from './images/pic4.svg';
import {carousel} from 'react-materialize';
class Home extends React.Component{
 

  render(){
    return(
      <div className="homeContainer">
      <div className="home">
      {/* <div class="carousel">
      <img class="carousel-item" href="#one!"src="https://lorempixel.com/250/250/nature/1"/>
      <img class="carousel-item" href="#two!"src="https://lorempixel.com/250/250/nature/2"/>
      <img class="carousel-item" href="#three!"src="https://lorempixel.com/250/250/nature/3"/>
      <img class="carousel-item" href="#four!"src="https://lorempixel.com/250/250/nature/4"/>
      <img class="carousel-item" href="#five!"src="https://lorempixel.com/250/250/nature/5"/>
</div> */}
    {/* <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"></a>
    <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"></a>
    <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"></a>
    <a class="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"></a>
  </div>
       */}
        <p>Our Mission:</p>
        <p>To get you into the home of your dreams all while making your transition from 
          Renter to Homeowner painless, flawless and joyous.<br></br>
            Smile!….You’re Home!</p>
        {/* <p>Misty & Charles Vasquez</p> */}
        {/* <p>Misty Vasquez | 801.897.6430 | misty.vasquez@realtypath.com </p>
        <p>Charles Vasquez | 801.870.0868 | charles.vasquez@reatlypath.com </p> */}
        {/* <p>801.897.6430</p> */}
        {/* <p>misty.vasquez@realtypath.com</p> */}
        {/* <p>801.870.0868</p>
        <p>charles.vasquez@reatlypath.com</p> */}
        <img className="couple"src={couple2} alt="couple"/>
        </div>
      </div>
     
    )
  }
}
export default Home;