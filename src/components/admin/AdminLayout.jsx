import React from 'react';
import AdminSidebar from './AdminSidebar.jsx';
import AdminHeader from './AdminHeader.jsx';

const AdminLayout = ({ children, currentPage, onNavigate, onLogout }) => {
  return (
    <div className="min-h-screen flex">
      <AdminSidebar currentPage={currentPage} onNavigate={onNavigate} />
      <div className="flex-1">
        <AdminHeader currentPage={currentPage} onLogout={onLogout} />
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;