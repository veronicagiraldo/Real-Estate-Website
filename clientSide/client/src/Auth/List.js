import React from 'react';
import { withContext } from '../AppContext';

const List = (props) => {
  console.log(props.list)
  let {_id} = props.list
  return(
    <div>
      <h3>{props.list.title}</h3>
      <h3>{props.list.description}</h3>
      <h3>{props.list.price}</h3>
      <h3>{props.list.picture}</h3>
      <img src={props.list.picture} alt="picture"/>
      {/* <button onClick={() => props.addList()}></button> */}
      <button onClick={() => props.deleteList(_id)}></button>
    </div>
  )
}

export default withContext(List);