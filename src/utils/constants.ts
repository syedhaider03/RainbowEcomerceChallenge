  export const patterns = {
    PASSWORD: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.{6,})/,
    FULLNAME: /^[^0-9!@#$%^&*()_+={};':",.<>/?`~\[\]\\;\\/-]+$/u,
    EMAIL_GENERAL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
    MOBILE_NUMBER_WITHOUT_COUNTRY: /^\d{10}$/,
    MOBILE_NUMBER_WITH_COUNTRY_CODE: /^(\+\d{1,3}[- ]?)?\d{10}$/,
  };

  export const ERROR_MESSAGES = {
    IMAGE_PERMISSION: 'E_NO_LIBRARY_PERMISSION',
  };

  export const PAGINATION_ID = {
    ProductsList: 'products',
  };
  