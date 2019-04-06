import React from 'react';
import { withContext } from '../AppContext';
// import ProfileList from '../src/Auth/ProfileList';

class Profile extends React.Component{
  componentDidMount(){
    this.props.getContact()
  }
  render(){
    // console.log(this.props)
   const mapContact = this.props.contact.map((contact) => {
  //  <ProfileList key = {i}>{this.props.fullName}</ProfileList>)
    // console.log(contact)
    // <ProfileList key ={contact.fullName}/>
    return<h3>{contact.fullName}{contact.phone} {contact.email}{contact.message}</h3>
   
   })
    return(
      <div className="profileBody">
        {/* <h4>{this.props.fullName}{this.props.phone} {this.props.email}{this.props.message}</h4> */}
        {mapContact}
      </div>
    )
   }
}

export default withContext(Profile);
