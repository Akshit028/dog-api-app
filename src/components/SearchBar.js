import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ onSearch }) => {
    return (
        <TextField
            variant="outlined"
            placeholder="Search breeds..."
            fullWidth
            onChange={(e) => onSearch(e.target.value)}
            margin="normal"
            style={{ marginBottom: '16px' }}
            color="primary"
        />
    );
};

export default SearchBar;
