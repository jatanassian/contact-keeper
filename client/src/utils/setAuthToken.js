import axios from 'axios';

// Check if a token is passed in. If it is: add then token to the global header, if not: delete the token from the global header
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
