import React from 'react';
import {withContext} from './AppContext';
import './insta.css'

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
      <div className="instaContainer">
      <div className="instaDisplay">
        {mapfeed[0]}
        {mapfeed[1]}
        {mapfeed[2]}
        {mapfeed[3]}
        {mapfeed[4]}
        {mapfeed[5]}
        {/* <div className="rowTwo"> */}
        {mapfeed[6]}
        {mapfeed[7]}
        {mapfeed[8]}
        {mapfeed[9]}
        {mapfeed[10]}
        {mapfeed[11]}
        </div>
      </div>
      // </div>
    )
  }
}
export default withContext(InstaFeed);