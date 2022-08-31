import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import { State } from '../../types/store';
import styles from './main.module.css';

function Main() {
  const isNavbarShown = useSelector((state: State) => state.isNavbarShown);
  return (
    <div className={styles.page}>
      <div
        className={
          isNavbarShown
            ? `${styles.inner} ${styles['navbar-shown']}`
            : styles.inner
        }
      >
        <Navbar />
        <div className={styles.wrapper}>
          <Header />
          <main className={styles.main}>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Main;
