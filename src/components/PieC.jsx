import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import { FormControl, Select, MenuItem } from '@mui/material';

function PieC({ data, onChange, selectedIndex }) {
  return (
    <div>
      <PieChart width={150} height={150}>
        <Pie
          dataKey="value"
          data={data[selectedIndex].data}
          cx="50%"
          cy="50%"
          innerRadius={30}
          outerRadius={60}
          fill="#8884d8"
          startAngle={90}
          endAngle={-270}
        >
          {data[selectedIndex].data.map((entry, i) => (
            <Cell key={i} fill={`#${(Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6)}`} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <FormControl sx={{ mt: 1 }}>
        <Select
          value={selectedIndex}
          onChange={onChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Select Pie Chart Dataset' }}
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

export default PieC;
