import React from 'react';
import './dashboard.css';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import { Conversations } from '../conversation/conversation';

export const Dashboard = () => (
  <div className="dashboard">
    <div className="dashboard-card">
      <div className="dashboard-sidebar">
        <div className="sidebar-header-row">
          <span className="sidebar-header">Chats</span>
          <LogoutIcon className="sidebar-logout-icon" fontSize="medium" />
        </div>
        <div className="sidebar-search-row">
          <input className="sidebar-search" placeholder="Search" />
          <button className="sidebar-search-btn" title="Search">
            <SearchIcon />
          </button>
        </div>
        <Conversations />
      </div>
      <div className="dashboard-main"></div>
    </div>
  </div>
);
