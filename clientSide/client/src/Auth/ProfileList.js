import React from 'react';
import { withContext} from '../AppContext';

const ProfileList = (props) => {
  // console.log(props.contact)
  let {_id} = props.contact
  // return<h3>{contact.fullName}{contact.phone} {contact.email}{contact.message}</h3>
    return(
     
      <div>
        <h3>{props.contact.fullName}</h3>
        <h3>{props.contact.email}</h3>
        <h3>{props.contact.phone}</h3>
        <h3>{props.contact.message}</h3>
        <button onClick={() => props.deleteContact(_id)}>Delete</button>
        <button onClick={() => props.editContact(_id)}>Edit</button>
      </div>
    )

}
export default withContext(ProfileList);