import axios from 'axios'
export function request(config) {
  const instance = axios.create({
    baseURL:'http://106.54.54.237:8000/api/wh',
    timeout:5000
  });
  instance.interceptors.response.use(response=>{
    return response.data
  },err=>{
    return err
  });
  return instance(config)
}
