import React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

// Define styles for the WelcomeBanner
const StyledWelcomeBanner = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main, // Set background color
  color: theme.palette.primary.contrastText, // Set text color
  padding: theme.spacing(2),
  textAlign: 'center',
  borderRadius: theme.spacing(1), // Add border radius
}));

function WelcomeBanner({ username }) {
  return (
    <StyledWelcomeBanner variant="h4" gutterBottom>
      Welcome Back, {username}!
    </StyledWelcomeBanner>
  );
}

export default WelcomeBanner;
