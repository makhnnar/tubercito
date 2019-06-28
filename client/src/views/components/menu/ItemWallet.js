import React from 'react';


const ItemWallet = ({handleClick}) => {

	return (
		<button
              type="submit"
              className="menu-btn"
              onClick={handleClick}
              >
            Wallet
        </button>
	)
}

export default ItemWallet;