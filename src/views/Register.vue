<template>
  <div
    class="min-h-screen flex flex-col items-center relative justify-center bg_img login__"
  >
    <div class="fixed left-4 top-5 hidden sm:block">
      <div
        @click="goBack()"
        class="flex items-center justify-center space-x-2 cursor-pointer"
      >
        <ChevronLeftIcon class="w-8 h-8 text-[#FFC827]"></ChevronLeftIcon>
        <span class="text-lg font-bold">主页</span>
      </div>
    </div>

    <div
      class="fixed left-0 right-0 top-0 h-[60px] bg-[#635661] bg-opacity-20 w-full sm:hidden z-30"
    >
      <div
        class="justify-between px-3 flex items-center w-full h-full text-[#d0d0d0]"
      >
        <ChevronLeftIcon
          @click="goBack()"
          class="w-8 h-8 text-[#FFC827]"
        ></ChevronLeftIcon>
        <span class="text-[#FFC827] text-center w-full">注册</span>
        <!-- <router-link to="/login">
          <span>登录</span>
        </router-link> -->
      </div>
    </div>

    <div
      class="flex flex-col bg-[#474747] bg-opacity-40 z-30 text-gray-200 shadow-2xl  shadow-[#342D11] sm:px-6 md:px-8 lg:px-12 pb-4  rounded-3xl max-w-md   px-10    sm:max-w-md"
    >
      <div class="py-3 self-center">
        <img src="@/assets/images/logo.png" alt="" class="w-[120px] h-auto" />
      </div>

      <div
        class="flex justify-center text-xl font-bold text-[#FFC827] tracking-wide"
      >
        账号注册
      </div>
     
      <div class="mt-3">
      <span class="text-sm text-red-500 tracking-[2px] font-bold mt-1">以下标有 <span >*</span> 为必填项</span>

        <form class="mb-1" @click.prevent>
          <div class="flex flex-col mb-3 ">
            <label for="name" class="mb-1 text-xs tracking-wide text-gray-100">
              <span class="text-red-500 font-bold pr-1">*</span>
              账号
            </label>
             <!-- <span class="text-red-500">* <span>账号</span></span> -->
            <div class="relative flex items-center  ">
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
               
                class=" text-sm placeholder-gray-500  placeholder:text-[12px] placeholder:tracking-wider text-gray-500 pl-10 pr-4 rounded  w-full py-2 focus:outline-none outline-none"
                placeholder="账号必须为 8位数字组成！"
              />
            </div>
             <!-- <p v-if="show_name_Error" class="text-[13px] text-red-400 tracking-widest pt-2">{{ usernameError }}</p> -->
          </div>

          <div class="flex flex-col mb-3">
            <label for="name" class="mb-1 text-xs tracking-wide text-gray-100">
              <span class="text-red-500 font-bold pr-1">*</span>
              密码
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
                minlength="6" maxlength="16"
                name="password"
                class="text-sm placeholder-gray-500 focus:ring-0  placeholder:text-[12px] placeholder:tracking-wider text-gray-500 pl-10 pr-4 rounded  w-full py-2 focus:outline-none outline-none"
                placeholder="请设置6-16位字母+数字密码"
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
              </div>
            </div>
            <!-- <p v-if="show_pass_Error" class="text-[13px] text-red-400 tracking-widest pt-2">{{ passwordError }}</p> -->
          </div>

          <div class="flex flex-col mb-3">
            <label for="name" class="mb-1 text-xs tracking-wide text-gray-100">
              <span class="text-red-500 font-bold pr-1">*</span>
              确认密码
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
                v-model="confirmpass"
                id="confirmpass"
                 minlength="6" maxlength="16"
                autocomplete="off"
                :type="confirmpasswordField"
                name="password"
                class="__p text-sm placeholder-gray-500 placeholder:text-[12px] placeholder:tracking-wider text-gray-500 pl-10 pr-16 rounded w-full py-2 focus:outline-0 outline-none focus:outline-none selection:outline-none border-none focus:border-none outline-hidden shadow-none outline-0"
                placeholder="请设置6-16位字母+数字密码"
              />
              <div
                class="inline-flex items-center justify-center absolute right-3 top-0 h-full w-10 text-gray-400 md:cursor-pointer"
              >
                <EyeIcon
                  v-if="confirmpasswordField !== 'password'"
                  @click="ConfirmShowVisibility"
                  class="w-4 h-5"
                />
                <EyeOffIcon
                  v-else
                  @click="ConfirmShowVisibility"
                  class="w-4 h-5 text-yellow-700"
                />
              </div>
            </div>
          </div>

          <div class="flex flex-col mb-3">
            <label for="name" class="mb-1 text-xs tracking-wide text-gray-100">
              <span class="text-red-500 font-bold pr-1">*</span>
              邀请码
            </label>
            <div class="relative">
              <div
                class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
              >
                <CodeIcon class="w-6 h-6"></CodeIcon>
              </div>

              <input
                disabled
                v-model="inviteCode"
                id="inviteCode"
                type="name"
                autocomplete="off"
                name="name"
                class="text-sm bg-white cursor-not-allowed placeholder:text-[12px] placeholder:tracking-wider text-gray-800 pl-10 pr-4 rounded w-full py-2 focus:outline-none outline-none"
                placeholder="请输入邀请码"
              />
            </div>
          </div>

          <div class="flex w-full">
            <button
              :disabled="disableBtn"
              @click="Register"
              type="submit"
              :class="
                disableBtn
                  ? 'bg-[#F0DE7C] opacity-40 cursor-not-allowed'
                  : 'text-black bg-[#C78E3B]'
              "
              class="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base rounded py-2 w-full transition duration-150 ease-in"
            >
              <span class="mr-2 uppercase">注册</span>
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
      <span class="text-[13px] mt-2 flex"
        >已有账户？点这里
        <div  @click="goRegster('login')" class="text-[#FFC827] pl-2 cursor-pointer">登录 </div>
      </span>
    </div>
  </div>
  <Vcode :show="isShow" @success="onSuccess" @close="onClose" />
