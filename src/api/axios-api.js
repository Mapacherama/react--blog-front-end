import axios from 'axios';

// Create an instance of Axios with custom configuration
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/', // Set the base URL for your API
  timeout: 1000, // Set a timeout value in milliseconds
  headers: {
    'Content-Type': 'application/json', // Set the default content type for requests
    // Add any other default headers you need
  },
});

export default axiosInstance;
