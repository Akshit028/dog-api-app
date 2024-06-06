import axios from 'axios';

const API_URL = 'https://api.thedogapi.com/v1/breeds';

export const fetchBreeds = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching breeds:", error);
    throw error;
  }
};
