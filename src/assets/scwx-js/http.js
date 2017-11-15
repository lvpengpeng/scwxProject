import axios from 'axios';

let http = null;
let baseURL='http://123.56.226.246:8023';
if (window.localStorage.init) {
    let temp = JSON.parse(window.localStorage.init);
    http = axios.create({
        baseURL: baseURL,
        timeout: 20000,
        headers: {
            'Authorization': temp.token,
            headers:{'timestamp':'','biz':'',"sign":"sign"}
        }
    });
}
else {
    http = axios.create({
        baseURL: baseURL,
        timeout: 20000,
    });
}
// 添加响应拦截器
http.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default http;
