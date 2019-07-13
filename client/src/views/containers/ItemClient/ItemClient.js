import React from 'react';
import Username from '../../components/Item/Username';
import IconText from '../../components/Item/IconText';
import Button from '../../components/Item/Button';
import CurrentPosition from '../../components/Item/CurrentPosition';
import Vehicle from '../../components/Item/Vehicle';
import PickUpTime from '../../components/Item/PickUpTime';
import './ItemClient.css';

class ItemClient extends React.Component {

    constructor(props){
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
              <CurrentPosition/>
              <Vehicle/>
            </div>
            <div className="item-212">
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

export default ItemClient;