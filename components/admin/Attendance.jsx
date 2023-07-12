"use client"

import React, { useEffect, useState } from 'react';

function Attendance() {
  const [users, setUsers] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/user?limit=35');
        if (response.ok) {
          const data = await response.json();
          setUsers(data.data);
        } else {
          console.log('Error in fetching users');
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleToggleAllSub = (e) => {
    const subCheckboxes = e.target.closest('.individualData').querySelectorAll('input[name^="sub"]');
    subCheckboxes.forEach((checkbox) => {
      checkbox.checked = !checkbox.checked;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const wholeData = Array.from(
      document.getElementById('attendanceData').querySelectorAll('.individualData')
    ).map((div) => {
      const jsonSample = {
        date: selectedDate,
        id: div.getAttribute('value'),
        sub1: div.querySelector('input[name="sub1"]').checked,
        sub2: div.querySelector('input[name="sub2"]').checked,
        sub3: div.querySelector('input[name="sub3"]').checked,
        sub4: div.querySelector('input[name="sub4"]').checked,
        sub5: div.querySelector('input[name="sub5"]').checked,
      };

      return jsonSample;
    });

    try {
      setLoading(true);
      const response = await fetch('/api/attendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(wholeData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Response:', data);
        console.log('Data is successfully updated.');
      } else {
        console.log('Error in updating data.');
      }
    } catch (error) {
      console.log('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form id="attendanceData" onSubmit={handleSubmit}>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      {users.map((items, index) => (
        <div  className="individualData" value={items.id} key={index}>
          <div>{items.name}</div>

          <input type="checkbox" name="sub1" id="sub1" />
          <input type="checkbox" name="sub2" id="sub2" />
          <input type="checkbox" name="sub3" id="sub3" />
          <input type="checkbox" name="sub4" id="sub4" />
          <input type="checkbox" name="sub5" id="sub5" />
          <button className="btn" type="button" onClick={handleToggleAllSub}>
            Toggle All Sub
          </button>
        </div>
      ))}
      <button className="btn" type="submit" disabled={loading}>
        {loading ? 'Updating...' : 'Update'}
      </button>
    </form>
  );
}

export default Attendance;
