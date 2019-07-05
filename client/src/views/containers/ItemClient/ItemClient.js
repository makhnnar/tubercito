import React from 'react';
import Username from '../../components/ItemClient/Username';
import Likes from '../../components/ItemClient/Likes';
import DisLikes from '../../components/ItemClient/DisLikes';
import Distance from '../../components/ItemClient/Distance';
import Button from '../../components/ItemClient/Button';
import DestinationUser from '../../components/ItemClient/DestinationUser';
import TravelTime from '../../components/ItemClient/TravelTime';
import OriginUser from '../../components/ItemClient/OriginUser';
import PickUpTime from '../../components/ItemClient/PickUpTime';
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
          <DestinationUser/>
          <OriginUser/>
        </div>
        <div className="item-2">
          <TravelTime/>
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