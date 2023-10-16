import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const services = [
  {
    value: 'Car Repair',
  },
  {
    value: 'Modifications',
  },
  {
    value: 'Accidental Damage',
  },
  {
    value: 'Automobile Seriving',
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
          id="outlined-select-services"
          select
          label="Select"
          defaultValue="Car repair" // Set a default value that exists in the options
          helperText="Please select your type of Service"
        >
          {services.map((option) => (
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
