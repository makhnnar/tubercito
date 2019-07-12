import React from 'react';
import Username from '../../components/Item/Username';
import IconText from '../../components/Item/IconText';
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
           <IconText/>
           <IconText/>
           <IconText/>
        </div>
        <div className="item-2">
          <div className="item-21">
            <div className="item-211">
              <DestinationUser/>
              <OriginUser/>
            </div>
            <div className="item-212">
              <TravelTime/>
              <PickUpTime/>
            </div>
          </div>
          <div className="btn-item">
            <Button/>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemDriver;