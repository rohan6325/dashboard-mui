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

  // Calculate the emoji size
  const emojiSize = `${48 + (caloriesBurned / maxCalories) * 48}px`;

  // Calculate the positions to make the emojis overlap
  const overlapPosition = `calc(50% - (${emojiSize} / 2))`;

  return (
    <div style={{ position: 'relative', height: '200px', width: '200px' }}>
      <Typography variant="h5" gutterBottom>
        Calories Burned: {caloriesBurned} kcal
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
          <MenuItem value={50}>50 kcal</MenuItem>
          <MenuItem value={500}>100 kcal</MenuItem>
          <MenuItem value={1000}>1000 kcal</MenuItem>
          {/* Add more calorie options as needed */}
        </Select>
      </FormControl>
    </div>
  );
}

export default CalorieBurnInfographic;