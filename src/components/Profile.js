import React from 'react';
import styles from './Profile.module.css';

const Profile = () => (
  <div className={styles.wrapper}>
    <table className={styles.profileTable}>
      <tbody>
        <tr>
          <th><h2>My Missions</h2></th>
        </tr>
      </tbody>
    </table>
    <table className={styles.profileTable}>
      <tbody>
        <tr>
          <th><h2>My Rockets</h2></th>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Profile;
