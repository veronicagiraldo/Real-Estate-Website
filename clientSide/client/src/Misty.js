import React from 'react';
import { withContext } from './AppContext';
import misty from './images/pic2.svg';
import './misty.css'

const Misty = () =>{
  return(
    <div className="about">
  <div className="content">
  <div class="content-overlay"></div>
      <img className ="misty"src={misty} alt="Misty"/> 
      <div class="content-details fadeIn-bottom">
      <h3>Misty Vasquez</h3>
      </div>
      </div>
  <p>Misty grew up in Salt Lake City and currently resides in the Liberty Wells neighborhood.  Her family has lived in the area since the 1920’s.  She has worked in the Service industry since 2003, holding managerial positions. Wanting to provide a full, healthy life for her family and her passion for serving others, drove her in the direction of Real Estate. She became a licensed Real Estate Agent in 2018. 
<br></br>
<br></br>
She studied Art History and Spanish at the University of Utah, and has a great love for traveling and design.  Her commitment to finding the perfect space for her clients goes above and beyond just finding a home.  While working fast and efficiently is her forte, she also loves to educate her clients and keep them up to date in this ever-changing market.  
<br></br>
<br></br>
She is a mother to a two-year-old boy, and she likes to spend her free time with her husband Charles and their son at their local park or in the mountains.  You can find her out for a long run or reading a good book. 
  </p>
 
  </div>
  )
}
export default withContext(Misty);