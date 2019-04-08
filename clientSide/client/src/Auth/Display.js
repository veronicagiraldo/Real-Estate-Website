import React from 'react';
import { withContext } from '../AppContext';
import List from './List';
// import {Link, Switch, Route} from 'react-router-dom';

// const Display = () => {
class Display extends React.Component{
  componentDidMount(){
    this.props.getList()
    // console.log(this.props)
  }
  
  render(){
    // console.log(this.props.lists)
    const listingMapped = this.props.lists.map((list) =>{
      console.log(list)
      return<h3>{list.title}{list.description}{list.price}<img className="displayImg"src={list.picture}></img></h3>
    })
    return (
      <div className="listDisplay">
      {/* <h3>{this.props.title}</h3> */}
      <h3>Listing</h3>
      <div className="listDisplay">
      {listingMapped}
    </div>
    {/* <Switch>
      <Route path="/list/:_id" component={List}/>
      </Switch> */}
      </div>
    )
  }
}

export default withContext(Display)