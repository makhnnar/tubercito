import React from 'react';
import Username from '../../components/request/Username';
import DestinationUser from '../../components/request/DestinationUser';
import OriginUser from '../../components/request/OriginUser';
import PickUpTime from '../../components/request/PickUpTime';
import IconText from '../../components/request/IconText';
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