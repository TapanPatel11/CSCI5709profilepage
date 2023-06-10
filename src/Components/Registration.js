import React, { useState } from 'react';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import { TextField, Button, Grid, Box } from '@mui/material';
import { AccountCircle, Email, Lock } from '@mui/icons-material';

const RegistrationForm = () => {

  const navigeteToProfilePage = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    if (password !== confirmPassword) {
      setPasswordError(true);
    } else {
      navigeteToProfilePage(`/profilePage/${firstName}/${lastName}/${email}`);
    }
    };

  return (
    <div>    
    <form onSubmit={handleSubmit} >
       <h1>Registration Page</h1>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <TextField
            label="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
            required
            inputProps={{ pattern: '[A-Za-z]+' }}
            fullWidth
            size="small"
            margin="normal"
            InputProps={{
              startAdornment: <AccountCircle />,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
            required
            inputProps={{ pattern: '[A-Za-z]+' }}
            fullWidth
            size="small"
            margin="normal"
            InputProps={{
              startAdornment: <AccountCircle />,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            fullWidth
            size="small"
            margin="normal"
            InputProps={{
              startAdornment: <Email />,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
            fullWidth
            size="small"
            margin="normal"
            inputProps={{
    pattern: "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$",
  }}
            InputProps={{
              startAdornment: <Lock />,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
            fullWidth
            size="small"
            margin="normal"
            helperText={passwordError ? "Passwords do not match" : ""}
            error={passwordError}
            inputProps={{
              pattern: "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$",
            }}
            InputProps={{
              startAdornment: <Lock />,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit"  variant="contained" color="primary">
            Register
          </Button>
        </Grid>
      </Grid>
    </form>
    </div>

       
     
  );
};

export default RegistrationForm;
