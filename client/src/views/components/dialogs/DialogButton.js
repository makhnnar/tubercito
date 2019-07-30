import React from 'react';


const DialogButton = ({handleClick,text}) => {

	return (
		<div
              className="dialog-btn"
              onClick={handleClick}
              >
            {text}
        </div>
	)
}

export default DialogButton;