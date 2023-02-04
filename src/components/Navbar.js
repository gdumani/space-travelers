import React from 'react';
import { Link } from 'react-router-dom';
import planetIcon from '../assets/planet.png';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.container}>
      <img className={styles.logo} src={planetIcon} alt="planet icon" />
      <h1>Space Travelers&apos; Hub</h1>
      <nav>
        <ul className={styles.linksList}>
          <li>
            <Link to="/">Rockets</Link>
          </li>
          <li>
            <Link to="/missions">Missions</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/profile">My profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
