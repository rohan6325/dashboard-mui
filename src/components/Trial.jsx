import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as BarTooltip,
} from 'recharts';
import { LineChart, Line } from 'recharts'; // Import LineChart and Line
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

// CalorieBurnInfographic component
const EmojiSymbol = styled('div')(({ size }) => ({
  fontSize: size,
}));

function CalorieBurnInfographic() {
  const [caloriesBurned, setCaloriesBurned] = useState(0);
  const maxCalories = 1000; // Updated maximum calories to 1000

  const handleCaloriesChange = (event) => {
    setCaloriesBurned(event.target.value);
  };

  // Calculate the size of the emoji symbol based on calories burned
  const emojiSize = `${48 + (caloriesBurned / maxCalories) * 48}px`; // Larger initial size and growth

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Calories Burned: {caloriesBurned} kcal
      </Typography>
      <EmojiSymbol size={emojiSize}>🔥</EmojiSymbol>
      <FormControl>
        <Select
          value={caloriesBurned}
          onChange={handleCaloriesChange}
          variant="outlined"
          displayEmpty
        >
          <MenuItem value={0}>Select Calories Burned</MenuItem>
          <MenuItem value={50}>50 kcal</MenuItem>
          <MenuItem value={100}>100 kcal</MenuItem>
          <MenuItem value={1000}>1000 kcal</MenuItem>
          {/* Add more calorie options as needed */}
        </Select>
      </FormControl>
    </div>
  );
}

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
      <Grid container justifyContent="center" spacing={3}>
        {/* Pie Chart */}
        <Grid item xs={4}>
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
        <Grid item xs={4}>
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
        <Grid item xs={4}>
          <Item>
            <div>
              <LineChart width={300} height={150} data={lineChartDataOptions[lineChartDataIndex].data}>
                <XAxis dataKey="time" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Line type="monotone" dataKey="rate" stroke="#8884d8" />
                {/* You can customize the Line appearance as needed */}
              </LineChart>
            </div>
            <FormControl sx={{ mt: 1 }}>
              <Select
                value={lineChartDataIndex}
                onChange={handleLineChartChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Select Line Chart Dataset' }}
              >
                {lineChartDataOptions.map((option, index) => (
                  <MenuItem key={index} value={index}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Item>
        </Grid>

        {/* Calorie Burn Infographic */}
        <Grid item xs={4}>
          <Item>
            <Paper>
              <CalorieBurnInfographic />
            </Paper>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}