import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import EmojiSymbol from './EmojiSymbol'; // Import the EmojiSymbol component
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function CalorieBurnInfographic() {
  const [caloriesBurned, setCaloriesBurned] = useState(0);
  const maxCalories = 1000; // Updated maximum calories to 1000

  const handleCaloriesChange = (event) => {
    setCaloriesBurned(event.target.value);
  };
  const calorieChart = {"Sunday":500,"Monday":400,"Tuesday":600,"Wednesday":200,"Thursday":450,"Friday":410,"Saturday":340}
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
          {
            Object.keys(calorieChart).map((day, index) => (
              <MenuItem key={index} value={calorieChart[day]}>
                {day}
              </MenuItem>
            ))
            
          }
{/*           
          <MenuItem value={50}>Sunday</MenuItem>
          <MenuItem value={100}>Monday</MenuItem>
          <MenuItem value={1000}>Tuesday</MenuItem> */}
          {/* Add more calorie options as needed */}
        </Select>
      </FormControl>
    </div>
  );
}

export default CalorieBurnInfographic;
