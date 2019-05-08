import React from 'react';
import {withContext} from './AppContext';
import './blog.css';

class Blog extends React.Component{

  render(){

  
    return(
      <div className="blogBody">
        <h1 className="blogTitle">Blog</h1>
        <div className="blogContainer">
        <h3>@mvrealtors</h3>
  
        </div>
      </div>
    )
  }
}
export default withContext(Blog);