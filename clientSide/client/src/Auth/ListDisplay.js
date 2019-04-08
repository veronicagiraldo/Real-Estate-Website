import React from 'react';
import { withContext } from '../AppContext';
import List from './List';

class ListDisplay extends React.Component{
  componentDidMount(){
    this.props.getList()
  }
  render(){
    console.log(this.props.list)
    const maplisting = this.props.lists.map((list, i) => <List key={i} list = {list}></List>)
    return(
      <div className="listDisplay">
      {/* <h3>{this.props.title}</h3> */}
      {maplisting}
      </div>
    )
  }
}

export default withContext(ListDisplay)