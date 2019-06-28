import React from 'react';
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
        <div className="item-home">
            <ItemHome/>
        </div>
        <div className="item-wallet">
          <ItemWallet/>
        </div>
        <div className="item-history">
          <ItemHistory/>
        </div>
        <div className="item-logout">
          <ItemLogout/>
        </div>
      </div>
    );
  }
}

export default Menu;