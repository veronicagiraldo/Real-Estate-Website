import React from 'react';
import couple2 from './images/pic4.svg';
// import {Carousel} from 'react-materialize';
// import living from './images/apartment-architecture-bookcase-271795.jpg'
// import ceiling from './images/ceiling.jpg';
// import apartment from './images/apartment-.jpg';
// import utah from './images/utah.jpg';
// import lroom from './images/lroom.jpg';
import keycouple from './images/couple-investment-key-1288482.jpg';
// import adults from './images/adult-casual-chef-1418355.jpg';
// import feet from './images/adult-baby.jpg';
// import smile from './images/MV logos-2.png';
import mvlogo from './images/mvlogosvg.svg'
import './home.css'
import rp from "./images/headerLogo.png"
import {withContext} from './AppContext';

class Home extends React.Component{
 constructor(){
   super()
   this.style={
     fontStyle: "italic"
   }
 }
 componentDidMount(){
      this.props.getInsta();
 }
  // componentDidUpdate(){
  //   this.props.getInsta();
  // }

  render(){
    const mapfeed = this.props.feed.map((feed, i) => {
      // console.log(feed.images.standard_resolution.url)
      return<img class="responsive-img feed" src={feed.images.standard_resolution.url} alt={'pic' + i}></img>
    } )
    return(
      <div className="homeContainer">
        <div className="home">
        {/* <img className="hide-on-small-only mvlogo left" src={mvlogo} alt="mvlogo"/> */}
        {/* <img class="hide-on-small-only realtylogo right"src={rp}alt="realtypath"/> */}
        <h1 className="header">MV Realtors</h1>
   
  {/* <Carousel options={{fullWidth: true ,indicators: true,  setTimeout: 1000}} images={[
    `${ceiling}`,
    `${lroom}`, 
    `${keycouple}`,
    // `${adults}`,
    `${feet}`,
    // `${smile}`,
  ]} /> */}
   
        {/* <p>Our Mission:</p>
        <p>To get you into the home of your dreams all while making your transition from 
          Renter to Homeowner painless, flawless, and joyous.</p> */}
           <p class="smile"> Smile!<br></br>…You’re Home!</p>
           {/* <p style=""="smile"> Smile!<br></br>…You’re Home!</p> */}
        <img className="responsive-img couple"src={couple2} alt="couple"/>
        
        {/* <h3>Follow @mvrealtors on Instagram</h3> */}
              {mapfeed}
                
              {/* <h3>@mvrealtors</h3> */}
              </div>
      </div>
     
    )
  }
}
export default withContext(Home);