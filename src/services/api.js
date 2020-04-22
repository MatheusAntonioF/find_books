import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
  params: {
    key: '7o4vhcIU1qlcrXCwJWfC995R',
  }
});

export default api;
