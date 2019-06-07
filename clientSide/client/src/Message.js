import React from 'react';
import Form from './Contact';
import Us from './Us';
import { withContext } from './AppContext';
import './message.css';

class Message extends React.Component{
render(){
  return(
    <div className="rowC">
    <Form />
    <Us />
    </div>
  );
}
}
export default withContext(Message)