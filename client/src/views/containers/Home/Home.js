import React from 'react';
import Username from '../../components/request/Username';
import CurrentPosition from '../../components/request/CurrentPosition';
import PanicButton from '../../components/forms/PanicButton';
import TravelTime from '../../components/request/TravelTime';
import OnlyText from '../../components/forms/OnlyText';
import RecordAudio from '../../components/forms/RecordAudio';
import './Home.css';

class Home extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
      }
    }

  render() {
    return (
      <div className="container-home">
        <div className="home-1">
           <Username/>
        </div>
        <div className="home-2">
          <OnlyText/>
          <OnlyText/>
        </div>

        <div className="home-3">
          <CurrentPosition/>
          <TravelTime/>
        </div>

        <div className="btn-home">
          <PanicButton/>
          <RecordAudio/>
        </div>
      </div>
    );
  }
}

export default Home;