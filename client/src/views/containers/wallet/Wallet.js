import React from 'react';
import Balance from '../../components/Wallet/Balance';
import Transfer from '../../components/Wallet/Transfer';
import Deposit from '../../components/Wallet/Deposit';
import Withdraw from '../../components/Wallet/Withdraw';
import './Wallet.css';

class Wallet extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
      }
    }

  render() {
    return (
      <div className="wallet-container">
        <div className="balance-cont">
          <Balance/>
        </div>
        <div className="cont-1">
         <Transfer/>
         <Deposit/>
         <Withdraw/>
        </div>
      </div>
    );
  }
}

export default Wallet;