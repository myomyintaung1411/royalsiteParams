<template>
    <div class="min-h-screen flex flex-col items-center relative justify-center bg_img   login__">
      
      <div class="absolute left-4 top-5 hidden sm:block">
        <div @click="goBack()" class="flex items-center justify-center space-x-2 cursor-pointer">
          <ChevronLeftIcon  class="w-8 h-8 text-[#FFC827]"></ChevronLeftIcon>
          <span class="text-lg font-bold">主页</span>
        </div>
      </div>
     
        <div class="absolute left-0 right-0 top-0 h-[60px] bg-[#635661] bg-opacity-20 w-full   sm:hidden z-30">
            <div class="justify-between px-3 flex items-center w-full h-full text-[#d0d0d0]">
                <ChevronLeftIcon @click="goBack()" class="w-8 h-8 text-[#FFC827]"></ChevronLeftIcon>
                <span class="text-[#FFC827]">注册</span>
                <router-link to="/login">
                  <span>登录</span>
                </router-link>
            </div>
            
     </div>

        <div class="flex flex-col bg-[#474747] bg-opacity-40 z-30  text-gray-200  shadow-2xl  shadow-[#342D11]  px-4 sm:px-6 md:px-8 lg:px-10 pb-4 rounded-3xl w-50 max-w-xs sm:max-w-md">
        <div class="py-3 self-center ">
          <img src="@/assets/images/logo.png" alt=""  class=" w-[120px] h-auto ">
        </div>

        <div class="flex justify-center text-xl font-bold text-[#FFC827] tracking-wide">账号注册</div>
  
        <div class="mt-5">
          <form @click.prevent>
            <div class="flex flex-col mb-5">
              <!-- <label for="name" class="mb-1 text-xs tracking-wide text-gray-100">请输入账号</label> -->
              <div class="relative">
                <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg> -->
                  <UserIcon class="w-6 h-6"></UserIcon>
                </div>
  
                <input v-model="name" id="name" type="name" autocomplete="off" name="name" class="text-sm placeholder-gray-500 text-gray-500 pl-10 pr-4 rounded w-full py-2 focus:outline-none outline-none" placeholder="请输入账号" />
              </div>
            </div>
            <div class="flex flex-col mb-5">
              <!-- <label for="password" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-100">请输入密码</label> -->
              <div class="relative">
                <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input v-model="password" id="password" autocomplete="off" :type="passwordField" name="password" class="__p text-sm placeholder-gray-500 text-gray-500 pl-10 pr-16 rounded w-full py-2 focus:outline-0 outline-none focus:outline-none selection:outline-none border-none focus:border-none outline-hidden shadow-none outline-0" placeholder="请输入密码" />
                <div class="inline-flex items-center justify-center absolute right-3 top-0 h-full w-10 text-gray-400 md:cursor-pointer">
                  <EyeIcon v-if="passwordField !== 'password'" @click="ShowVisibility" class="w-4 h-5" />
                  <EyeOffIcon v-else @click="ShowVisibility" class="w-4 h-5 text-yellow-700" />
                  <!-- <label class="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label select-none" for="toggle" @click="ShowVisibility">{{passwordField === 'password' ? 'show' : 'hide'}}</label> -->
                </div>
              </div>
            </div>
            <div class="flex flex-col mb-5">
              <!-- <label for="password" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-100">请输入密码</label> -->
              <div class="relative">
                <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input v-model="confirmpass" id="confirmpass" autocomplete="off" :type="confirmpasswordField" name="password" class="__p text-sm placeholder-gray-500 text-gray-500 pl-10 pr-16 rounded w-full py-2 focus:outline-0 outline-none focus:outline-none selection:outline-none border-none focus:border-none outline-hidden shadow-none outline-0" placeholder="请输入确认密码" />
                <div class="inline-flex items-center justify-center absolute right-3 top-0 h-full w-10 text-gray-400 md:cursor-pointer">
                  <EyeIcon v-if="confirmpasswordField !== 'password'" @click="ConfirmShowVisibility" class="w-4 h-5" />
                  <EyeOffIcon v-else @click="ConfirmShowVisibility" class="w-4 h-5 text-yellow-700" />
                  <!-- <label class="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label select-none" for="toggle" @click="ShowVisibility">{{passwordField === 'password' ? 'show' : 'hide'}}</label> -->
                </div>
              </div>
            </div>

           <div class="flex flex-col mb-5">
              <!-- <label for="name" class="mb-1 text-xs tracking-wide text-gray-100">请输入账号</label> -->
              <div class="relative">
                <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg> -->
                  <CodeIcon class="w-6 h-6"></CodeIcon>
                </div>
  
                <input disabled v-model="inviteCode" id="inviteCode" type="name" autocomplete="off" name="name" class="text-sm  bg-white cursor-not-allowed text-gray-800 pl-10 pr-4 rounded w-full py-2 focus:outline-none outline-none" placeholder="请输入邀请码" />
              </div>
            </div>

  
            <div class="flex w-full">
              <button :disabled="disableBtn" @click="Register" type="submit" :class="disableBtn ? 'bg-[#F0DE7C] opacity-40 cursor-not-allowed' : 'text-black bg-[#C78E3B]'" class="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base rounded py-2 w-full transition duration-150 ease-in">
                <span class="mr-2 uppercase">登录</span>
                <span :class="!disableBtn ? 'sm:animate-wiggle ' : ''">
                  <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
        <span class="text-[13px] mt-2">已有账户？点这里 
          <router-link to="/login" class="text-[#FFC827]">登录 </router-link>
          </span>
      </div>
    </div>
    <Vcode :show="isShow" @success="onSuccess" @close="onClose"/>

  </template>
  
