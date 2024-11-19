import axios from "axios";

const request = axios.create({
    timeout:30000
})

request.interceptors.request.use(config => {
    switch (config.requestBase){
        default:
            config.baseURL = import.meta.env.VITE_BASE_API
            break;
    }
    return config
},error => {
    console.log(error)
})


request.interceptors.response.use(response => {
    const res = response.data
    if(response.status===200 && res.code){
        if (res.code !== 200) {
            uni.showToast({
                icon:'none',
                title:'系统繁忙，稍后再试！'
            })
            return Promise.reject(new Error(res.msg || 'Error'))
        } else {
            return res
        }
    }else{
        return response
    }
},error => {
    console.log(error)
    return Promise.reject(error)
})
export default request