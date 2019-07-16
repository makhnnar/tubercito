import React from 'react';
import Username from '../../components/Item/Username';
import DestinationUser from '../../components/Item/DestinationUser';
import OriginUser from '../../components/Item/OriginUser';
import PickUpTime from '../../components/Item/PickUpTime';
import IconText from '../../components/Item/IconText';
import MyMessage from '../../components/forms/MyMessage';
import Send from '../../components/forms/Send';
import './Chat.css';

class Chat extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
      }
    }

  render() {
    return (
      <div className="chat-container">
        <div className="data-information">
            <Username/>
            <IconText/>
            <IconText/>
            <IconText/>
        </div>
        <div className="vist-chat">
          vist-chat
        </div>
        <div className="chat-3">
         <MyMessage/>
         <Send/>
        </div>
      </div>
    );
  }
}

export default Chat;