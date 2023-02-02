import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ rocket }) => {
  const { rocketImage, rocketDescription } = rocket;
  return (
    <div>
      <img src={rocketImage} alt={rocketDescription} />
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape(
    {
      rocketImage: PropTypes.string.isRequired,
      rocketDescription: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default Rocket;
