import React from 'react';
import { withContext } from '../AppContext';
import './list.css'

const List = (props) => {
  // console.log(props.list)
  // let {_id} = props.list
  // const list = props.list.filter(list=> list._id === _id)
  let {_id} = props.list
  return(
    <div class="listContainer">
    <div class="listInfo">
      <h3>FOR SALE</h3>
      <p>{props.list.title}</p>
      <p>Description:{props.list.description}</p>
      <p>$${props.list.price}</p>
      <img class="responsive-img"src={props.list.picture} alt={'picture'}></img>
      {/* <img src={picture} alt={"picture"+_id}/> */}
      {/* <button class="add"onClick={() => props.addList(_id)}></button> */}
      <button class="delete"onClick={() => props.deleteList(_id)}>DELETE</button>
    </div>
    </div>
  )
}

export default withContext(List);