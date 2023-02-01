import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { readMissions } from '../redux/missions';
import styles from './Missions.module.css';

const Missions = () => {
  const dispatch = useDispatch();
  const data = [
    {
      id: '1',
      mission_name: 'Mission 1',
      description: 'This is a description 1',
    },
    {
      id: '2',
      mission_name: 'Mission 2',
      description: 'This is a description 2',
    },
    {
      id: '3',
      mission_name: 'Mission 3',
      description: 'This is a description 3',
    },
    {
      id: '4',
      mission_name: 'Mission 4',
      description: 'This is a description 4',
    },
  ];

  useEffect(() => {
    dispatch(readMissions());
  }, []);

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
          {data.map((mission) => (
            <tr key={mission.id} className={styles.bodyRow}>
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
