import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Profile.module.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const reserved = rockets.filter((rocket) => rocket.rocketStatus);
  const missionsList = useSelector((store) => store.missionsReducer).list;

  return (
    <div className={styles.wrapper}>
      <table className={styles.profileTable}>
        <thead>
          <tr>
            <th><h2>My Missions</h2></th>
          </tr>
        </thead>
        <tbody>
          {missionsList.filter((mission) => mission.reserved === true).map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className={styles.profileTable}>
        <tbody>
          <tr>
            <th><h2>My Rockets</h2></th>
          </tr>
          {reserved.map((rocket) => (
            <tr key={rocket.rocketId}>
              <td>{rocket.rocketName}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
};
export default Profile;
