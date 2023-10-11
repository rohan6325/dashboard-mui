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

export default CalorieBurnInfographic;
