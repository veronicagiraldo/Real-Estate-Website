import React from 'react';
import { withContext } from '../AppContext';

class Login extends React.Component{
  constructor(){
    super();
    this.state = {
      username: "",
      password: "",
      errorMessage: ""
    }
  }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  clearInputs = () => {
    this.setState({
      username: "",
      password: "",
      errorMessage: ""
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.clearInputs())
      .catch(err => {
        this.setState({errorMessage: err.data})
      })
      .then(() => this.props.history.push('/lists'))
  }

  render(){
    return(
      <div className="form-wrapper">
        <form onSubmit={this.handleSubmit}>
          <h3>Login</h3>
          <input
            onChange = {this.handleChange}
            value = {this.state.username}
            name="username"
            type="text"
            placeholder="Username"
            />
          <input
            onChange = {this.handleChange}
            value = {this.state.password}
            name="password"
            type="text"
            placeholder="password"
            />
        <button type="submit">Login</button>  
        </form>
        {
          this.state.errorMessage && 
          <p>{this.state.errorMessage}</p>
        }
        </div>
    )
  }
}

export default withContext(Login)