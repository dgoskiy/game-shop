import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { useSearchParams } from 'react-router-dom';
import s from './index.module.css';

const MainLayout = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className={s.content}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
