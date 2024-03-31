<template>
  <div
    class="min-h-screen flex flex-col items-center relative justify-center bg_img login__"
  >
    <div class="absolute left-4 top-5 hidden sm:block">
      <div
        @click="goBack()"
        class="flex items-center justify-center space-x-2 cursor-pointer"
      >
        <ChevronLeftIcon class="w-8 h-8 text-[#FFC827]"></ChevronLeftIcon>
        <span class="text-lg font-bold">主页</span>
      </div>
    </div>

    <div
      class="absolute left-0 right-0 top-0 h-[60px] bg-[#635661] bg-opacity-20 w-full sm:hidden z-30"
    >
      <div
        class="justify-between px-3 flex items-center w-full h-full text-[#d0d0d0]"
      >
        <ChevronLeftIcon
          @click="goBack()"
          class="w-8 h-8 text-[#FFC827]"
        ></ChevronLeftIcon>
        <span class="text-[#FFC827] text-center w-full ">登录</span>
        <!-- <router-link to="/register">
          <span>注册</span>
        </router-link> -->
      </div>
    </div>
    <div
      class="flex flex-col bg-[#474747] bg-opacity-40 z-30 text-gray-200 shadow-2xl shadow-[#342D11] px-10 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl  max-w-sm sm:max-w-md"
    >
      <div class="py-3 self-center">
        <img src="@/assets/images/logo.png" alt="" class="w-[120px] h-auto" />
      </div>
      <div
        class="flex justify-center text-xl font-bold text-[#FFC827] tracking-wide"
      >
        账号登录
      </div>
      <div class="mt-5">
        <form @click.prevent>
          <div class="flex flex-col mb-3">
            <label for="name" class="mb-1 text-xs tracking-wider text-gray-100">
              <span class="text-red-500 font-bold pr-1">*</span>
              账号
            </label>
            <div class="relative">
              <div
                class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
              >
                <UserIcon class="w-5 h-5"></UserIcon>
              </div>

              <input
                v-model="name"
                id="name"
                type="name"
                autocomplete="off"
                minlength="8"
                maxlength="8"
                name="name"
                class="text-sm placeholder-gray-500 placeholder:text-[12px] placeholder:tracking-wider text-gray-500 pl-10 pr-4 rounded w-full py-2 focus:outline-none outline-none"
                placeholder="请输入 8位数账号"
              />
            </div>
          </div>
          <div class="flex flex-col mb-4">
             <label for="name" class="mb-1 text-xs tracking-wider text-gray-100">
              <span class="text-red-500 font-bold pr-1">*</span>
              登录密码
            </label>
            <div class="relative">
              <div
                class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <input
                v-model="password"
                id="password"
                autocomplete="off"
                :type="passwordField"
                name="password"
                class="__p text-sm placeholder-gray-500 placeholder:text-[12px] placeholder:tracking-wider text-gray-500 pl-10 pr-16 rounded w-full py-2 focus:outline-0 outline-none focus:outline-none selection:outline-none border-none focus:border-none outline-hidden shadow-none outline-0"
                placeholder="请输入密码"
              />
              <div
                class="inline-flex items-center justify-center absolute right-3 top-0 h-full w-10 text-gray-400 md:cursor-pointer"
              >
                <EyeIcon
                  v-if="passwordField !== 'password'"
                  @click="ShowVisibility"
                  class="w-4 h-5"
                />
                <EyeOffIcon
                  v-else
                  @click="ShowVisibility"
                  class="w-4 h-5 text-yellow-700"
                />
                <!-- <label class="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label select-none" for="toggle" @click="ShowVisibility">{{passwordField === 'password' ? 'show' : 'hide'}}</label> -->
              </div>
            </div>
          </div>

          <div class="sm:block w-full hidden">
            <button
              :disabled="disableBtn"
              @click="Login(0)"
              type="submit"
              :class="
                disableBtn
                  ? 'bg-[#F0DE7C] opacity-40 cursor-not-allowed'
                  : 'text-black bg-[#C78E3B]'
              "
              class="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base rounded py-2 w-full transition duration-150 ease-in"
            >
              <span class="mr-2 uppercase">登录</span>
              <span :class="!disableBtn ? 'sm:animate-wiggle ' : ''">
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div class="sm:hidden w-full flex">
            <button
              :disabled="disableBtn"
              @click="Login(1)"
              type="submit"
              :class="
                disableBtn
                  ? 'bg-[#F0DE7C] opacity-40 cursor-not-allowed'
                  : 'text-black bg-[#C78E3B]'
              "
              class="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base rounded py-2 w-full transition duration-150 ease-in"
            >
              <span class="mr-2 uppercase">登录</span>
              <span :class="!disableBtn ? 'sm:animate-wiggle ' : ''">
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </button>
          </div>


        </form>
      </div>
      <span class="text-[13px] mt-2 flex space-x-1"
        >没有帐户？点击这里
        <div @click="goRegster('reg')" class="text-[#FFC827] pl-2 cursor-pointer">注册</div>
      </span>
    </div>
  </div>
  <Vcode :show="isShow" @success="onSuccess" @close="onClose" />

  <GameModalDialog :show="selectGameModal" @closegame="closeGameModal">
    <div
      class="game_bg_image md:max-w-[1000px] lg:max-w-[1050px] cursor-pointer"
    >
      <div class="w-full absolute top-28 px-4">
        <div class="w-full items-center mt-10 grid grid-cols-2 gap-x-1">
           <div
            class="flex flex-col items-center px-4 font-bold text-white text-2xl"
          >
            <div>经 典 版</div>
            <div
              @click="goDialog_Game(1)"
              class="w-full hover:border-[3px] cursor-pointer hover:border-solid hover:border-[#ecda92] border-[2px] border-solid rounded border-[#836a4c] h-64 mt-5"
            >
              <img
                src="@/assets/images/gameimg2.png"
                alt=""
                class="w-full h-full object-cover p-[1px]"
              />
            </div>
          </div>
          <div
            class="flex flex-col items-center px-4 font-bold text-white text-2xl"
          >
            <div>豪 华 版</div>
            <div
              @click="goDialog_Game(0)"
              class="w-full border-[2px] border-solid hover:border-[3px] cursor-pointer hover:border-solid hover:border-[#ecda92] rounded border-[#836a4c] h-64 mt-5"
            >
              <img
                src="@/assets/images/gameimg1.jpg"
                alt=""
                class="w-full h-full object-cover p-[1px]"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  </GameModalDialog>

  <!-- <GameModalDialog :show="h5_selectGameDialog" @closegame="closeGameModal">
    <div class="h-auto w-[90vw] cursor-pointer">
      <div class="mt-12 bg-black">
        <div
          class="flex flex-col items-center px-4 font-bold text-white text-2xl bg-[#2b2a2954] py-3"
        >
          <div>豪 华 版</div>
          <div
            @click="goDialog_Game(2)"
            class="w-full border-[2px] border-solid hover:border-[3px] cursor-pointer hover:border-solid hover:border-[#ecda92] rounded border-[#836a4c] h-40"
          >
            <img
              src="@/assets/images/gameimg1.jpg"
              alt=""
              class="w-full h-full object-cover p-[1px]"
            />
          </div>
        </div>
        <div
          class="flex flex-col items-center px-4 font-bold text-white text-2xl bg-[#2b2a2954] py-3"
        >
          <div>经 典 版</div>
          <div
            @click="goDialog_Game(3)"
            class="w-full border-[2px] border-solid hover:border-[3px] cursor-pointer hover:border-solid hover:border-[#ecda92] rounded border-[#836a4c] h-40"
          >
            <img
              src="@/assets/images/gameimg2.png"
              alt=""
              class="w-full h-full object-cover p-[1px]"
            />
          </div>
        </div>
      </div>
    </div>
  </GameModalDialog> -->
