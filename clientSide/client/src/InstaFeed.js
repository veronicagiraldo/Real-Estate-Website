import React from 'react';
import {withContext} from './AppContext';

class InstaFeed extends React.Component{
  componentDidMount(){
    this.props.getInsta();
}
  render(){
    const mapfeed = this.props.feed.map((feed, i) => {
      // console.log(feed.images.standard_resolution.url)
      return<img class="feed responsive-img" src={feed.images.standard_resolution.url} alt={'pic' + i}></img>
    } )
    return(
      <div>
        {mapfeed}
      </div>
    )
  }
}
export default withContext(InstaFeed);