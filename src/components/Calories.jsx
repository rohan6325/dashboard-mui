import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import EmojiSymbol from './EmojiSymbol'; // Import the EmojiSymbol component
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const calorieChart = {
  "Sunday": 1000,
  "Monday": 400,
  "Tuesday": 600,
  "Wednesday": 200,
  "Thursday": 450,
  "Friday": 410,
  "Saturday": 340
};

function CalorieBurnInfographic() {
  const [caloriesBurned, setCaloriesBurned] = useState(0);
  const maxCalories = 1000;

  const handleCaloriesChange = (event) => {
    setCaloriesBurned(event.target.value);
  };

  // Calculate the size of the emoji symbol based on calories burned
  const emojiSize = `${48 + (caloriesBurned / maxCalories * 48)}px`; // Use template literals

  // Calculate the maximum size of the emoji to prevent overlapping
  const maxEmojiSize = '96px'; // You can adjust this value as needed

  return (
    <div style={{ position: 'relative', height: '200px', width: '200px' }}>
      <Typography variant="h5" gutterBottom>
        {caloriesBurned ? `Calories Burned: ${caloriesBurned} kcal` : "Select Calories Burned"}
      </Typography>
      <CalorieSelection
        caloriesBurned={caloriesBurned}
        handleCaloriesChange={handleCaloriesChange}
        calorieChart={calorieChart}
        emojiSize={emojiSize} // Pass the emojiSize as a prop
      />
    </div>
  );
}

function CalorieSelection({ caloriesBurned, handleCaloriesChange, calorieChart, emojiSize }) {
  return (
    <div>

      <EmojiSymbol size={emojiSize}>🔥</EmojiSymbol>
      <FormControl>
        <Select
          value={caloriesBurned}
          onChange={handleCaloriesChange}
          variant="outlined"
          displayEmpty
        >
          <MenuItem value={0}>Select Calories Burned</MenuItem>
          {Object.keys(calorieChart).map((day, index) => (
  <MenuItem key={index} value={calorieChart[day]}>
    {day}
  </MenuItem>
))}
          {/* Add more calorie options as needed */}
        </Select>
      </FormControl>
    </div>
  );
}

export default CalorieBurnInfographic;
