import React from 'react';
import TextField from '@mui/material/TextField';

export const Textfiled = () => {
  return (
    <div>
      <TextField sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
        width: '100%', // Make the TextField wide
          borderRadius: '30px' // Apply a border radius of 30px
      }}
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />
    </div>
  );
};