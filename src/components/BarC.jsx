import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as BarTooltip,
  ReferenceLine // Import ReferenceLine
} from 'recharts';
import { FormControl, Select, MenuItem } from '@mui/material';
import Typography from '@mui/material/Typography';

function BarC({ data, onChange, selectedIndex }) {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Step Count
      </Typography>
      <BarChart width={350} height={220} data={data[selectedIndex].data}>
        <XAxis dataKey="category" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="value" fill="#8884d8" />
        <BarTooltip />
        
        {/* Add a horizontal ReferenceLine at y = 8000 */}
        <ReferenceLine y={8000} stroke="yellow" width={"10px"} />
      </BarChart>
      <FormControl sx={{ mt: 1 }}>
        <Select
          value={selectedIndex}
          onChange={onChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Select Bar Chart Dataset' }}
        >
          {data.map((option, index) => (
            <MenuItem key={index} value={index}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default BarC;
