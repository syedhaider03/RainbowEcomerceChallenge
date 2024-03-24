import {toast} from '@backpackapp-io/react-native-toast';
import axios from 'axios';
import Environment from 'network/baseUrl';

const publicAgent = axios.create({
  baseURL: Environment.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 60000,
  timeoutErrorMessage: 'Request timeout, please try again',
});

publicAgent.interceptors.request.use(
  async config => {
    console.log({config});
    return config;
  },
  error => {
    toast.error(error)
    return Promise.reject(error);
  },
);

publicAgent.interceptors.response.use(
  response => {
    console.log({response});
    return response;
  },
  error => {
    console.log({error: error});
    toast.error(error)
    return Promise.reject(error);
  },
);
export default {
  get: publicAgent.get,
  post: publicAgent.post,
  put: publicAgent.put,
  delete: publicAgent.delete,
};