<script setup>
import {
  EyeIcon,
  EyeOffIcon,
  ExclamationCircleIcon,ChevronLeftIcon,UserIcon,CodeIcon
} from "@heroicons/vue/outline";
import { ref, computed, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import Vcode from "vue3-puzzle-vcode";
import Notice from '@/network/alert'
import allApi from "@/network/allApi";
import AES from '@/network/aes';
import global from '@/network/global'
import md5 from "js-md5"
import { useStore } from "vuex";

const router = useRouter()
const store = useStore()

const name = ref("");
const password = ref("");
const confirmpass = ref('')
const passwordField = ref("password");
const confirmpasswordField = ref("password");
const timer = ref(10);
const isShow = ref(false);

const inviteCode = ref('')

const disableBtn = computed(() => {
  if (name.value === "" || password.value === "") {
    return true;
  } else {
    return false;
  }
});

const AgentInfo = computed(() => store.getters["user/AGENT_INFO"]);

function ShowVisibility() {
  passwordField.value = passwordField.value === "password" ? "text" : "password";
}
function ConfirmShowVisibility() {
  confirmpasswordField.value = confirmpasswordField.value === "password" ? "text" : "password";
}

const goBack = () => {
  router.push('/')
}

const onShow = () => {
    isShow.value = true;
  };

  const onClose = () => {
    isShow.value = false;
  };

  const onSuccess = () => {
    var en = global?.en;
    var agentName = AgentInfo?.value?.name;
    console.log(agentName);
    let data = {
        name: name.value,
        // pw: this.$md5("aes@13" + this.register.pass + "22dfxs%#DSsd"),
        pw: md5(password.value),
        phone: '',
        //agent: agentName,
        InvCode:inviteCode.value
    };
    isShow.value = true;
    console.log(data, "sendStr");
    let endata = AES.encrypt(JSON.stringify(data), en);
    allApi.UserRegister({ data: endata })
        .then((res) => {
           onClose();
            var body = res?.data;
            var msg = JSON.parse(AES.decrypt(body, en));
            console.log(msg, "response msg of register is");
            if (msg?.JsonData?.result == "102") {
               
                return Notice.Message( '无此代理','error')
            }
            if (msg?.JsonData.result == "103") {
                //onClose(); // 验证成功，手动关闭模态框
                return Notice.Message( '已存在此帐号','error')
            }
            if (msg.JsonData?.result == "104") {
               
                return Notice.Message( '注册失败','error')
            }
            if (msg?.JsonData?.result == "101") {
              
                name.value = ''
                password.value = ''
                confirmpass.value = ''
                Notice.Message( '注册成功，请登录','success')
                 router.push('/login')
            }
        })
        .catch((e) => {
          onClose();
            console.log(e);
            Notice.Message( e.toString(),'error')
            //this.$message.error(e.toString());
        });
  };

const Register = () => {
    if (name.value == '' || password.value == '' || confirmpass.value == '') return Notice.Message(  '请输入所有字段', 'error')
    if (password.value !== confirmpass.value)
        return Notice.Message( '两次输入密码不一致','error')
        if(name.value.length < 4) return Notice.Message( '用户名至少应包含四个字符','error')
    if (password.value.length < 6)
        return Notice.Message( '密码必须至少有6个字符长','error')

    if (!/\d/.test(password.value) || !/[a-zA-Z]/.test(password.value))
        return Notice.Message( '密码必须包含数字和英文字母', 'error')

    if (name.value == password.value)
        return Notice.Message('用户名和密码不能相同','error')
    // if (!agree.value)
    //     return Notice.Message({ message: '※ 请勾选同意条款!!', duration: 2 })
     onShow()
}

if (localStorage.getItem('inviteCode')) {
  inviteCode.value = localStorage.getItem('inviteCode')
}

  </script>
  
  <style  scoped>

  .login__{
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
  </style>