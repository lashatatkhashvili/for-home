import
  React, { Component } from 'react';
import HeaderContentContainer from './headerContent/HeaderContentContainer'

class Header extends Component {
  render() {
    return (
      <header>
        <HeaderContentContainer />
      </header>
    );
  }
}

export default Header;
