import React from 'react';


const ItemWallet = ({handleClick}) => {

	return (
		<div
              type="submit"
              className="menu-btn"
              onClick={handleClick}
              >
            Wallet
        </div>
	)
}

export default ItemWallet;