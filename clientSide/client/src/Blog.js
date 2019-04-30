import React from 'react';
import {withContext} from './AppContext';
import './blog.css';

class Blog extends React.Component{
  componentDidMount(){
    this.props.getInsta();
  }
  render(){
    // console.log(this.props)
    const mapfeed = this.props.feed.map((feed, i) => {
      // console.log(feed.images.standard_resolution.url)
      return<img class="responsive-img" src={feed.images.standard_resolution.url} alt={'pic' + i}></img>
    } )
    
    return(
      <div className="blogBody">
        <h1 className="blogTitle">Blog</h1>
        <div className="blogContainer">
        <h3>@mvrealtors</h3>
        {mapfeed}
        </div>
      </div>
    )
  }
}
export default withContext(Blog);