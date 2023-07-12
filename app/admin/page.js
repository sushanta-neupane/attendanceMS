"use client"
import React, { useState } from 'react';
import Admin from '@/components/admin/Admin';
import User from '@/components/admin/User';
import Notices from '@/components/admin/Notices';
import Attendance from '@/components/admin/Attendance';

function Page() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentChange = (event) => {
    setSelectedComponent(event.target.value);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'notices':
        return <Notices />;
      case 'attendance':
        return <Attendance />;
      case 'user':
        return <User />;
      case 'admin':
        return <Admin />;
      default:
        return null;
    }
  };

  return (
    <div className="main-container">
      <select onChange={handleComponentChange}>
        <option value="">Select Component</option>
        <option value="notices">Notices</option>
        <option value="attendance">Attendance</option>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      {renderComponent()}
    </div>
  );
}

export default Page;