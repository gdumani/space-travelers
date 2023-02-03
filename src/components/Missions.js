import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readMissions, toggleReserve } from '../redux/missions/missions';
import styles from './Missions.module.css';

const Missions = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((store) => store.missionsReducer);

  const updateReservation = (id) => {
    dispatch(toggleReserve(id));
  };

  useEffect(() => {
    if (list.length === 0) {
      dispatch(readMissions());
    }
  }, [list.length, dispatch]);

  return (
    <section>
      <table className={styles.missionsTable}>
        <thead>
          <tr className={styles.tableHeader}>
            <th className={`${styles.headerCell} ${styles.columnShort}`}>Mission</th>
            <th className={`${styles.headerCell} ${styles.columnLarge}`}>Description</th>
            <th className={`${styles.headerCell} ${styles.columnShort}`}>Status</th>
            <th className={`${styles.headerCell} ${styles.columnShort}`}> </th>
          </tr>
        </thead>
        <tbody>
          {list.map((mission) => (
            <tr key={mission.mission_id} className={styles.bodyRow}>
              <td className={`${styles.bodyCell} ${styles.missionCell}`}>
                {mission.mission_name}
              </td>
              <td className={`${styles.bodyCell} ${styles.descriptionCell}`}>
                {mission.description}
              </td>
              <td className={`${styles.bodyCell} ${styles.centeredCell}`}>
                {mission.reserved ? (
                  <span className={styles.activeMember}>Active Member</span>
                ) : (
                  <span className={styles.inactiveMember}>NOT A MEMBER</span>
                )}
              </td>
              <td className={`${styles.bodyCell} ${styles.centeredCell}`}>
                {mission.reserved ? (
                  <button type="button" className={styles.leaveButton} onClick={() => updateReservation(mission.mission_id)}>Leave Mission</button>
                ) : (
                  <button type="button" className={styles.joinButton} onClick={() => updateReservation(mission.mission_id)}>Join Mission</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