</template>

  <script setup>
import {
  EyeIcon,
  EyeOffIcon,
  ExclamationCircleIcon,ChevronLeftIcon,UserIcon
} from "@heroicons/vue/outline";
import { ref, computed, onMounted, watch } from "vue";
import { useRouter,useRoute } from 'vue-router';
import AES from '@/network/aes';
import global from '@/network/global'
import Vcode from "vue3-puzzle-vcode";
import md5 from "js-md5"
import { useStore } from "vuex";
import Notice from '@/network/alert'
import allApi from "@/network/allApi";
import GameModalDialog from "@/components/gameModal.vue";
import { message } from '@/utils/prompt'

const router = useRouter()
const route = useRoute()
const store = useStore()

const name = ref("");
const password = ref("");
const passwordField = ref("password");
const timer = ref(10);
const isShow = ref(false);
const inviteCode = ref('')
const selectGameModal = ref(false);
const h5_selectGameDialog = ref(false);
const mobileClick = ref(0);

const AgentInfo = computed(() => store.getters["user/AGENT_INFO"]);
const Global = xxzz; // call unknow.js object as global
const disableBtn = computed(() => {
  if (name.value === "" || password.value === "") {
    return true;
  } else {
    return false;
  }
});

const goRegster = (data) => {
   switch (data) {
    case 'login':
    router.push(`/login?InvCode=${inviteCode.value}`)
      break;
    case 'reg':
    router.push(`/register?InvCode=${inviteCode.value}`)
      break;
   
    default:
      break;
   }
 
}

