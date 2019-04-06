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
      token: localStorage.getItem('token') || "",
      feed: []
    }
  }

  getInsta = () => {
    return axios.get('/feed')
      .then(response => {
        this.setState({feed: response.data.data});
      })
  }

  getList = () => {
    return listAxios.get('/api/list')
      .then(response => {
        this.setState({ list: response.data});
        return response;
      })
  }
  addList = (newList) => {
    return listAxios.post('/api/list', newList)
      .then(response => {
        this.setState(prevState => {
          return { list: [...prevState.list, response.data]}
        });
        return response;
      })
  }

  deleteList = (listId) => {
    return listAxios.put(`/api/list/${listId}`)
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
   getContact = () => {
    // console.log("hello")
     return axios.get('/contact')
      .then(response => {
        this.setState({contact: response.data})
        return response;
      })
   }
 
  addContact = (savedContact) => {
    return axios.post('/contact', savedContact)
      .then(res => {
        this.setState(prevState => {
          return { contact: [...prevState.contact, res.data]}
        });
        return res.data;
    })
  }
  deleteContact =(contactId) => {
    return axios.delete(`/contact/${contactId}`)
      .then(response => {
        this.setState(prevState => {
          const updateContact = prevState.contact.filer(contact => {
            return contact._id !== contactId
          })
          return {contact: updateContact}
        })
        return response;
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
          getContact: this.getContact,
          addContact: this.addContact,
          deleteContact: this.deleteContact,
          getInsta: this.getInsta,
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

