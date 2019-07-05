import React from 'react';
import Username from '../../components/Item/Username';
import Likes from '../../components/Item/Likes';
import DisLikes from '../../components/Item/DisLikes';
import Distance from '../../components/Item/Distance';
import Button from '../../components/Item/Button';
import CurrentPosition from '../../components/Item/CurrentPosition';
import Vehicle from '../../components/Item/Vehicle';
import PickUpTime from '../../components/Item/PickUpTime';
import './ItemClient.css';

class ItemClient extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
      }
    }

  render() {
    return (
      <div className="container-item">
        <div className="item-1">
           <Username/>
           <Likes/>
           <DisLikes/>
           <Distance/>
        </div>
        <div className="item-2">
          <CurrentPosition/>
          <Vehicle/>
        </div>
        <div className="item-2">
          <PickUpTime/>
        </div>
        <div className="btn-item">
          <Button/>
        </div>
      </div>
    );
  }
}

export default ItemClient;