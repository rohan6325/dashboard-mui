
// Removed unused import statement
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as BarTooltip } from 'recharts';
import { FormControl, Select, MenuItem } from '@mui/material';
import Typography from '@mui/material/Typography';

function BarC({ data, onChange, selectedIndex }) {
  return (
    <div>
        <Typography variant="h5" gutterBottom>
        Activity Breakup
      </Typography>
      <BarChart width={200} height={200} data={data[selectedIndex].data}>
        <XAxis dataKey="category" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="value" fill="#8884d8" />
        <BarTooltip />
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