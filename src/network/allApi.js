import network from './index.js'

export default {
    getDataInfo() {
        // console.log('data ... ', data)
        return network({
            url: 'reqddr',
            method: 'get',
        })
    },
    GetAgentInfo(data) {
        // console.log('data ... ', data)
         return network({
             url: '/getAgentInfo',
             method: 'post',
             data
         })
     },
     UserRegister(data) {
        // console.log('data ... ', data)
         return network({
             url: '/registinv',
             method: 'post',
             data
         })
     },
     UserLogin(data) {
        // console.log('data ... ', data)
         return network({
             url: '/login',
             method: 'post',
             data
         })
     },
     GetScrollText(data) {
        // console.log('data ... ', data)
         return network({
             url: '/getBulletin',
             method: 'post',
             data
         })
     },
     GetUserBalance(data) {
        // console.log('data ... ', data)
         return network({
             url: '/getBalance ',
             method: 'post',
             data
         })
     },
     GetServicLink(data) {
        // console.log('data ... ', data)
         return network({
             url: '/getServiceLink ',
             method: 'post',
             data
         })
     }
}
