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
      Select Date: <input type="date" value={selectedDate} onChange={handleDateChange} />

      {attendanceData ? (
     
   <>

   <div className="att-display">

    <div className="att-head">
      <div className="att-item">Name</div>
      <div className="att-item">SUB1</div>
      <div className="att-item">SUB2</div>
      <div className="att-item">SUB3</div>
      <div className="att-item">SUB4</div>
      <div className="att-item">SUB5</div>
   
    </div>

              {attendanceData.data.map((item, index) => (
    <div className="att-head">
             
                <div className="att-item">{getNameById(item.id)}</div>
                <div className="att-item">{item.sub1 ? 'P' : 'A'}</div>
                <div className="att-item">{item.sub2 ? 'P' : 'A'}</div>
                <div className="att-item">{item.sub3 ? 'P' : 'A'}</div>
                <div className="att-item">{item.sub4 ? 'P' : 'A'}</div>
                <div className="att-item">{item.sub5 ? 'P' : 'A'}</div> 
   
    </div>
            ))}




    
   </div>

            </>
     
      ) : (
        <div>No attendance data available</div>
      )}
    </div>
  );
}

export default Attendance;
