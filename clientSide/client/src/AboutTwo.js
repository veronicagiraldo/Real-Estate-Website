import React from 'react';
import { withContext } from './AppContext';
import Misty from './Misty';
import Charles from './Charles';
// import "./about.css";
import './couple.css';


class About extends React.Component{
  render(){
    return(
      <div className="coupleContainer">
      <div className="rowAbout">
      <Misty />
      </div>
      <div className="rowCharles">
      <Charles />
  
      </div>
      </div>
    )
  }
}
export default withContext(About);