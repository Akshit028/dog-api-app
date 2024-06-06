import React, { useEffect, useState } from 'react';
import { Container, Typography, CircularProgress, Box, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { fetchBreeds } from './services/api';
import DogList from './components/DogList';
import SearchBar from './components/SearchBar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    }
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    h4: {
      fontWeight: 'bold',
    },
    body1: {
      color: '#000',
    },
  },
});

const App = () => {
  const [breeds, setBreeds] = useState([]);
  const [filteredBreeds, setFilteredBreeds] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBreeds = async () => {
      try {
        const breeds = await fetchBreeds();
        setBreeds(breeds);
        setFilteredBreeds(breeds);
      } catch (error) {
        setError(error.message || 'Error fetching breeds');
      } finally {
        setLoading(false);
      }
    };

    getBreeds();
  }, []);

  useEffect(() => {
    setFilteredBreeds(
      breeds.filter(breed =>
        breed.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, breeds]);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Typography variant="h4" gutterBottom color="primary" align="center" style={{ paddingTop: '20px' }}>
          Dog Breeds
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Use the search bar below to find your favorite dog breed.
        </Typography>
        <Box mb={2} display="flex" justifyContent="center">
          <SearchBar onSearch={handleSearch} disabled={loading} />
        </Box>
        {loading ? (
          <Box display="flex" justifyContent="center" mt={2}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography variant="body1" color="error">
            {error}
          </Typography>
        ) : filteredBreeds.length === 0 ? (
          <Typography variant="body1">
            No breeds found matching the search criteria.
          </Typography>
        ) : (
          <DogList breeds={filteredBreeds} />
        )}
      </Container>
    </ThemeProvider>
  );
};

export default App;
