import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotificationsPage } from './pages/Notifications';
import { LoginPage } from './pages/Login';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/notifications" element={<NotificationsPage />} />
    </Routes>
  );
}

export { Router };
