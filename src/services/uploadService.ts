import _ from 'lodash';
import axios, {AxiosRequestHeaders} from 'axios'; 
import Environment from 'network/baseUrl'; 
import logger from './logService'; 
import {toast} from '@backpackapp-io/react-native-toast'; 

// Creating a private instance of axios for making API requests
const privateAgent = axios.create({
  baseURL: Environment.BYTESCALE_UPLOAD_URL, // Setting base URL for API requests
  timeout: 60000 * 2, // Setting request timeout to 2 minutes
  timeoutErrorMessage: 'Request timeout, please try again', // Error message for timeout
});

// Intercepting requests to add headers
privateAgent.interceptors.request.use(
  async config => {
    config.headers = {
      // Setting common headers for requests
      Authorization: `Bearer ${Environment.BYTESCALE_API_KEY}`,
      'Content-Type': 'multipart/form-data',
    } as AxiosRequestHeaders;
    return config;
  },
  error => {
    Promise.reject(error); // Rejecting the promise if there's an error in the request
  },
);

// Flag to track if unauthorized error is triggered
let unauthorizedErrorTriggered = false;

// Intercepting responses to log and handle errors
privateAgent.interceptors.response.use(
  response => {
    logger.logRequest(response); // Logging successful response
    return response; // Returning the response
  },
  error => {
    logger.logRequest(error.response); // Logging error response
    // Displaying error message in toast notification
    toast.error(
      error?.response?.data?.message ||
        error?.response?.data?.message ||
        'Something went wrong!',
    );
    return Promise.reject(error); // Rejecting the promise with error
  },
);

// Exporting axios methods and privateAgent instance for making API requests
export default {
  get: privateAgent.get,
  post: privateAgent.post,
  put: privateAgent.put,
  delete: privateAgent.delete,
  patch: privateAgent.patch,
  privateAgent: privateAgent,
};