</template>
  
<script setup>
import {
  EyeIcon,
  EyeOffIcon,
  ExclamationCircleIcon,
  ChevronLeftIcon,
  UserIcon,
  CodeIcon,
} from "@heroicons/vue/outline";
import { ref, computed, onMounted, watch } from "vue";
import { useRouter,useRoute } from "vue-router";
import Vcode from "vue3-puzzle-vcode";
import Notice from "@/network/alert";
import allApi from "@/network/allApi";
import AES from "@/network/aes";
import global from "@/network/global";
import md5 from "js-md5";
import { useStore } from "vuex";

const router = useRouter();
const route = useRoute();
const store = useStore();

const name = ref("");
const password = ref("");
const confirmpass = ref("");
const passwordField = ref("password");
const confirmpasswordField = ref("password");
const timer = ref(10);
const isShow = ref(false);
const host = ref(null);

const usernameError = ref("")
const show_name_Error = ref(false);

const passwordError = ref("")
const show_pass_Error = ref(false)

const inviteCode = ref("");



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
  confirmpasswordField.value =
    confirmpasswordField.value === "password" ? "text" : "password";
}

const goBack = () => {
  router.push(`/?InvCode=${inviteCode.value}`);
};

const onShow = () => {
  isShow.value = true;
};

const onClose = () => {
  isShow.value = false;
};

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

const onSuccess = () => {
  var en = global?.en;
  var agentName = AgentInfo?.value?.name;
  console.log(agentName);
  let data = {
    name: name.value,
    // pw: this.$md5("aes@13" + this.register.pass + "22dfxs%#DSsd"),
    pw: md5(password.value),
    phone: "",
    //agent: agentName,
    InvCode: inviteCode.value,
    domain: host.value,
  };
  isShow.value = true;
  console.log(data, "sendStr");
  let endata = AES.encrypt(JSON.stringify(data), en);
  allApi
    .UserRegister({ data: endata })
    .then((res) => {
      onClose();
      var body = res?.data;
      var msg = JSON.parse(AES.decrypt(body, en));
      console.log(msg, "response msg of register is");
      if (msg?.JsonData?.result == "102") {
        return Notice.Message("无此代理", "error");
      }
      if (msg?.JsonData.result == "103") {
        //onClose(); // 验证成功，手动关闭模态框
        return Notice.Message("已存在此帐号", "error");
      }
      if (msg.JsonData?.result == "104") {
        return Notice.Message("注册失败", "error");
      }
      if (msg?.JsonData?.result == "101") {
        name.value = "";
        password.value = "";
        confirmpass.value = "";
        Notice.Message("注册成功，请登录", "success");
        router.push("/login");
      }
    })
    .catch((e) => {
      onClose();
      console.log(e);
      Notice.Message(e.toString(), "error");
      //this.$message.error(e.toString());
    });
};

