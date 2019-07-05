import React from 'react';
import Username from '../../components/Item/Username';
import Likes from '../../components/Item/Likes';
import DisLikes from '../../components/Item/DisLikes';
import Distance from '../../components/Item/Distance';
import Button from '../../components/Item/Button';
import DestinationUser from '../../components/Item/DestinationUser';
import TravelTime from '../../components/Item/TravelTime';
import OriginUser from '../../components/Item/OriginUser';
import PickUpTime from '../../components/Item/PickUpTime';
import './ItemDriver.css';

class ItemDriver extends React.Component {

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

export default ItemDriver;