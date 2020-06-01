import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID KzJkvN1QM5uysYSUUq6JVQO2omvJqcOrxTY8K3uHKjc'
  }
});
