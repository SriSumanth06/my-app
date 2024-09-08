// src/Home.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Calendar from 'react-calendar';
import './Calander.css';
import './Home.css';
import 'react-calendar/dist/Calendar.css'; // Import default styles
import NavbarComponent from './Navbar';
//import Statstic from './Statistic'; // Assuming this component exists for displaying statistics

function Home() {
  const meetings = [
    { time: '10:00 AM', event: 'Meeting with Marketing', date: 'August 30, 2024' },
    { time: '2:00 PM', event: 'Project Review', date: 'August 31, 2024' },
    { time: '9:00 AM', event: 'Team Standup', date: 'September 1, 2024' },
  ];

  return (
    <div className='bg-container'>
      <NavbarComponent />

      <div className='row'>
        <div className='col-md-12'>
          <div className='welcome-card'>
            <h2>Welcome Back!</h2>
            <p>Here’s a quick look at your tasks for today.</p>
            <button className='btn btn-primary'>Today's Tasks <i className="fas fa-arrow-right"></i></button>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-6'>
          <div className='calendar'>
            <h2>Calendar</h2>
            <Calendar
              // Use inline styling for size adjustments if necessary
              style={{ width: '100%', maxWidth: '350px' }}
            />
          </div>
        </div>

        <div className='col-md-6'>
          <div className='schedule-container'>
            <h2>Today's Schedule</h2>
            <ul className='schedule-list'>
              {meetings.map((meeting, index) => (
                <li key={index}>
                  <strong>{meeting.time}</strong> - {meeting.event} on {meeting.date}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </div>
   
  );
}

export default Home;
