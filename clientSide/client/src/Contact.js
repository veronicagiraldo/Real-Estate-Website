import React from 'react';
import { withContext} from './AppContext';


class Contact extends React.Component{
  constructor(){
    super()
    this.state = {
      fullName: ""
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
      fullName: ""
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
      HELLO
        <form onSubmit={this.handleSubmit}>
        <h2>Let us reach out to you</h2>
          <input
              onChange={this.handleChange}
              value={this.state.fullName}
              name='fullName'
              type="text"
              placeholder="Full Name"
               />
         <input
              onChange={this.handleChange}
              value={this.state.phone}
              name='phone'
              type="number"
              placeholder="Phone Number"
               />
        <input 
              onChange={this.handleChange}
              value={this.state.email}
              name="email"
              type="text"
              placeholder="email address"
              />

        <input 
              onChange={this.handleChange}
              value={this.state.message}
              name="message"
              type="text"
              placeholder="Questions/Comments"
              />
        <button type="submit">request</button>
        </form>

        <h1>Contact us form</h1>
        <h3>Full Name</h3>
        <h3>Phone Number</h3>
        <h3>email address:</h3>
        <h3>message/comment</h3>
      </div>
    )
  }
}
export default withContext(Contact);