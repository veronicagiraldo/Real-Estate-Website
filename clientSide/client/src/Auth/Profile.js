import React from 'react';
import { withContext } from '../AppContext';
import ProfileList from '../Auth/ProfileList';

class Profile extends React.Component{
  componentDidMount(){
    this.props.getContact()
  }
  render(){
    // console.log(this.props)
   const mapContact = this.props.contacts.map((contact, i) => <ProfileList key = {i} contact = {contact}></ProfileList>)
    return(
      <div className="profileBody">
        {/* <h4>{this.props.fullName}{this.props.phone} {this.props.email}{this.props.message}</h4> */}
        {mapContact}
      </div>
    )
   }
}

export default withContext(Profile);
