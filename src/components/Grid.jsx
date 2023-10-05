import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as BarTooltip } from 'recharts';
import { LineChart, Line } from 'recharts'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

/*const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Comp() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} md={6}>
          <Item></Item>
          <PieChart
  series={[
    {
      data: data,
      innerRadius: 30,
      outerRadius: 100,
      paddingAngle: 5,
      cornerRadius: 5,
      startAngle: -90,
      endAngle: 180,
      cx: 150,
      cy: 150,
    }
  ]}
/>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <PieChart
  series={[
    {
      data: data,
      innerRadius: 30,
      outerRadius: 100,
      paddingAngle: 5,
      cornerRadius: 5,
      startAngle: -90,
      endAngle: 180,
      cx: 150,
      cy: 150,
    }
  ]}
/>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
        <PieChart
  series={[
    {
      data: data,
      innerRadius: 30,
      outerRadius: 100,
      paddingAngle: 5,
      cornerRadius: 5,
      startAngle: -90,
      endAngle: 180,
      cx: 150,
      cy: 150,
    }
  ]}
/>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
        <PieChart
  series={[
    {
      data: data,
      innerRadius: 30,
      outerRadius: 100,
      paddingAngle: 5,
      cornerRadius: 5,
      startAngle: -90,
      endAngle: 180,
      cx: 150,
      cy: 150,
    }
  ]}
/>
        </Grid>
      </Grid>
    </Box>
  );
}*/



/*const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  // Sample data for pie charts
  const pieChartData = [
    { name: 'A', value: 25 },
    { name: 'B', value: 45 },
    { name: 'C', value: 30 },
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {[0, 1, 2, 3].map((index) => (
          <Grid item xs={12} sm={12} md={6} key={index}>
            <Item>
           
              <PieChart width={150} height={150}>
                <Pie
                  dataKey="value"
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={60}
                  fill="#8884d8"
                  startAngle={90}
                  endAngle={-270}
                >
                  {pieChartData.map((entry, i) => (
                    <Cell key={i} fill={`#${(Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6)}`} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}*/
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

