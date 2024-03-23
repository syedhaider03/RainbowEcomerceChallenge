// Importing environment variables for API base URLs
import {
  API_BASE_URL,
  NEWS_API_KEY
} from '@env';

// Configuration object for development environment
const Development = {
  NEWS_API_KEY,
  API_BASE_URL, // Using the API base URL from environment variables
  isTestEnv: true, // Flag indicating it's a test environment
};

// Configuration object for staging environment
const Staging = {
  NEWS_API_KEY,
  API_BASE_URL, // Using the API base URL from environment variables
  isTestEnv: true, // Flag indicating it's a test environment
};

// Configuration object for production environment
const Production = {
  NEWS_API_KEY,
  API_BASE_URL, // Using the production API base URL from environment variables
  isTestEnv: false, // Flag indicating it's not a test environment
};

// Selecting the active environment (change this to switch environments)
const activeEnv = Development; 

// Exporting the active environment configuration
export default activeEnv;
