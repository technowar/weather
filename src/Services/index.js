import Axios from 'axios';

export default Axios.create({
  baseURL: 'api.openweathermap.org/data/2.5/weather',
  timeout: 10000,
  responseType: 'json',
})
