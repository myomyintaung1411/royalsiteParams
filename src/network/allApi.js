import network from './index.js'

export default {
    getDataInfo() {
        return network({
            url: 'reqddr',
            method: 'get',
            requestBase: '/api',
        })
    },
    GetAgentInfo(data) {
         return network({
             url: '/getAgentInfoCode',
             method: 'post',
             data,
             requestBase: '/api',
         })
     },
     UserRegister(data) {
         return network({
             url: '/registinv',
             method: 'post',
             data,
             requestBase: '/api',
         })
     },
     UserLogin(data) {
         return network({
             url: '/login',
             method: 'post',
             data,
             requestBase: '/api',
         })
     },
     GetScrollText(data) {
         return network({
             url: '/getBulletin',
             method: 'post',
             data,
             requestBase: '/api',
         })
     },
     GetUserBalance(data) {
         return network({
             url: '/getBalance ',
             method: 'post',
             data,
             requestBase: '/api',
         })
     },
     GetServicLink(data) {
         return network({
             url: '/getServiceName ',
             method: 'post',
             data,
             requestBase: '/cu',
         })
     }
}
