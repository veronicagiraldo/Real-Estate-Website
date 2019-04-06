import React from 'react';
import {withContext} from './AppContext';

class Blog extends React.Component{
  componentDidMount(){
    this.props.getInsta();
  }
  render(){
    console.log(this.props)
    const mapfeed = this.props.feed.map((feed) => {
      console.log(feed.images.standard_resolution.url)
      return<img src={feed.images.standard_resolution.url}></img>
    } )
    
    return(
      <div className="blogBody">
        <h2 className="blogTitle">Blog</h2>
        <div className="blogContainer">
        <h3>Blog</h3>
        {mapfeed}

        
        </div>
      </div>
    )
  }
}
export default withContext(Blog);