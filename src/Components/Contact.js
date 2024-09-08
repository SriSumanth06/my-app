import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import employees from './Employee Data';
import style from './Contact.css';

const CardContainer = styled('div')({
  padding: '16px',
  textAlign: 'center',
  height: '100%',
  backgroundColor: '#f0f0f0', // Light gray background for cards
  margin: '0.5px',
});

const ContactPage = () => {
  return (
    <div style={{ padding: '16px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        <h1>Contact Page</h1>
      </Typography>
      
      {/* Grid layout for address, phone, and email cards */}
      <Grid container spacing={3} style={{ marginBottom: '20px' }}>
        {renderAddressCard()}
        {renderPhoneCard()}
        {renderEmailCard()}
      </Grid>

      {/* Table displaying employee information */}
      <Typography variant="h4" align="center" gutterBottom>
        <h1>Employee Information</h1>
      </Typography>
      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Place of Work</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.phoneNumber}</td>
              <td>{employee.email}</td>
              <td>{employee.designation}</td>
              <td>{employee.placeOfWork}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Function to render address card
function renderAddressCard() {
  return (
    <Grid item xs={12} sm={4}>
      <CardContainer>
        <Paper elevation={3}>
          <Typography variant="h5" gutterBottom>
           Address
          </Typography>
          <Typography>
            123 Main St, <br />
            Washington DC USA, ISO Code: 3166 
          </Typography>
        </Paper>
      </CardContainer>
    </Grid>
  );
}

// Function to render phone card
function renderPhoneCard() {
  return (
    <Grid item xs={12} sm={4}>
      <CardContainer>
        <Paper elevation={3}>
          <Typography variant="h5" gutterBottom>
            Phone
          </Typography>
          <Typography>
            +1 234 567 890 <br />
            +1 234 567 891
          </Typography>
        </Paper>
      </CardContainer>
    </Grid>
  );
}

// Function to render email card
function renderEmailCard() {
  return (
    <Grid item xs={12} sm={4}>
      <CardContainer>
        <Paper elevation={3}>
          <Typography variant="h5" gutterBottom>
            Email
          </Typography>
          <Typography>
            learnid_info@example.com <br />
            support_learnid@example.com
          </Typography>
        </Paper>
      </CardContainer>
    </Grid>
  );
}

export default ContactPage;

