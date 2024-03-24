// Declaration for SVG files
declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

// Declaration for environment variables
declare module '@env' {
  export const API_BASE_URL: string;
  export const BYTESCALE_UPLOAD_URL: string;
  export const BYTESCALE_API_KEY: string;
  export const PRODUCTS_LISTING_URL: string;
}
