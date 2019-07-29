import React from 'react';

const RecordAudio = ({handleClick}) => {

	return (
		<button
              type="submit"
              className="home-btn"
              onClick={handleClick}
              >
            Record Audio
        </button>
	)
}

export default RecordAudio;