const closeGameModal = () => {
  selectGameModal.value = false;
  h5_selectGameDialog.value = false;
  router.push(`/?InvCode=${inviteCode.value}`);
};

const goDialog_Game = (number) => {

        var gameEn = global?.gameEn;
        let data = {
          name: name.value,
          password: md5(password.value),
        };
        var endata = AES.encrypt(JSON.stringify(data), gameEn);
        console.log(AgentInfo?.value?.gameAddr);

  switch (number) {
    case 0:
        if (Global?.old_pc_game_url) {
          window.open(
            Global?.old_pc_game_url + `?token=${endata}`
          );
        }
      closeGameModal();
      break;
    case 1:
              if (Global?.new_pc_game_url) {
          window.open(
            Global?.new_pc_game_url + `?token=${endata}`
          );
        }
      closeGameModal();
      break;
    case 2:
        if (Global?.h5_game_url) {
          window.open(
            Global?.h5_game_url + `?token=${endata}`
          );
        }
      closeGameModal();
      break;
    case 3:
          if (Global?.h5_game_url) {
          window.open(
            Global?.new_pc_game_url + `?token=${endata}`
          );
        }
      closeGameModal();
      break;

    default:
      break;
  }
};

function ShowVisibility() {
  passwordField.value = passwordField.value === "password" ? "text" : "password";
}
const goBack = () => {
  router.push(`/?InvCode=${inviteCode.value}`);
}

const onShow = () => {
    isShow.value = true;
  };

  const onClose = () => {
    isShow.value = false;
  };

  const onSuccess = () => {
    var en = global?.en;
    
    //return instance.proxy.$message({ message: '请输入所有字段', duration: 2 })
    let logindata = {
        name: name.value,
        pw: md5(password.value),
        upperId: AgentInfo?.value?.Id,
      };
      isShow.value = true;
      let endata = AES.encrypt(JSON.stringify(logindata), en);
      allApi.UserLogin({ data: endata })
        .then((res) => {
          onClose();
          var body = res?.data;
         // console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaaaa", body);
          var msg = JSON.parse(AES.decrypt(body, en));
          console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaaaa", msg);
          if (msg?.JsonData?.code == 200) {
            store.commit('user/LoginInfo',msg?.JsonData)
            store.commit('user/LoginState',true)
            store.commit('user/GameEnterUserInfo',logindata)
            // this.UserBalance();

          if (mobileClick.value == 1) {
            goDialog_Game(2)
          //h5_selectGameDialog.value = true;
        } else {
          selectGameModal.value = true;
        }

            //   var gameEn = global?.gameEn;
            // let data = {
            //   name: name.value,
            //   password: md5(password.value),
            // };
            // var endata = AES.encrypt(JSON.stringify(data), gameEn);
            // console.log(AgentInfo?.value?.gameAddr);
            // if(AgentInfo?.value?.gameAddr){
            //     window.open(
            //   "http://" +
            //   AgentInfo?.value?.gameAddr +
            //   `?token=${endata}`
            // );
            // }
            // name.value = "";
            // password.value = ""; 
            Notice.Message("登录成功","success")
            // setTimeout(() => {
            //   router.push('/')
            // }, 1000);
            //return instance.proxy.$message({ message: '登录成功', duration: 2 })
          } else {
          return  Notice.Message("账号或密码错误","error")
           // return instance.proxy.$message({ message: '账号或密码错误', duration: 2 })
          }
        })
        .catch((e) => {
          onClose();
            console.log(e.toString());
        });
  }

const Login = (number) =>{
  //message({ message: '为了您的账户安全，请先绑定手机号234324324324324。', duration: 2 })
  mobileClick.value = number; 
  if (name.value == '' || password.value == '') return Notice.Message("请输入所有字段","error")
  onShow()
}

// if (localStorage.getItem("inviteCode")) {
//   inviteCode.value = localStorage.getItem("inviteCode");
// }
if (route?.query !== undefined && route.query?.InvCode !== undefined) {
  console.log(route.query.InvCode);
  inviteCode.value = route.query.InvCode
} else{
  if (localStorage.getItem("inviteCode")) {
  inviteCode.value = localStorage.getItem("inviteCode");
}
}
  </script>
  
  <style  scoped>
.login__ {
  background: url(@/assets/images/howsection.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  position: relative;
}

.bg_img::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: #2e0327;
  opacity: 0.9;
}

.game_bg_image {
  width: 1050px;
  height: 550px;
  margin: 0 auto;
  background: transparent;
  background-image: url(@/assets/images/gamedialogBg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: transparent;
  position: relative;
  /* z-index: 9999; */
}
</style>