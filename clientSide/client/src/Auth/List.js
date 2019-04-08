import React from 'react';
import { withContext } from '../AppContext';

const List = (props) => {
  // console.log(props.list)
  let {_id} = props.list
  const list = list.filter(list=> list._id === _id)
  let {title, description, price, picture } = list
  return(
    <div>
      <h3>{title}</h3>
      <h3>{description}</h3>
      <h3>{price}</h3>
      <h3>{picture}</h3>
      <img src={picture} alt="picture"/>
      {/* <button onClick={() => props.addList()}></button> */}
      <button onClick={() => props.deleteList(_id)}></button>
    </div>
  )
}

export default withContext(List);