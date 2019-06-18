import React from 'react';
import { withContext } from './AppContext';
import charles from './images/pic1.svg';
import './about.css'

const Charles = () =>{
  return(
    <div className="about">
    <div className="content">
    <div class="content-overlay"></div>
    <img className="charles"src={charles} alt="Charles"/>
    <div class="content-details fadeIn-bottom">
    <h3>Charles Vasquez</h3>
    </div>
    </div>
    <p> 
      Charles was born in Salt Lake City, and spent his school years in West Valley City. His parents migrated to Utah from El Salvador in 1980.  They followed the American Dream by working hard and becoming entrepreneurs.  His mother became a Real Estate Agent in 1989, and quickly became a Top Producing Agent!  His Father briefly worked as a Mortgage Lender, and now owns multiple investment properties.  Together they own a successful El Salvadorean Restaurant in West Valley City.  Charles grew up watching his parents hard work lead them to success and has always felt connected to the world of Real Estate.  He became a licensed Real Estate Agent in 2018.
      <br></br>
      <br></br>
      Charles’ first passion was Graphic Art. He studied in Chicago at a Technical Design Institute as well as the University of Utah.  He has worked as a freelance Graphic Designer for over 6 years.  His attention to fine detail makes him a focused and thorough Real Estate Agent.
      <br></br>
      <br></br>
      He is a father of one, who lives for his wife and son. When he’s not working, you can find him playing soccer with friends, attending Real Salt Lake matches, working on his personal art and being creative, or maybe even gardening. 
      <br></br>
      </p>
      </div>
     
  )
}
export default withContext(Charles)