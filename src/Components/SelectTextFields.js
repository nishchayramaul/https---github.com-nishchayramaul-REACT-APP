import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'Location 1',
  },
  {
    value: 'Location 2',
  },
  {
    value: 'Location 3',
  },
  {
    value: 'Location 4',
  },
];

export default function SelectTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-location"
          select
          label="Select"
          defaultValue="Location 1" // Set a default value that exists in the options
          helperText="Please select your Location"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
      </div>
    </Box>
  );
}
