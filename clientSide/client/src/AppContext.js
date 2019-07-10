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
      lists: [],
      contacts: [],
      user: JSON.parse(localStorage.getItem('user')) || {},
      token: localStorage.getItem('token') || "",
      feed: []
    }
  }
// instagram feed 
  getInsta = () => {
    // console.log(111)
    return axios.get('/feed')
    .then(response => {
      console.log(response, 111)
        this.setState({feed: response.data.data});
      })
  }
// listing information -get/post/put/delete
  // getList = () => {
  //   console.log("show my listings")
  //   return listAxios.get('/api/list')
  //     .then(response => {
  //       // console.log(response)
  //       this.setState({ lists: response.data});
  //       return response;
  //     })
  // }
  // addList = (newList) => {
  //   console.log('fired')
  //   return listAxios.post('/api/list', newList)
  //     .then(response => {
  //       this.setState(prevState => {
  //         return { lists: [...prevState.lists, response.data]}
  //       });
  //       return response;
  //     })
  // }
  // deleteList = (listId) => {
  //   return listAxios.put(`/api/list/${listId}`)
  //     .then( response => {
  //       this.setState(prevState => {
  //         const updatedList = prevState.lists.filter(list => {
  //           return list._id !== listId
  //         })
  //         return { lists: updatedList}
  //       })
  //       return response;
  //     })
  //  }
  //  contact us information -get/post/delete
   getContact = () => {
    // console.log("hello")
     return axios.get('/contact')
      .then(response => {
        this.setState({contacts: response.data})
        // console.log(this.state.contacts)
        return response;
      })
   }
 
  addContact = (savedContact) => {
    return axios.post('/contact', savedContact)
      .then(res => {
        this.setState(prevState => {
          return { contacts: [...prevState.contacts, res.data]}
        });
        return res.data;
    })
  }
  editContact = (_id, updateContact) => {
    return axios.post(`/contact${_id}`, updateContact)
      .then(res => {
        this.setState(prevState => ({
          contacts: prevState.contacts.map(contact => contact._id === _id ? contact = res.data : contact )
        }) 
        )
    })
  }
  deleteContact =(contactId) => {
    console.log("deleteme!")
    return axios.delete(`/contact/${contactId}`)
      .then(response => {
        console.log("fired!")
        this.setState(prevState => {
          const updateContact = prevState.contacts.filter(contact => {
            return contact._id !== contactId
          })
          return {contacts: updateContact}
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
    return (
      <UserContext.Provider 
        value={{
          getList: this.getList,
          addList: this.addList,
          deleteList: this.deleteList,
          getContact: this.getContact,
          addContact: this.addContact,
          editContact: this.editContact,
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

export default UserProvider;

export const withContext = C => props => (
  <UserContext.Consumer>
    {value => <C {...props}{...value}/>}
  </UserContext.Consumer>
)

