import React, { useState } from 'react';
import {  XAxis, YAxis, CartesianGrid, } from 'recharts';
import { LineChart, Line,Tooltip} from 'recharts';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function LineCht({ lineChartDataOptions, handleLineChartChange, lineChartDataIndex }) {
    return (
      <>
        <div>
          {/* Line Chart code */}

          <LineChart width={350} height={250} data={lineChartDataOptions[lineChartDataIndex].data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
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
      </>
    );
  }