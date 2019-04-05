import React from 'react';
import misty from './images/pic2.svg';
import charles from './images/pic1.svg';

class About extends React.Component{
  render(){
    return(
      <div className="titleBody">
      <h1 className="Vasquez">Charles & Misty Vasquez</h1>
      <img className ="misty"src={misty} alt="Misty"/>
      <img className="charles"src={charles} alt="Charles"/>

      </div>
    )
  }
}
export default About;