import React from 'react';
import axios from 'axios';

const listAxios = axios.create();

listAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
})

const UserContext = React.createContext();

class UserProvider extends React.Component{
  constructor(){
    super()
    this.state = {
      list: [],
      contact: [],
      user: JSON.parse(localStorage.getItem('user')) || {},
      token: localStorage.getItem('token') || ""
    }
  }

  componentDidMount(){
    this.addContact();
  }
  getList = () => {
    return axios.get('/api/list')
      .then(response => {
        this.setState({ list: response.data});
        return response;
      })
  }
  addList = (newList) => {
    return axios.post('/api/list', newList)
      .then(response => {
        this.setState(prevState => {
          return { list: [...prevState.list, response.data]}
        });
        return response;
      })
  }

  deleteList = (listId) => {
    return axios.put(`/api/list/${listId}`)
      .then( response => {
        this.setState(prevState => {
          const updatedList = prevState.list.filter(list => {
            return list._id !== listId
          })
          return { list: updatedList}
        })
        return response;
      })
   }
  addContact = (savedContact) => {
    return axios.post('/api/contact', savedContact)
      .then(res => {
        this.setState(prevState => {
          return { contact: [...prevState.contact, res.data]}
        });
        return res;
    })
  }

 
  signup = (userInfo) => {
    return listAxios.post('/auth/signup', userInfo)
    .then(res => {
      const { user, token } = res.data
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      this.setState({
        user, 
        token
      });
      return res;
    })
  }

  login = (credentials) => {
    return listAxios.post('/auth/login', credentials)
      .then(res =>{
        const { token, user } = res.data;
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        this.setState({
          user,
          token
        });
        this.getList();
        return res;
      })
  }
  logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.setState({
      list: [],
      user: {},
      token: ""
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signup(this.state)
    .then(() => this.props.history.push('/list'))
  }

  render(){
    return(
      <UserContext.Provider 
        value={{
          getList: this.getList,
          addList: this.addList,
          deleteList: this.deleteList,
          addContact: this.addContact,
          ...this.state,
          signup: this.signup,
          login: this.login,
          logout: this.logout,
        }}
        >
        {this.props.children}
        </UserContext.Provider>
    )
  }
}
export default UserProvider

export const withContext = C => props => (
  <UserContext.Consumer>
    {value => <C {...props}{...value}/>}
  </UserContext.Consumer>
)

