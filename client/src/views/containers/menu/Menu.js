import React from 'react';
import Header from '../../components/menu/Header';
import ItemWallet from '../../components/menu/ItemWallet';
import ItemHistory from '../../components/menu/ItemHistory';
import ItemHome from '../../components/menu/ItemHome';
import ItemLogout from '../../components/menu/ItemLogout';
import './Menu.css';

class Menu extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
      }
    }

  render() {
    return (
      <div className="menu-container">
          <Header/>
          <ItemHome/>
          <ItemWallet/>
          <ItemHistory/>
          <ItemLogout/>
      </div>
    );
  }
}

export default Menu;