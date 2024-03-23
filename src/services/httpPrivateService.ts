// Importing required modules and dependencies
import _ from 'lodash'; // Importing lodash library for utility functions
import axios, {AxiosRequestHeaders} from 'axios'; // Importing axios for HTTP requests
import Environment from 'network/baseUrl'; // Importing base URL from network module
import logger from './logService'; // Importing logger service
import {toast} from '@backpackapp-io/react-native-toast'; // Importing toast component for notifications

// Creating a private instance of axios for making API requests
const privateAgent = axios.create({
  baseURL: Environment.API_BASE_URL, // Setting base URL for API requests
  timeout: 60000 * 2, // Setting request timeout to 2 minutes
  timeoutErrorMessage: 'Request timeout, please try again', // Error message for timeout
});

// Intercepting requests to add headers
privateAgent.interceptors.request.use(
  async config => {
    config.headers = {
      // Setting common headers for requests
      Authorization: `Bearer ${Environment.NEWS_API_KEY}`, // You may need to add authorization token here
      Accept: 'application/json', // Setting accept header to JSON
      'Content-Type': 'application/json', // Setting content type header to JSON
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
