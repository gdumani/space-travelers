import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './Rocket.module.css';
import { changeRocketReservation } from '../redux/rockets/rockets';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();
  const {
    rocketImage, rocketName, rocketDescription, rocketStatus, rocketId,
  } = rocket;
  return (
    <div className={styles.rocketItem}>
      <img src={rocketImage} alt={rocketName} />
      <div className={styles.rocketDescription}>
        <h3>{rocketName}</h3>
        <p>
          {rocketStatus && <span className={styles.blueBag}>Reserved</span>}
          {rocketDescription}
        </p>
        {rocketStatus
          ? (
            <button type="button" className={styles.whiteBag} onClick={() => { dispatch(changeRocketReservation(rocketId)); }}>
              Cancel reservation
            </button>
          )
          : (
            <button type="button" className={styles.blueBag} onClick={() => { dispatch(changeRocketReservation(rocketId)); }}>
              Reserve Rocket
            </button>
          )}
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
      rocketId: PropTypes.number.isRequired,
    },
  ).isRequired,
};

export default Rocket;
