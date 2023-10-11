import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as BarTooltip } from 'recharts';
import { LineChart, Line } from 'recharts';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import CalorieBurnInfographic from './Calories';
import LineCht from './LineCht';

// Define LineCht component and pass props


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
}));

export default function FitnessDataVisualization() {
  const [pieChartDataIndex, setPieChartDataIndex] = useState(0);
  const [barChartDataIndex, setBarChartDataIndex] = useState(0);
  const [lineChartDataIndex, setLineChartDataIndex] = useState(0);

  const pieChartDataOptions = [
    {
      label: 'Dataset 1',
      data: [
        { name: 'A', value: 25 },
        { name: 'B', value: 45 },
        { name: 'C', value: 30 },
      ],
    },
    {
      label: 'Dataset 2',
      data: [
        { name: 'X', value: 10 },
        { name: 'Y', value: 20 },
        { name: 'Z', value: 15 },
      ],
    },
    // Add more datasets as needed
  ];

  const barChartDataOptions = [
    {
      label: 'Data 1',
      data: [
        { category: 'Category 1', value: 10 },
        { category: 'Category 2', value: 20 },
        { category: 'Category 3', value: 15 },
        { category: 'Category 4', value: 25 },
      ],
    },
    {
      label: 'Data 2',
      data: [
        { category: 'Category A', value: 12 },
        { category: 'Category B', value: 18 },
        { category: 'Category C', value: 14 },
        { category: 'Category D', value: 22 },
      ],
    },
    // Add more datasets as needed
  ];

  const lineChartDataOptions = [
    {
      label: 'Heart Rate',
      data: [
        { time: '00:00', rate: 70 },
        { time: '01:00', rate: 72 },
        { time: '02:00', rate: 75 },
        { time: '03:00', rate: 78 },
        { time: '04:00', rate: 80 },
        // Add more heart rate data points as needed
      ],
    },
    // Add more line chart datasets as needed
  ];

  const handlePieChartChange = (event) => {
    setPieChartDataIndex(event.target.value);
  };

  const handleBarChartChange = (event) => {
    setBarChartDataIndex(event.target.value);
  };

  const handleLineChartChange = (event) => {
    setLineChartDataIndex(event.target.value);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={3}>
        {/* Pie Chart */}
        <Grid item xs={12} sm={6} md={6}>
          <Item>
            <div>
              <PieChart width={150} height={150}>
                <Pie
                  dataKey="value"
                  data={pieChartDataOptions[pieChartDataIndex].data}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={60}
                  fill="#8884d8"
                  startAngle={90}
                  endAngle={-270}
                >
                  {pieChartDataOptions[pieChartDataIndex].data.map((entry, i) => (
                    <Cell key={i} fill={`#${(Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6)}`} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
            <FormControl sx={{ mt: 1 }}>
              <Select
                value={pieChartDataIndex}
                onChange={handlePieChartChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Select Pie Chart Dataset' }}
              >
                {pieChartDataOptions.map((option, index) => (
                  <MenuItem key={index} value={index}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Item>
        </Grid>

        {/* Bar Chart */}
        <Grid item xs={12} sm={6} md={6}>
          <Item>
            <div>
              <BarChart width={150} height={150} data={barChartDataOptions[barChartDataIndex].data}>
                <XAxis dataKey="category" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="value" fill="#8884d8" />
                <BarTooltip />
              </BarChart>
            </div>
            <FormControl sx={{ mt: 1 }}>
              <Select
                value={barChartDataIndex}
                onChange={handleBarChartChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Select Bar Chart Dataset' }}
              >
                {barChartDataOptions.map((option, index) => (
                  <MenuItem key={index} value={index}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Item>
        </Grid>

        {/* Line Chart */}
        <Grid item xs={12} sm={6} md={6}>
          <Item>
            {/* Render the LineCht (Line Chart) component */}
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
            {/* Render the CalorieBurnInfographic component */}
            <CalorieBurnInfographic />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
