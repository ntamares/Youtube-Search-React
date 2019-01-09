import axios from 'axios';

const KEY = 'AIzaSyDouHIc7jh3Ne8C7F74EVN6VpyITuOi-mU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});