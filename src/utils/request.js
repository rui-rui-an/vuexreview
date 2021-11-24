/*
1:下载  npm i axios
2:导入
   import axios from 'axios'
   创建axios副本
   const _axios=axios.create({
       baseURL,timeout...
   })
3:加入请求拦截与响应拦截
    _axios.interceptors.request.use((config)=>{return config},(error)=>{return Promise.reject(error)})
    _axios.interceptors.response.use((res)=>{return res},(error)=>{return Promise.reject(error)})
4:暴露出去
  export default _axios
*/
import axios from 'axios'
const _axios = axios.create({
  baseURL: process.env.VUE_APP_URL
  /*
开发环境
  .env.development   VUE_APP_名字=值
生产环境
  .env.production   VUE_APP_名字=值
*/
})
_axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
_axios.interceptors.response.use(
  res => {
    return res
  },
  error => {
    return Promise.reject(error)
  }
)
export default _axios
