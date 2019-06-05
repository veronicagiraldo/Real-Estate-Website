import React from 'react';
import couple2 from './images/pic4.svg';
import keycouple from './images/couple-investment-key-1288482.jpg';
import mvlogo from './images/mvlogosvg.svg'
import './home.css'
import rp from "./images/headerLogo.png"
import {withContext} from './AppContext';
import {Link} from 'react-router-dom'

import {Row, Col, Card, CardTitle } from 'react-materialize';

class Home extends React.Component{
  render(){
    return(
      <div className="homeContainer">
        <div className="home">
        <h1 className="header">MV Realtors</h1>
           <p class="smile"> Smile!<br></br>…You’re Home!</p>
        <img className="responsive-img couple"src={couple2} alt="couple"/>
          </div>
      </div>
    )
  }
}
export default withContext(Home);