import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ rocket }) => {
  const { rocketImage, rocketName, rocketDescription } = rocket;
  return (
    <div>
      <img src={rocketImage} alt={rocketName} />
      <h2>{rocketName}</h2>
      <p>{rocketDescription}</p>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape(
    {
      rocketImage: PropTypes.string.isRequired,
      rocketName: PropTypes.string.isRequired,
      rocketDescription: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default Rocket;
