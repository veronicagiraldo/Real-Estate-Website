import React from 'react';
import { StickyContainer, Sticky} from 'react-sticky';
import { withContext } from './AppContext';
import './navbar.css';

class NavbarTwo extends React.Component{
  render(){
    return(
      <StickyContainer>
        <Sticky>

        </Sticky>


      </StickyContainer>
    )
  }
}
export default withContext(NavbarTwo);