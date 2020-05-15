import Taro from '@tarojs/taro'

const interceptor = function (chain) {
  const requestParams = chain.requestParams
  const { method, data, url } = requestParams
  const Authorization = Taro.getStorageSync('Authorization')
  requestParams.header = {...requestParams.header, Authorization}
  return chain.proceed(requestParams)
    .then(res => {
      return res.data
    })
  }
Taro.addInterceptor(interceptor)

export default {
  request(option, method = 'GET') {
    return Taro.request({
      ...option,
      method,
      header: {
        'content-type': 'application/json',
        ...option.header
      }
    })
  },
  login(option, method = 'GET') {
    return Taro.request({
      ...option,
      method,
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        ...option.header
      }
    })
  },

  get(option) {
    return this.request(option, 'GET')
  },
  post(option) {
    return this.request(option, 'POST')
  },
  weappLogin(option) {
    return this.login(option, 'POST')
  },
}

