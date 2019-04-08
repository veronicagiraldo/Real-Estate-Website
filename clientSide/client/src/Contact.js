import React from 'react';
import { withContext} from './AppContext';

class Contact extends React.Component{
  constructor(){
    super()
    this.state = {
      fullName: "",
      phone: "",
      email: "",
      message: ""
    }
  }
  handleChange =(e) => {
    e.persist();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }
  clearInputs = () => {
    this.setState({
      fullName: "",
      phone: '',
      email: '',
      message: '',
    })
  }

  handleSubmit =(e) =>{
    e.preventDefault();
    this.props.addContact(this.state)
      .then(res => {
        this.clearInputs()
      })
      .catch(err => console.error(err.data))
  }
  render(){
    // mapped out form 
    return(
    
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
        <h2>WE NEED TO TALK </h2>
         Full Name:<input
              onChange={this.handleChange}
              value={this.state.fullName}
              name='fullName'
              type="text"
              placeholder="Full Name"
               /><br></br>
         Phone Number:<input
              onChange={this.handleChange}
              value={this.state.phone}
              name='phone'
              type="number"
              placeholder="Phone Number"
               /><br></br>
        Email Address:<input 
              onChange={this.handleChange}
              value={this.state.email}
              name="email"
              type="text"
              placeholder="email address"
              /><br></br>
        Message:<input 
              onChange={this.handleChange}
              value={this.state.message}
              name="message"
              type="text"
              placeholder=""
              />
              <br></br>
        <button type="submit">Let's talk</button>
        </form>
      </div>
    )
  }
}
export default withContext(Contact);