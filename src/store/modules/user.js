export default {
  state: () => ({
  
    agentInfo:null,
    marquee:'',
    login:false,
    loginInfo:null,

    // to game enter username and password
    gameEnterUserInfo:null
  
  }),

  getters: {
   AGENT_INFO:state => state.agentInfo, // agent info res 
   MARQUEE:state => state.marquee,//scroll data
   LOGIN_STATE:state => state.login,//where user login or not
   LOGIN_INFO:state => state.loginInfo,//login user response
   GAME_USER_INFO:state => state.gameEnterUserInfo //username and password of login to enter game
  },

  mutations: {
   Agent_Info(state,payload){
    state.agentInfo = payload
   },
   Marquee(state,payload){
    state.marquee = payload
   },
   LoginState(state,payload){
    state.login = payload
   },
   LoginInfo(state,payload){
    state.loginInfo = payload
   },
   GameEnterUserInfo(state,payload){
    state.gameEnterUserInfo = payload
   }

  },

  actions: {
    //
  },
  namespaced: true
}
