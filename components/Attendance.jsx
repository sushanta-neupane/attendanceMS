"use client"
import React, { useState, useEffect } from 'react';

function Attendance() {
  const [selectedDate, setSelectedDate] = useState('');
  const [attendanceData, setAttendanceData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user');
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.log('Error fetching user data');
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleDateChange = async (e) => {
    const date = e.target.value;
    setSelectedDate(date);

    try {
      // Fetch attendance data for the selected date
      const response = await fetch(`/api/attendance?date=${date}`);
      if (response.ok) {
        const data = await response.json();
        setAttendanceData(data);
      } else {
        console.log('Error fetching attendance data');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const getNameById = (id) => {
    if (userData && userData.data) {
      const user = userData.data.find((item) => item.id === id);
      return user ? user.name : '';
    }
    return '';
  };

  return (
    <div className="attendance main-container">
      <input type="date" value={selectedDate} onChange={handleDateChange} />

      {attendanceData ? (
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Sub1</th>
              <th>Sub2</th>
              <th>Sub3</th>
              <th>Sub4</th>
              <th>Sub5</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.data.map((item, index) => (
              <tr key={index}>
                <td>{getNameById(item.id)}</td>
                <td>{item.sub1 ? 'P' : 'A'}</td>
                <td>{item.sub2 ? 'P' : 'A'}</td>
                <td>{item.sub3 ? 'P' : 'A'}</td>
                <td>{item.sub4 ? 'P' : 'A'}</td>
                <td>{item.sub5 ? 'P' : 'A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No attendance data available</div>
      )}
    </div>
  );
}

export default Attendance;
