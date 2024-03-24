// Importing environment variables for API base URLs
import {
  API_BASE_URL,
  BYTESCALE_API_KEY,
  BYTESCALE_UPLOAD_URL,
  PRODUCTS_LISTING_URL
} from '@env';

// Configuration object for development environment
const Development = {
  API_BASE_URL,
  isTestEnv: true, // Flag indicating it's a test environment
  BYTESCALE_UPLOAD_URL,
  BYTESCALE_API_KEY,
  PRODUCTS_LISTING_URL
};

// Selecting the active environment (change this to switch environments)
const activeEnv = Development; 

// Exporting the active environment configuration
export default activeEnv;
