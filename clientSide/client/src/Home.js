import React from 'react';
// import { Link } from 'react-router-dom';
import {withContext} from './AppContext';
// import misty from './images/pic2.svg';
// import couple from './images/pic3.svg';
import couple2 from './images/pic4.svg';

class Home extends React.Component{
  render(){
    return(
      <div>
       {/* <Link className="navLinks" to='/' >Home</Link>
        <Link className="navLinks" to='/About' >About</Link>
        <Link className="navLinks" to='/Blog' >Blog</Link>
        <Link className="navLinks" to='/Contact'>Contact</Link> 
         */}
      <div className="home">
        <h3>Misty Vasquez</h3>
        <h3>801.897.6430</h3>
        <h4>misty.vasquez@realtypath.com</h4>
        {/* <img className="misty"src={misty} alt="misty"/> */}
        <br></br>
        <h3>Charles Vasquez</h3>
        <h3>801.870.0868</h3>
        <h4>charles.vasquez@reatlypath.com</h4>
        <img className="couple"src={couple2} alt="couple"/>
      </div>
      </div>
    )
  }
}
export default withContext(Home);