const Register = () => {
  if (name.value == "" || password.value == "" || confirmpass.value == "")
   
   return Notice.Message("请输入所有字段", "error");

  if (!/^\d{8}$/.test(name.value)) {
    show_name_Error.value = true;
   usernameError.value = "账号必须为 8位数字组成！"
  return Notice.Message("账号必须为 8位数字组成！", "error");
  
  }
  

  // Check for repetitive numbers (more than 6 repetitions)
  if (/(\d)\1{5,}/.test(name.value)) {
    return Notice.Message("用户名已存在!", "error");
  }

  // Check for sequence numbers (e.g., 123456)
  if (
    /(12345678|23456789|34567890|45678901|01234567|98765432|87654321|76543210)/.test(
      name.value
    )
  ) {
    return Notice.Message("用户名已存在!", "error");
  }

  if (password.value !== confirmpass.value)
    return Notice.Message("两次输入密码不一致", "error");
  // if (name.value.length < 4)
  //   return Notice.Message("用户名至少应包含四个字符", "error");
  if (password.value.length < 6)
    return Notice.Message("密码必须至少有6个字符长", "error");

  if (!/\d/.test(password.value) || !/[a-zA-Z]/.test(password.value))
    return Notice.Message("密码必须包含数字和英文字母", "error");

  if (name.value == password.value)
    return Notice.Message("用户名和密码不能相同", "error");
  // if (!agree.value)
  //     return Notice.Message({ message: '※ 请勾选同意条款!!', duration: 2 })
  onShow();
 
};

const inputClasses = computed(() => {
  if (show_name_Error.value) {
    return 'border-red-600 border-2';
  } else if (name.value && /^\d{8}$/.test(name.value)) {
    return 'border-green-600 border-2';
  } else {
    return '';
  }
});

const inputPasswordClasses = computed(() => {
  if (show_pass_Error.value) {
    return 'border-red-600 border-2 border';
  } else if (password.value && password.value.length >= 6 && /\d/.test(password.value) && /[a-zA-Z]/.test(password.value)) {
    return 'border-green-600 border-2';
  } else {
    return 'border-none';
  }
});

function validateAccount() {
  if (!/^\d{8}$/.test(name.value)) {
    usernameError.value = '账号必须为8位数字组成！';
    show_name_Error.value = true;
  }else{
    show_name_Error.value = false;
  }
}

function validatePassword() {
  if (password.value.length < 6) {
    passwordError.value = '密码必须至少有6个字符长';
    show_pass_Error.value = true;
  } else if (!/\d/.test(password.value) || !/[a-zA-Z]/.test(password.value)) {
    passwordError.value = '密码必须包含数字和英文字母';
    show_pass_Error.value = true;
  } else {
    show_pass_Error.value = false;
  }
}


watch(show_name_Error, (newValue) => {
  if (!newValue || name.value === '') {
    show_name_Error.value = false;
  }
});

watch(show_pass_Error, (newValue) => {
  if (!newValue || password.value === '') {
    show_pass_Error.value = false;
  }
});

watch(name, validateAccount);
watch(password, validatePassword);

if (route?.query !== undefined && route.query?.InvCode !== undefined) {
  console.log(route.query.InvCode);
  inviteCode.value = route.query.InvCode
} else{
  if (localStorage.getItem("inviteCode")) {
  inviteCode.value = localStorage.getItem("inviteCode");
}
}



onMounted(() => {
  host.value = window?.location?.origin;
});
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
</style>