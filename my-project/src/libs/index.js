import axios from "axios"

const root = process.env.ROOT

var http = axios.create({
  withCredentials: true,
  timeout: 1000 * 30,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
});

http.adornUrl = actionName => {
  return (
    (process.env.NODE_ENV == 'development' ? '/proxyApi/' : root) + actionName
  )
}
export default http

