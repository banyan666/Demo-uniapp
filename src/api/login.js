import request from '../utils/request'

export function getLogin(data) {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}