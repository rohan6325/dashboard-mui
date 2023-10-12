import React from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';

const StyledWelcomeBanner = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)',
}));

const UserInfo = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginRight: '20px', // Add spacing between sections
});

const ProfilePic = styled(Avatar)(({ theme }) => ({
  width: '100px',
  height: '100px',
}));

const PersonalInfo = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const InfoRow = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: theme.spacing(1),
}));

const InfoItem = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  flex: 1,
}));

function WelcomeBanner({ username, age, weight, height, stride, profilePic }) {
  return (
    <StyledWelcomeBanner>
      <UserInfo>
        <ProfilePic alt="User Profile" src={profilePic} />
        <PersonalInfo>
          <Typography variant="h4" gutterBottom>
            Welcome Back, {username}!
          </Typography>
          <InfoRow>
            <InfoItem>
              <Typography variant="subtitle1">
                Age: {age}
              </Typography>
            </InfoItem>
            <InfoItem>
              <Typography variant="subtitle1">
                Weight: {weight}
              </Typography>
            </InfoItem>
          </InfoRow>
          <InfoRow>
            <InfoItem>
              <Typography variant="subtitle1">
                Height: {height}
              </Typography>
            </InfoItem>
            <InfoItem>
              <Typography variant="subtitle1">
                Stride: {stride}
              </Typography>
            </InfoItem>
          </InfoRow>
        </PersonalInfo>
      </UserInfo>
    </StyledWelcomeBanner>
  );
}

export default WelcomeBanner;
