import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import EmojiSymbol from './EmojiSymbol'; // Import the EmojiSymbol component
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function CalorieBurnInfographic() {
  const [caloriesBurned, setCaloriesBurned] = useState(0);
  const maxCalories = 1000;

  const handleCaloriesChange = (event) => {
    setCaloriesBurned(event.target.value);
  };
<<<<<<< HEAD
  const calorieChart = {"Sunday":1000,"Monday":400,"Tuesday":600,"Wednesday":200,"Thursday":450,"Friday":410,"Saturday":340}
=======

  const calorieChart = {"Sunday":500,"Monday":400,"Tuesday":600,"Wednesday":200,"Thursday":450,"Friday":410,"Saturday":340}
>>>>>>> f58ced2ac0b2eda8f2cc1bc0336d4a8d7749e2c9
  // Calculate the size of the emoji symbol based on calories burned
  const emojiSize = `${48 + (caloriesBurned / maxCalories) * 48}px`; // Larger initial size and growth


  return (
    <div style={{ position: 'relative', height: '200px', width: '200px' }}>
      <Typography variant="h5" gutterBottom>
        {caloriesBurned?`Calories Burned: ${caloriesBurned} kcal`: "Calories Burned"}
      </Typography>
      <div style={{ position: 'absolute', top: overlapPosition, left: overlapPosition, zIndex: 0 }}>
        <EmojiSymbol size={`96px`} opacity={0.3} style={{ zIndex: 0 }}>
          🔥
        </EmojiSymbol>
        <EmojiSymbol size={emojiSize} style={{ zIndex: 1, position: 'absolute', top: `calc(50% - 24px)`, left: `calc(50% - 24px)` }}>
          🔥
        </EmojiSymbol>
      </div>
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

          {/* Add more calorie options as needed */}
        </Select>
      </FormControl>
    </div>
  );
}

export default CalorieBurnInfographic;