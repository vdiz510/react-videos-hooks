import axios from 'axios';

const KEY = "AIzaSyDCu70qfFcJZyK8GQKQXzOtfU06sanl4as"

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: snippet,
    maxResults: 5,
    key: KEY
  }
})