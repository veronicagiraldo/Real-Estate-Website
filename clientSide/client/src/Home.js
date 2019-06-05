import React from 'react';
import keycouple from './images/couple-investment-key-1288482.jpg';
// import mvlogo from './images/mvlogosvg.svg'
import './home.css'
// import rp from "./images/headerLogo.png"
import {withContext} from './AppContext';
// import {Link} from 'react-router-dom'


class Home extends React.Component{
  render(){
    return(
      <div className="homeContainer">
       <img src={keycouple} alt="home" class="image"/>
       <div className="overlay">
        <div className="home">
        <h1 className="header">MV Realtors</h1>
           <p class="smile"> Smile!<br></br>…You’re Home!</p>
          </div>
          </div>
       </div>
    )
  }
}
export default withContext(Home);