import React from 'react';

const Send = ({handleClick}) => {

	return (
		<button
              type="submit"
              className="message-btn"
              onClick={handleClick}
              >
            Send
        </button>
	)
}

export default Send;