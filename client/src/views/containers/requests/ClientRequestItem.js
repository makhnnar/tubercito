import React from 'react';
import Username from '../../components/request/Username';
import IconText from '../../components/request/IconText';
import Button from '../../components/request/Button';
import OnlyText from '../../components/request/OnlyText';
import Vehicle from '../../components/request/Vehicle';
import PickUpTime from '../../components/request/PickUpTime';
import './ClientRequestItem.css';

class ClientRequestItem extends React.Component {

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
              <OnlyText/>
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

export default ClientRequestItem;