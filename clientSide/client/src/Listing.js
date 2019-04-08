import React from 'react';
import {withContext} from './AppContext';
// import List from './Auth/List';

class Listing extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      list: [],
      title: "",
      description: "",
      price: "",
      picture: ""
    }
  }
  // componentDidMount(){
  //   this.props.getList()
  // }

  handleList = (e) => {
    e.persist();
    const { name, value } = e.target;
    this.setState({ 
      [name]: value
    })
  }
  clearInputs = () => {
    this.setState({
      title: "",
      description: "",
      price: "",
      picture: ""
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addList(this.state)
      .then(res => {
        this.clearInputs()
      })
      .catch(err => console.error(err.data))
  }
  render(){
    // const maplisting = lists.map((list, i) => <List key={i} list = {list}></List>)
    return(
      <div className="ListingContainer">
      {/* {maplisting} */}
      <form onSubmit={this.handleSubmit}>
        <h1>Listing</h1>
       Title: <input 
            onChange ={this.handleList}
            value={this.state.title}
            name="title"
            type="text"
            placeholder="title"
            />
      Description: <input 
          onChange ={this.handleList}
          value={this.state.description}
          name="description"
          type="text"
          placeholder="description"
          />
      Price: <input 
            onChange ={this.handleList}
            value={this.state.price}
            name="price"
            type="number"
            placeholder="price"
            />
      Picture: <input 
            onChange ={this.handleList}
            value={this.state.picture}
            name="picture"
            type="text"
            placeholder="picture"
            />
        <button type="submit">Add new Listing</button>
        </form>
      </div>
    ) 
  }

}
export default withContext(Listing);