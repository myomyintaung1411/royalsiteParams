import network from './index.js'

export default {
    getDataInfo() {
        // console.log('data ... ', data)
        return network({
            url: 'reqddr',
            method: 'get',
            requestBase: '/api',
        })
    },
    GetAgentInfo(data) {
        // console.log('data ... ', data)
         return network({
             url: '/getAgentInfoCode',
             method: 'post',
             data,
             requestBase: '/api',
         })
     },
     UserRegister(data) {
        // console.log('data ... ', data)
         return network({
             url: '/registinv',
             method: 'post',
             data,
             requestBase: '/api',
         })
     },
     UserLogin(data) {
        // console.log('data ... ', data)
         return network({
             url: '/login',
             method: 'post',
             data,
             requestBase: '/api',
         })
     },
     GetScrollText(data) {
        // console.log('data ... ', data)
         return network({
             url: '/getBulletin',
             method: 'post',
             data,
             requestBase: '/api',
         })
     },
     GetUserBalance(data) {
        // console.log('data ... ', data)
         return network({
             url: '/getBalance ',
             method: 'post',
             data,
             requestBase: '/api',
         })
     },
     GetServicLink(data) {
        // console.log('data ... ', data)
         return network({
             url: '/getServiceName ',
             method: 'post',
             data,
             requestBase: '/cu',
         })
     }
}
