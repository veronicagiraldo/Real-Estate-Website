import React from 'react';
import misty from './images/pic2.svg';
import charles from './images/pic1.svg';
import "./about.css";

class About extends React.Component{
  render(){
    return(
      <div className="about">
        <h1>About Us</h1>
        
      <div className="aboutInfo">
          <img className ="misty"src={misty} alt="Misty"/>
          {/* <p>Misty Vasquez</p> */}
           <p>Misty grew up in Salt Lake City and currently resides in the Liberty Wells neighborhood.  Her family has lived in the area since the 1920’s.  She has worked in the Service industry since 2003, holding managerial positions. Wanting to provide a full, healthy life for her family and her passion for serving others, drove her in the direction of Real Estate. She became a licensed Real Estate Agent in 2018.</p>
     
      <img className="charles"src={charles} alt="Charles"/>
      {/* <h4>Charles Vasquez</h4> */}
      <p> 
        Charles was born in Salt Lake City, and spent his school years in West Valley City. His parents migrated to Utah from El Salvador in 1980.  They followed the American Dream by working hard and becoming entrepreneurs.  His mother became a Real Estate Agent in 1989, and quickly became a Top Producing Agent!  His Father briefly worked as a Mortgage Lender, and now owns multiple investment properties.  Together they own a successful El Salvadorean Restaurant in West Valley City.  Charles grew up watching his parents hard work lead them to success and has always felt connected to the world of Real Estate.  He became a licensed Real Estate Agent in 2018.
        <br></br>
        <br></br>
        Charles’ first passion was Graphic Art. He studied in Chicago at a Technical Design Institute as well as the University of Utah.  He has worked as a freelance Graphic Designer for over 6 years.  His attention to fine detail makes him a focused and thorough Real Estate Agent.
        <br></br>
        He is a father of one, who lives for his wife and son. When he’s not working, you can find him playing soccer with friends, attending Real Salt Lake matches, working on his personal art and being creative, or maybe even gardening. </p>

</div>
      </div>
    )
  }
}
export default About;


