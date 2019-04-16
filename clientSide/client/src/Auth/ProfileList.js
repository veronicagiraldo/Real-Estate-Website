import React from 'react';
import { withContext} from '../AppContext';

const ProfileList = (props) => {
  // console.log(props.contact)
  let {_id} = props.contact
    return(
     
      <div class="profileDisplay">
      <div class="profileInfo">
        <h3>Contact</h3>
        <p>Full Name: {props.contact.fullName}</p>
        <p>Email:{props.contact.email}</p>
        <p>Phone:{props.contact.phone}</p>
        <p>Messages:{props.contact.message}</p>
        <button class="waves-effect waves-teal btn-flat"onClick={() => props.deleteContact(_id)}>Delete</button>
        </div>
      </div>
    )

}
export default withContext(ProfileList);