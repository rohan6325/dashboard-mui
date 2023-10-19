import React from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import profilePic from '../assets/profile.png';
import illust from '../assets/banner.png'; // Ensure the correct path to the image

const StyledWelcomeBanner = styled('div')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)',
  backgroundImage: `url(${illust})`,
  backgroundSize:'cover'
}));


const UserInfo = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginRight: '20px',
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

function WelcomeBanner({ username, age, weight, height, stride }) {
  return (
    <StyledWelcomeBanner>
      <UserInfo>
        <ProfilePic alt="User Profile" src={profilePic} />
        <PersonalInfo>
          <Typography color={"black"} variant="h4" gutterBottom>
            Welcome Back, {username}!
          </Typography>
          <InfoRow>
            <InfoItem>
              <Typography color={"black"} variant="subtitle1">Age: {age}</Typography>
            </InfoItem>
            <InfoItem>
              <Typography color={"black"} variant="subtitle1">Weight: {weight}</Typography>
            </InfoItem>
          </InfoRow>
          <InfoRow>
            <InfoItem>
              <Typography color={"black"} variant="subtitle1">Height: {height}</Typography>
            </InfoItem>
            <InfoItem>
              <Typography color={"black"} variant="subtitle1">Stride: {stride}</Typography>
            </InfoItem>
          </InfoRow>
        </PersonalInfo>
      </UserInfo>
    </StyledWelcomeBanner>
  );
}

export default WelcomeBanner;
