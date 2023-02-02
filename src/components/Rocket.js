import React from 'react';
import PropTypes from 'prop-types';
import styles from './Rocket.module.css';

const Rocket = ({ rocket }) => {
  const {
    rocketImage, rocketName, rocketDescription, rocketStatus,
  } = rocket;
  return (
    <div className={styles.rocketItem}>
      <img src={rocketImage} alt={rocketName} />
      <div className={styles.rocketDescription}>
        <h3>{rocketName}</h3>
        <p>
          {rocketStatus && <span className={styles.reservedTag}>Reserved</span>}
          {rocketDescription}
        </p>
        {rocketStatus
          ? <button type="button" className={styles.whiteBag}>Cancel reservation</button>
          : <button type="button" className={styles.blueBag}>Reserve Rocket</button>}
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
      rocketStatus: PropTypes.bool.isRequired,
    },
  ).isRequired,
};

export default Rocket;
