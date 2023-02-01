import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readMissions } from '../redux/missions/missions';
import styles from './Missions.module.css';

const Missions = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((store) => store.missionsReducer);

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
            <th className={styles.headerCell}>Mission</th>
            <th className={styles.headerCell}>Description</th>
            <th className={styles.headerCell}>Status</th>
            <th className={styles.headerCell}> </th>
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
                <span className={styles.status}>Active Member</span>
              </td>
              <td className={`${styles.bodyCell} ${styles.centeredCell}`}>
                <button type="button" className={styles.tableButton}>Leave Mission</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
