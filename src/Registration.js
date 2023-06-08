import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
    // Perform registration logic here
  };

  return (
    <form onSubmit={handleSubmit}>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          variant="filled"
        />
      <TextField
        label="First Name"
        value={firstName}
        onChange={handleFirstNameChange}
        required
        inputProps={{ pattern: '[A-Za-z]+' }}
      />

      <TextField
        label="Last Name"
        value={lastName}
        onChange={handleLastNameChange}
        required
        inputProps={{ pattern: '[A-Za-z]+' }}
      />

      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        fullWidth
        required
      />

      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        fullWidth
        required
        inputProps={{ minLength: 8 }}
      />

      <TextField
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        fullWidth
        required
        inputProps={{ minLength: 8, pattern: password }}
      />

      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </form>
  );
};

export default RegistrationForm;
