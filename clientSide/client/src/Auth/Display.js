import React from 'react';
import { withContext } from '../AppContext';
import List from './List';
// import {Switch, Route} from 'react-router-dom';

// const Display = () => {
class Display extends React.Component{
  componentDidMount(){
    this.props.getList()
    // console.log(this.props)
  }
  
  render(){
    // console.log(this.props.lists)
    const listingMapped = this.props.lists.map((list,i) => <List key ={i} list={list}></List>)
    
      // console.log(list)
      // return<h3>{list.title}{list.description}{list.price}<img className="displayImg"src={list.picture} alt={'picture'+i}></img></h3>
    
    return (
      // <div className="listDisplay">
        <div>
      {listingMapped}
{/*    
    <Switch>
      <Route path="/list/:_id" component={List}/>
      </Switch> */}
   
      </div>
    )
  }
}

export default withContext(Display)