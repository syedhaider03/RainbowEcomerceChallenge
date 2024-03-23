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
  export const NEWS_API_KEY: string;
}
