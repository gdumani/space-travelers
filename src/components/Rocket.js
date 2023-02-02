import React from 'react';
import PropTypes from 'prop-types';
import styles from './Rocket.module.css';

const Rocket = ({ rocket }) => {
  const { rocketImage, rocketName, rocketDescription } = rocket;
  return (
    <div className={styles.rocketItem}>
      <img src={rocketImage} alt={rocketName} />
      <div className={styles.rocketDescription}>
        <h3>{rocketName}</h3>
        <p>{rocketDescription}</p>
      </div>
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
