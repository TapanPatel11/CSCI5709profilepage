import React from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';


const ProfilePage = () => {
  const params = useParams();

  
  return (
    <div>
      {/* <p>First Name: {params.firstName}</p>
      <p>Last Name: {params.lastName}</p> */}


      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Profile Page
      </Typography>
        <TextField
          label="First Name"
          variant="outlined"
          value={params.firstName}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          value={params.lastName}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Email"
          variant="outlined"
          value={params.email}
          sx={{ mb: 2 }}
        />
       
      
    </Box>
    </div>
  );
};

export default ProfilePage;
