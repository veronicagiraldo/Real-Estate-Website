import React from 'react';
import { withContext} from './AppContext';
import './contact.css';
// import Us from './Us';
// import couple2 from './images/pic4.svg';
// import home from './images/mv-home-2.png';

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
      <div className="contactContainer">
        <form class="form" onSubmit={this.handleSubmit}>
        <div class="innerContainer">
        <h4>Let's Talk </h4>
         Full Name:<input
              onChange={this.handleChange}
              value={this.state.fullName}
              name='fullName'
              type="text"
              // placeholder="Full Name"
               />
               {/*  */}
         Phone Number:<input
              onChange={this.handleChange}
              value={this.state.phone}
              name='phone'
              type="number"
              // placeholder="Phone Number"
               />
               {/* <br></br> */}
        Email Address:<input 
              onChange={this.handleChange}
              value={this.state.email}
              name="email"
              type="text"
              // placeholder="email address"
              />
              {/* <br></br> */}
        Message:<textarea 
              onChange={this.handleChange}
              value={this.state.message}
              name="message"
              type="text"
              placeholder=""
              />
              {/* <br></br> */}
      <button class="waves-effect waves-light btn-large"type="submit">REQUEST</button>
        </div>
        </form>
        {/* <img className="mvhome"src={home} alt=""/> */}
        {/* <img className="couple"src={couple2} alt="couple"/> */}
        {/* <Us /> */}
      </div>

    )
  }
}
export default withContext(Contact);