import React, { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import WelcomeBanner from './Welcome';
import PieC from './PieC';
import BarC from './BarC';
import LineCht from './LineCht';
import CalorieBurnInfographic from './Calories';
import { pieChartDataOptions, barChartDataOptions, lineChartDataOptions } from './data';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3498db',
    },
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)', // Adjust the values for a 3D effect
}));


export default function FitnessDataVisualization() {
  const [pieChartDataIndex, setPieChartDataIndex] = useState(0);
  const [barChartDataIndex, setBarChartDataIndex] = useState(0);
  const [lineChartDataIndex, setLineChartDataIndex] = useState(0);

  const handlePieChartChange = (event) => {
    setPieChartDataIndex(event.target.value);
  };

  const handleBarChartChange = (event) => {
    setBarChartDataIndex(event.target.value);
  };

  const handleLineChartChange = (event) => {
    setLineChartDataIndex(event.target.value);
  };

  const userPersonalInfo = {
    username: 'Rohan',
    age: 30,
    weight: '70 kg',
    height: '175 cm',
    stride: '65 cm',
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%' }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <WelcomeBanner
              username={userPersonalInfo.username}
              age={userPersonalInfo.age}
              weight={userPersonalInfo.weight}
              height={userPersonalInfo.height}
              stride={userPersonalInfo.stride}
            />
          </Grid>

          {/* Pie Chart */}
          <Grid item xs={12} sm={6} md={6}>
            <Item>
              <PieC
                data={pieChartDataOptions}
                onChange={handlePieChartChange}
                selectedIndex={pieChartDataIndex}
              />
            </Item>
          </Grid>

          {/* Bar Chart */}
          <Grid item xs={12} sm={6} md={6}>
            <Item>
              <BarC
                data={barChartDataOptions}
                onChange={handleBarChartChange}
                selectedIndex={barChartDataIndex}
              />
            </Item>
          </Grid>

          {/* Line Chart */}
          <Grid item xs={12} sm={6} md={6}>
            <Item>
              <LineCht
                lineChartDataOptions={lineChartDataOptions}
                handleLineChartChange={handleLineChartChange}
                lineChartDataIndex={lineChartDataIndex}
              />
            </Item>
          </Grid>

          {/* CalorieBurnInfographic */}
          <Grid item xs={12} sm={6} md={6}>
            <Item>
              <CalorieBurnInfographic />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
