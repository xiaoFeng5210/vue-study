// axios配置请求拦截器，配置token, instance是一个axios请求实例
export const axiosRequestInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.request.use((config)=>{
    // 配置请求头,用方法去获取token放在请求头里
    config.headers['Authorization'] = getAuthorizationHeader();
    return config;
  }, (err)=>{ return Promise.reject(err)});
}


// 权限验证
const createAuthenticationInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.reques.use((config)=>{
    const method = config.method.toLocaleUpperCase();
    const uri = config.baseURL.replace(/\/$/, '') + '/' + config.url.replace(/^\//, '');
    // 从权限列表数据中拿到能匹配当前请求url的那条数据
    const match = authentication.uriList.find((a: any) => a.method === method && a.match.test(uri))
    if (match) {
      // 配置请求头
      config.headers['Acl-Operation'] = match.aclOperations;
    } else {
      // 当前请求不需要鉴权.
    }
  })
}
