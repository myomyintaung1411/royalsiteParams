<template>
  <div class="relative w-full h-screen hidden sm:block">
   
    <!-- customer service -->
    <div class="fixed right-5 bottom-[300px]   z-50 flex flex-col space-y-3">
      <li v-if="agentInfo?.customerAddr" class="list-none w-[50px] h-[50px] cursor-pointer relative ">
        <div @click="goService(0)">
          <img src="@/assets/icon/ic_kf.svg" alt="" class="w-full h-full">
        </div>
        <div v-if="isshowKefu && IconNum == 0 && customer_service_link?.length > 0"
          class="absolute  flex items-center text-white  text-center overflow-y-auto  leading-[30px] text-sm left-[-220px] bg-[#3a3a3a] top-[0px]">
          <div class="w-[200px] py-2  px-2 max-h-80 h-full relative ">
            <div @click="isshowKefu = false" class="absolute right-2 ">
              <XIcon  class="w-5 z-10 h-5  bg-white rounded-full text-black p-[2px] "></XIcon>
            </div>
            
            <h2 class="text-center text-base tracking-wide text-[#FFC827]">选择客服</h2>
            <!-- <div v-for="(service, n) in splitServiceUrl()" :key="n" class="py-1 ">
              <div @click="clickService(service)" class="rounded-lg flex items-center text-sm  space-x-3 bg-[#350b2d] py-2">
                <img src="@/assets/images/service.png" alt="" class="w-10 ml-2  ">
                <div>{{serviceName(n)}}</div>
              </div>
            </div> -->
            <div v-for="(service, n) in customer_service_link" :key="n" class="py-1 ">
              <div @click="clickService(service?.c_id)" class="rounded-lg flex items-center text-sm  space-x-3 bg-[#350b2d] py-2">
                <img src="@/assets/images/service.png" alt="" class="w-10 ml-2  ">
                <div>{{service.nickname}}</div>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li v-if="agentInfo?.QQ" class="list-none w-[50px] h-[50px] cursor-pointer relative ">
        <div @click="goService(1)">
          <img src="@/assets/icon/12.png" alt="" class="w-full h-full">
        </div>
        <div v-if="IconNum == 1 && isshowQQ"
          class="absolute w-40   flex items-center text-center  px-2 leading-[30px] text-sm   -left-48   bg-[#3a3a3a] top-[10px]">
          <div  class=" whitespace-normal break-words w-full">{{agentInfo?.QQ}}</div>
        </div>
      </li>
      <li  v-if="agentInfo?.WXH" class="list-none w-[50px] h-[50px] cursor-pointer relative ">
        <div @click="goService(2)">
          <img src="@/assets/icon/121.png" alt="" class="w-full h-full">
        </div>
        <div v-if="IconNum == 2 && isshowWx"
          class="absolute w-40   flex items-center text-center  px-2 leading-[30px] text-sm   -left-48   bg-[#3a3a3a] top-[10px]">
          <div  class=" whitespace-normal break-words w-full">{{agentInfo?.WXH}}</div>
        </div>
      </li>
      <!-- <li v-if="agentInfo?.WXH" class="list-none w-[50px] h-[50px] cursor-pointer relative ">
        <div @click="goService(2)">
          <img src="@/assets/icon/ic_wechat.svg" alt="" class="w-full h-full">
        </div>
        <div v-if="IconNum == 2 && isshowWx"
          class="absolute  flex items-center text-center h-[30px] leading-[30px] text-sm left-[-220px] bg-[#3a3a3a] top-[10px]">
          <vue-qrcode  :value="agentInfo?.WXH" class=" rounded-t-lg" tag="img" ref="Iosqr" :options="{
            errorCorrectionLevel: 'Q',
            width: 200,
            type: 'png'
          }"></vue-qrcode>
        </div>
      </li> -->
      <li v-if="agentInfo?.phone" class="list-none w-[50px] h-[50px] cursor-pointer relative ">
        <div @click="goService(3)">
          <img src="@/assets/icon/ic_shouji.png" alt="" class="w-full h-full">
        </div>
        <div v-if="IconNum == 3 && isshowPh"
          class="absolute w-40   flex items-center text-center  px-2 leading-[30px] text-sm   -left-48   bg-[#3a3a3a] top-[10px]">
          <div  class=" whitespace-normal break-words w-full">{{agentInfo?.phone}}</div>
        </div>
      </li>

      <li @click="toTop" class="list-none w-[50px] h-[50px] cursor-pointer">
        <img src="@/assets/icon/ic_top.svg" alt="" class="w-full h-full">
      </li>

    </div>

    <!-- header section -->
    <div class="w-full h-auto" style="border-bottom: 1px solid transparent">
      <div class="lg:max-w-7xl mx-auto px-0">
        <div class="md:py-5 w-full">
          <div class="flex flex-wrap md:flex-nowrap justify-center md:justify-between px-3 ">
            <div class="img">
              <a href="#" class="flex flex-col md:flex-row  items-center md:py-4 px-2">
                <img src="@/assets/images/logo.png" alt="Logo" class="max-w-[180px] max-h-16" />
                <span class=" font-semibold text-[#f3ba0f] first-letter:text-4xl md:text-lg uppercase ml-3">
                  {{ t('brand') }}
                </span>
              </a>
            </div>
            <div
              class="flex items-center space-x-5 mt-2 md:mt-0 md:space-x-10 md:justify-end w-full md:w-auto justify-between text-white">
              <a @click="goGame()" rel="noopener noreferrer"
                class=" py-4 px-2 font-semibold hover:text-[#FFC827]  transition duration-150 ease-in-out cursor-pointer">{{
                  t('pc') }}</a>
                 
              <a :href="Global?.ad" target="_blank" rel="noopener noreferrer"
                class="py-4 px- font-semibold hover:text-[#FFC827]  transition duration-150 ease-in-out cursor-pointer">{{
                  t('agent') }}</a>
              <!-- <a @click="goService(0)" rel="noopener noreferrer"
                class=" py-4 px-2   font-semibold hover:text-[#FFC827]  transition duration-150 ease-in-out cursor-pointer ">{{
                  t('service') }}</a> -->

              <router-link v-if="!loginState" to="/login"
                class="flex items-center space-x-1 cursor-pointer transition duration-150 ease-in-out">
                <UserCircleIcon class="w-7 h-7 text-[#FFC827]"></UserCircleIcon>
                <span class=" font-semibold mt-[2px]">{{ t('login') }}</span>
              </router-link>
              <router-link v-if="!loginState" to="/register"
                class="flex items-center space-x-1 cursor-pointer transition duration-150 ease-in-out">
                <span class=" font-semibold">{{ t('register') }}</span>
              </router-link>
              <div v-if="loginState" class="flex items-center">
                <div class="flex items-center space-x-2 mr-5">
                  <!-- <span class="text-sm tracking-wider">用户名 :</span> -->
                  <UserIcon class="w-6 h-6"></UserIcon>
                  <span class="text-[#ffd33b]">{{ LoginResponseInfo?.username || '' }}</span>
                </div>
                <div class="flex items-center space-x-2 mr-5">
                  <CurrencyYenIcon class="w-6 h-6"></CurrencyYenIcon>
                  <span class="text-[#ffd33b]">{{ LoginResponseInfo?.balance || '0.00' }}</span>
                </div>
                <div @click="Logout" class="flex items-center space-x-2 mr-5 cursor-pointer">
                  <LogoutIcon class="w-6 h-6"></LogoutIcon>
                </div>
              </div>
              <!-- <LanguageSwitch></LanguageSwitch> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="banner-section relative bg_img overflow-hidden sm:mt-24 mt-5 play_" style="background-size: cover;">
      <div class="container lg:max-w-7xl mx-auto opacity-95 w-full ">
        <div class="
              banner-wrapper flex flex-wrap   lg:flex-nowrap   justify-center  md:justify-around items-center lg:px-10 xl:px-0
            ">
          <div class="banner-content lg:max-w-lg md:max-w-sm w-full  px-3 sm:px-0">
            <h1 class="banner-content__title md:text-4xl xl:text-6xl mb-6 text-4xl ">
              {{ t('play') }}
              <span class="text--base text-[#FFC827]">{{ t('online_c') }}</span> &amp;
              {{ t('win') }}
            </h1>
            <p class="banner-content__subtitle w-full sm:max-w-[550px] text-lg sm:text-2xl">
              {{ t('play_txt') }}
            </p>
            <div class="button-wrapper text-center sm:text-left " style="margin: -5px -10px; margin-top: 50px">
              <a @click="goGame"
                class="cmn--btn active cursor-pointer  btn--lg relative overflow-hidden hover:bg-[#ffdd2d] hover:text-black  bg-[#C76F0B] shadow-lg transition duration-150 ease-in-out px-4 mx-3  py-[13px] sm:px-[35px]  sm:my-[5px] sm:mx-[10px] "
                style="font-size: 24px; box-shadow: -3.828px -3.828px 6px 0px rgb(255 200 39 / 40%), 3px 5px 8px 0px rgb(255 82 1 / 20%);">{{
                  t('pl_now') }}</a>
              <!-- <a :href="infoData[1]?.link" target="_blank"
              class="cmn--btn active cursor-pointer  btn--lg relative overflow-hidden hover:bg-[#ffdd2d] hover:text-black  bg-[#C76F0B] shadow-lg transition duration-150 ease-in-out px-4 mx-3  py-[13px] sm:px-[35px]  sm:my-[5px] sm:mx-[10px] "
              style="font-size: 24px; box-shadow: -3.828px -3.828px 6px 0px rgb(255 200 39 / 40%), 3px 5px 8px 0px rgb(255 82 1 / 20%);">{{t('pl_now')}}</a> -->
              <router-link to="/playrules"
                class="cmn--btn btn--lg relative overflow-hidden  py-[13px] sm:px-[35px] px-4  sm:my-[5px] sm:mx-[10px]"
                style="background: linear-gradient(0deg, #ff9c19 40%, #ffdd2d 110%);font-size: 24px; box-shadow: -3.828px -3.828px 6px 0px rgb(255 200 39 / 40%), 3px 5px 8px 0px rgb(255 82 1 / 20%);
                  ">{{ t('pl_ru') }}</router-link>
            </div>
            <img src="@/assets/images/card.png" alt="" class="shape1" />
          </div>
          <div class="banner-thumb">
            <img src="@/assets/images/thumb.png" class="w-full h-full" alt="banner" />
          </div>
        </div>
      </div>
    </section>

    <section class="about-section overflow-hidden relative lg:py-32 bg-[#2e0327]">
      <div class="container lg:max-w-7xl mx-auto">
        <div class="row items-center flex flex-wrap md:flex-nowrap">
          <div class="col-lg-6 px-1 lg:max-w-lg md:max-w-sm xl:w-auto w-full  text-center sm:text-left">
            <div class="about-content">
              <div class="section-header mb-14 w-full">
                <h2 class="section-header__title text-center sm:text-left sm:text-[50px] text-3xl sm:-mt-2">
                  {{ t('about') }}
                </h2>
                <p>
                  {{ t('about_txt') }}
                </p>
              </div>
              <a @click="goGame" target="_blank"
                class="cmn--btn active btn--lg cursor-pointer relative overflow-hidden; hover:bg-[#ffdd2d] hover:text-black bg-[#C76F0B] shadow-lg transition duration-150 ease-in-out"
                style="margin: 5px 10px; padding: 13px 35px !important; font-size: 24px; box-shadow: -3.828px -3.828px 6px 0px rgb(255 200 39 / 40%), 3px 5px 8px 0px rgb(255 82 1 / 20%)">{{
                  t('know') }}</a>
            </div>
          </div>
          <div class="col-lg-6 mt-10 sm:mt-0">
            <div class="aobut-thumb section-thumb ml-5">
              <img src="@/assets/images/thumb2.png" alt="about" class="ms-lg-5" />
            </div>
          </div>
        </div>
      </div>
      <div class="shapes absolute top-0">
        <img src="@/assets/images/card2.png" alt="about" class="shape shape1" style="left: 30px" />
      </div>
    </section>

    <!-- How Section Starts Here -->
    <section class="bg_img relative lg:py-32 how_section_bg play_">
      <div class="container lg:max-w-7xl mx-auto pt-6 lg:pt-0  ">
        <div class="row flex flex-wrap lg:flex-nowrap justify-center">
          <div class="col-lg-6 w-full xl:w-1/2 px-1" style="flex: 0 0 auto">
            <div class="section-header mb-14 text-center text-white">
              <h2 class="section-header__title sm:text-[50px] text-3xl" style=" margin-top: -8px">
                {{ t('how_play') }}
              </h2>
              <p class="section-header__title">
                {{ t('how_txt') }}
              </p>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-8">
          <div v-for="n in 3" :key="n" class="text-center py-0 px-6 relative"
            :class="n === 3 ? '' : 'how-item before:border-none'">
            <div class="how-item__thumb flex items-center justify-center text-white">
              <UserAddIcon v-if="n === 1" class="h-10 w-10"></UserAddIcon>
              <CreditCardIcon v-else-if="n === 2" class="h-10 w-10"></CreditCardIcon>
              <PlayIcon v-else class="h-10 w-10"></PlayIcon>
              <div class="badge badge--lg badge--round rounded-[50%]">
                {{ n === 1 ? "01" : n === 2 ? "02" : n === 3 ? "03" : "" }}
              </div>
            </div>
            <div class="how-item__content text-center">
              <h4 class="title mb-1 text-xl font-bold">
                {{
                  n === 1
                  ? t('s')
                  : n === 2
                    ? t('c')
                    : n === 3
                      ? t('choose')
                      : ""
                }}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- How Section Ends Here -->
    <!-- How Section Starts Here -->
    <section class=" bg_img relative lg:py-32 how_section_bg">
      <div class="container lg:max-w-7xl mx-auto pt-8 lg:pt-0">
        <div class="row flex flex-wrap lg:flex-nowrap justify-center">
          <div class="col-lg-6 w-full xl:w-1/2 px-1" style="flex: 0 0 auto">
            <div class="section-header mb-14 text-center text-white">
              <h2 class="section-header__title sm:text-[50px] text-3xl" style=" margin-top: -8px">
                {{ t('down') }}
              </h2>
              <p class="section-header__title">
                {{ t('down_txt') }}
              </p>
            </div>
          </div>
        </div>
        <div class="sm:grid grid-cols-1 sm:grid-cols-4 gap-4 lg:gap-4 hidden">
          <div v-for="n in 4" :key="n" class="text-center py-0 px-6 relative">
            <div class=" flex items-center justify-center text-white mb-9 h-[210px]">
              <figure class="inline-block -mb-2 relative w-full">
                <vue-qrcode v-if="n == 1" :value="Global?.h5_game_url" class="sm:max-h-fit w-fit  rounded-t-lg" tag="img"
                  ref="Iosqr" :options="{
                    errorCorrectionLevel: 'Q',
                    width: 300,
                    type: 'png'
                  }"></vue-qrcode>
                <vue-qrcode v-if="n == 2" :value="Global?.ad" class="sm:max-h-fit w-fit  rounded-t-lg" tag="img"
                  ref="Iosqr" :options="{
                    errorCorrectionLevel: 'Q',
                    width: 300,
                    type: 'png'
                  }"></vue-qrcode>
                <vue-qrcode v-if="n == 3" :value="Global?.app_down" class="sm:max-h-fit w-fit  rounded-t-lg"
                  tag="img" ref="Iosqr" :options="{
                    errorCorrectionLevel: 'Q',
                    width: 300,
                    type: 'png'
                  }"></vue-qrcode>
                <vue-qrcode v-if="n == 4" :value="Global?.app_down" class="sm:max-h-fit w-fit  rounded-t-lg"
                  tag="img" ref="Iosqr" :options="{
                    errorCorrectionLevel: 'Q',
                    width: 300,
                    type: 'png'
                  }"></vue-qrcode>
                <img class="qrcode__image" src="@/assets/images/logo.png" alt="qrcode" />
              </figure>
            </div>

            <div class="how-item__content text-center ">
              <h4 v-if="n === 1" class="title mb-1 text-xl font-bold hover:text-[#FFC827]">{{ t('h5') }}</h4>
              <h4 v-else-if="n === 2" class="title mb-1 text-xl font-bold hover:text-[#FFC827]">{{ t('agent') }}</h4>
              <h4 v-else-if="n === 3" class="title mb-1 text-xl font-bold hover:text-[#FFC827]">{{ t('android') }}</h4>
              <button v-else-if="n === 4" class="z-20 title mb-1 text-xl font-bold cursor-pointer hover:text-[#FFC827]">{{
                t('ios') }}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- How Section Ends Here -->
    <!-- Footer Section Starts Here -->
    <footer class="footer-section relative bg_img footer_"
      style="   background-size: cover !important; background-repeat: no-repeat !important;  padding: 40px 0 35px;">
      <div class="footer-top">
        <div class="container relative lg:max-w-7xl mx-auto">
          <div class=" footer-wrapper flex flex-wrap items-center 
             md:justify-between justify-center sm:text-left text-center">
            <div class="logo mb-3 md:mb-0">
              <a class="inline-flex items-center text-white hover:text-[#FFC827]"><img
                  style="max-width: 180px; max-height: 60px" src="@/assets/images/logo.png" alt="logo" />
                <p class="ml-3">{{ t('brand') }}</p>
              </a>
            </div>
            <ul class="footer-links flex flex-wrap justify-center sm:justify-end">
              <li class="py-1 px-3">
                <a class="text-[#FFC827] cursor-pointer" @click="goGame">{{ t('pc') }}</a>
              </li>
              <li class="py-1 px-3">
                <a class="text-[#FFC827] cursor-pointer" :href="Global?.ad" target="_blank">{{ t('agent') }}</a>
              </li>
              <li class="px-3">

              </li>
              <!-- <li class="py-1 px-3">
              <a class="text-[#FFC827] cursor-pointer" :href="infoData[3]?.link" target="_blank">{{t('service')}}</a>
            </li> -->
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container relative lg:max-w-7xl mx-auto">
          <div class="footer-wrapper flex flex-wrap justify-center item-center text-center">
            <p class="copyright text-white px-5 sm:px-0">
              Copyrights &copy; 2010 - 2023 All Rights Reserved by
              <a class="text-[#FFC827] ml-2">{{ t('brand') }}</a>
            </p>
          </div>
        </div>
        <div class="shapes hidden xl:block">
          <img src="@/assets/images/footershape.png" alt="footer"
            class=" absolute right-0 bottom-1/3 xl:bottom-0 max-w-[100px] xl:max-w-[250px]" />
        </div>
      </div>
    </footer>
    <!-- Footer Section Ends Here -->
    <ModalDialog :show="showModal" @close="showModal = false">
      <div class="w-full p-10 bg-white overflow-y-scroll  h-[90vh] ">
        <p class="text-gray-700 text-lg font-bold py-1 tracking-wide text-center">ios安装教程</p>
        <div class="max-w-md ">
          <img src="@/assets/images/iosdownload.jpeg" alt="ios download">
        </div>
      </div>
    </ModalDialog>
    <!-- <div v-show="scY > 800" @click="toTop"
    class="fixed right-6  bottom-2 w-16 h-16 rounded-lg bg-[#F5951A] cursor-pointer p-1">
    <div>
      <div class="sidebar__kefu__2c9mp scroll_img h-full w-full text-center flex justify-center items-center ">
        <ArrowCircleUpIcon class=" text-center w-full h-[80%]"></ArrowCircleUpIcon>
      </div>
    </div>
  </div> -->
  </div>

  <!-- mobile -->
  <div class="sm:hidden bg__mobile relative ">

    <div class="w-full h-auto " style="border-bottom: 1px solid transparent">
      <div class="lg:max-w-7xl mx-auto px-0">
        <div class="md:py-5 w-full">
          <div class="flex flex-wrap items-center md:flex-nowrap justify-between md:justify-between px-3 ">
            <div class="img">
              <a @click="goService" class="flex flex-col md:flex-row  items-center md:py-4 px-2">
                <img src="@/assets/images/logo.png" alt="Logo" class="max-w-[150px] w-[70px] " />
                <!-- <span class=" font-semibold text-[#f3ba0f] first-letter:text-4xl md:text-lg uppercase ml-3">
                {{t('brand')}}
              </span> -->
              </a>
            </div>
            <div v-if="!loginState" class="flex items-center space-x-2">
              <router-link to="/login"
                class="flex items-center space-x-1 cursor-pointer transition duration-150 ease-in-out">
                <UserCircleIcon class="w-7 h-7 text-[#FFC827]"></UserCircleIcon>
                <span class=" font-semibold mt-[2px]">{{ t('login') }}</span>
              </router-link>
              <router-link to="/register"
                class="flex items-center space-x-1 mt-[2px] cursor-pointer transition duration-150 ease-in-out">
                <span class=" font-semibold">{{ t('register') }}</span>
              </router-link>
            </div>
            <div v-if="loginState" class="flex items-center">
              <div class="flex items-center space-x-1 mr-3">
                <!-- <span class="text-sm tracking-wider">用户名 :</span> -->
                <UserIcon class="w-6 h-6"></UserIcon>
                <span class="text-[#ffd33b]">{{ LoginResponseInfo?.username || '' }}</span>
              </div>
              <div class="flex items-center space-x-1 mr-3">
                <CurrencyYenIcon class="w-6 h-6"></CurrencyYenIcon>
                <span class="text-[#ffd33b]">{{ LoginResponseInfo?.balance || '0.00' }}</span>
              </div>
              <div @click="Logout" class="flex items-center space-x-1 mr-3 cursor-pointer">
                <LogoutIcon class="w-6 h-6"></LogoutIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-2 px-2  rounded-lg  shadow-lg">
      <Carousal></Carousal>
    </div>
    <div class="flex justify-center items-center flex-col py-3 space-y-5 px-2 select-none ">

      <div class=" w-full  h-32 bg-[#3f0e36]  mx-3 flex shadow-lg ">
        <div class="flex flex-col w-1/2  justify-center items-center space-y-2">
          <p class="font-bold tracking-wide text-lg text-[#FFC827] ">H5 登录入口</p>
          <a  @click="goDialog_Game(2)" class="px-5 py-2 bg-[#c4a447]  rounded-xl font-bold tracking-wide">现在播放</a>
        </div>
        <div class="w-1/2">
          <div class="card_bg"></div>
        </div>
      </div>
      <div class=" w-full  h-32 bg-[#3f0e36]  mx-3 flex shadow-lg">
        <div class="flex flex-col w-1/2  justify-center items-center space-y-2">
          <p class="font-bold tracking-wide text-lg text-[#FFC827] ">安卓苹果下载</p>
          <a :href="Global?.app_down" class="px-5 py-2 bg-[#c4a447]  rounded-xl font-bold tracking-wide">点击下载</a>
        </div>
        <div class="w-1/2">
          <div class="card_bg two"></div>
        </div>
      </div>
      <div class=" w-full  h-32 bg-[#3f0e36]  mx-3 flex shadow-lg">
        <div class="flex flex-col w-1/2  justify-center items-center space-y-2">
          <p class="font-bold tracking-wide text-lg text-[#FFC827] ">代理登录入口</p>
          <a :href="Global?.ad" class="px-5 py-2 bg-[#c4a447]  rounded-xl font-bold tracking-wide">点击进入</a>
        </div>
        <div class="w-1/2">
          <div class="card_bg three"></div>
        </div>
      </div>
      <div class=" w-full  h-32 bg-[#3f0e36]  mx-3 flex shadow-lg">
        <div class="flex flex-col w-1/2  justify-center items-center space-y-2">
          <p class="font-bold tracking-wide text-lg text-[#FFC827] ">诚信聊天下载</p>
          <a href="http://cx5577.com" class="px-5 py-2 bg-[#c4a447]  rounded-xl font-bold tracking-wide">点击下载</a>
        </div>
        <div class="w-1/2">
          <div class="card_bg four"></div>
        </div>
      </div>
    </div>

    <div>
      <footer class="footer-section   bg_img footer_ sm:hidden"
        style="   background-size: cover !important; background-repeat: no-repeat !important;  padding: 40px 0 35px;">

        <div>
          <div class="container relative lg:max-w-7xl mx-auto">
            <div class="footer-wrapper flex flex-wrap justify-center item-center text-center">
              <p class="copyright text-white px-5 sm:px-0">
                Copyrights &copy; 2010 - 2023 All Rights Reserved by
                <a class="text-[#FFC827] ml-2">{{ t('brand') }}</a>
              </p>
            </div>
          </div>
          <div class="shapes hidden xl:block">
            <img src="@/assets/images/footershape.png" alt="footer"
              class=" absolute right-0 bottom-1/3 xl:bottom-0 max-w-[100px] xl:max-w-[250px]" />
          </div>
        </div>
      </footer>
    </div>
    <!-- customer service -->
    <div  class="fixed right-5 bottom-[100px]   z-50 flex flex-col space-y-3">
      <li v-if="agentInfo?.customerAddr"  class="list-none w-[50px] h-[50px] cursor-pointer relative ">
        <div @click="goService(0)">
          <img src="@/assets/icon/ic_kf.svg" alt="" class="w-full h-full">
        </div>
      </li>

      <li v-if="agentInfo?.QQ"  class="list-none w-[50px] h-[50px] cursor-pointer relative ">
        <div @click="goService(1)">
          <img src="@/assets/icon/12.png" alt="" class="w-full h-full">
        </div>
        <div  v-if="IconNum == 1 && isshowQQ"
          class="absolute w-40   flex items-center text-center  px-2 leading-[30px] text-sm   -left-48   bg-[#3a3a3a] top-[10px]">
          <span  class="whitespace-normal break-words w-full">{{agentInfo?.QQ}}</span>
        </div>
      </li>
      <li v-if="agentInfo?.WXH"  class="list-none w-[50px] h-[50px] cursor-pointer relative ">
        <div @click="goService(2)">
          <img src="@/assets/icon/12.png" alt="" class="w-full h-full">
        </div>
        <div  v-if="IconNum == 2 && isshowWx"
          class="absolute w-40   flex items-center text-center  px-2 leading-[30px] text-sm   -left-48   bg-[#3a3a3a] top-[10px]">
          <span  class="whitespace-normal break-words w-full">{{agentInfo?.WXH}}</span>
        </div>
      </li>
      <li v-if="agentInfo?.phone"  class="list-none w-[50px] h-[50px] cursor-pointer relative ">
        <div @click="goService(3)">
          <img src="@/assets/icon/12.png" alt="" class="w-full h-full">
        </div>
        <div  v-if="IconNum == 3 && isshowPh"
          class="absolute w-40   flex items-center text-center  px-2 leading-[30px] text-sm   -left-48   bg-[#3a3a3a] top-[10px]">
          <span  class="whitespace-normal break-words w-full">{{agentInfo?.phone}}</span>
        </div>
      </li>
      
      <!-- <li v-if="agentInfo?.WXH" class="list-none w-[50px] h-[50px] cursor-pointer relative ">
        <div @click="goService(2)">
          <img src="@/assets/icon/ic_wechat.svg" alt="" class="w-full h-full">
        </div>
        <div v-if="IconNum == 2 && isshowWx"
          class="absolute  flex items-center text-center h-[30px] leading-[30px] text-sm left-[-220px] bg-[#3a3a3a] top-[10px]">
          <vue-qrcode  :value="agentInfo?.WXH" class=" rounded-t-lg" tag="img" ref="Iosqr" :options="{
            errorCorrectionLevel: 'Q',
            width: 200,
            type: 'png'
          }"></vue-qrcode>
        </div>
      </li> -->

      <!-- <li v-if="agentInfo?.phone" class="list-none w-[50px] h-[50px] cursor-pointer relative ">
        <div @click="goService(3)">
          <img src="@/assets/icon/ic_shouji.png" alt="" class="w-full h-full">
        </div>
        <div v-if="IconNum == 3 && isshowPh"
          class="absolute  flex items-center text-center h-[30px] leading-[30px] text-sm left-[-150px] bg-[#3a3a3a] top-[10px]">
          <span  class="w-[100px]">{{ agentInfo?.phone }}</span>
        </div>
      </li> -->


      <!-- <div v-if="isshowKefu &&   splitServiceUrl()?.length > 1"
          class="absolute  flex items-center text-white  text-center overflow-y-auto bottom-[0px]  leading-[30px] text-sm left-[-220px] bg-[#3a3a3a] ">
          <div class="w-[200px] py-2  px-2 max-h-80 h-full relative ">
            <div @click="isshowKefu = false" class="absolute right-2 ">
              <XIcon  class="w-5 z-10 h-5  bg-white rounded-full text-black p-[2px] "></XIcon>
            </div>
            
            <h2 class="text-center text-base tracking-wide text-[#FFC827]">选择客服</h2>
            <div v-for="(service, n) in splitServiceUrl()" :key="n" class="py-1 ">
              <div @click="clickService(service)" class="rounded-lg flex items-center text-sm  space-x-3 bg-[#5c5854] py-2">
                <img src="@/assets/images/service.png" alt="" class="w-10 ml-2  ">
                <div>{{serviceName(n)}}</div>
              </div>
            </div>
          </div>
        </div> -->
      <div v-if="isshowKefu &&  customer_service_link?.length > 0"
          class="absolute  flex items-center text-white  text-center overflow-y-auto bottom-[0px]  leading-[30px] text-sm left-[-220px] bg-[#3a3a3a] ">
          <div class="w-[200px] py-2  px-2 max-h-80 h-full relative ">
            <div @click="isshowKefu = false" class="absolute right-2 ">
              <XIcon  class="w-5 z-10 h-5  bg-white rounded-full text-black p-[2px] "></XIcon>
            </div>
            
            <h2 class="text-center text-base tracking-wide text-[#FFC827]">选择客服</h2>
            <div v-for="(service, n) in customer_service_link" :key="n" class="py-1 ">
              <div @click="clickService(service?.c_id)" class="rounded-lg flex items-center text-sm  space-x-3 bg-[#5c5854] py-2">
                <img src="@/assets/images/service.png" alt="" class="w-10 ml-2  ">
                <div>{{service.nickname}}</div>
              </div>
            </div>
          </div>
        </div>


    </div>


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
<!-- 
    <GameModalDialog :show="h5_selectGameDialog" @closegame="closeGameModal">
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


  </div>
</template>
<script setup>
import api from '@/network/allApi'
import { onMounted, ref, computed } from "vue";
import { LogoutIcon, CurrencyYenIcon, UserIcon, UserAddIcon, UserCircleIcon, CreditCardIcon, PlayIcon, ArrowCircleUpIcon, XIcon } from "@heroicons/vue/outline";
import ModalDialog from "@/components/ModalDialog.vue";
import GameModalDialog from "@/components/gameModal.vue";
import LanguageSwitch from "@/components/LanguageSwitch.vue";
import { useI18n } from 'vue-i18n'
import Carousal from '@/components/Carousal.vue';
import global from '@/network/global'
import AES from "@/network/aes";
 import {load} from '@/utils/loading'
import { useStore } from "vuex";
import {useRoute} from 'vue-router'

const { t } = useI18n();
console.log(t);
const store = useStore()
const route = useRoute()



const IconNum = ref(0)//show icon for qq,wx,ph
const isshowKefu = ref(false)//show icon for qq,wx,ph
const isshowQQ = ref(false)//show icon for qq,wx,ph
const isshowWx = ref(false)//show icon for qq,wx,ph
const isshowPh = ref(false)//show icon for qq,wx,ph
const isMenuOpen = ref(false);
const showModal = ref(false);
const scTimer = ref(0);
const agentInfo = ref(null)//agent info response
const scY = ref(0);
const infoData = ref([])

const customer_service_link = ref([])//loop to show customer service link

const selectGameModal = ref(false); //pc enter game
const h5_selectGameDialog = ref(false); // h5 enter game

const LoginResponseInfo = computed(() => store.getters["user/LOGIN_INFO"]);
const loginState = computed(() => store.getters["user/LOGIN_STATE"]);
const gameEnterInfo = computed(() => store.getters["user/GAME_USER_INFO"]);

const inviteCode_ = ref('') //to get agent info 

const Global = xxzz; // call unknow.js object as global


const mobileMenuOpen = () => {
    

  isMenuOpen.value = !isMenuOpen.value;
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const callData = () => {
  try {
    api.getDataInfo().then((res => {
      console.log(res)
      if (res.data.code == 200) {
        infoData.value = res.data.data
      }
    })).catch((e) => {
      console.log(e);
    })
  } catch (e) {
    console.log(e);
  }
};

const Logout = () => {
  window.location.reload()
}




function splitServiceUrl() {
  let url = agentInfo?.value?.customerAddr;
  let splitUrl = url?.split(",")
  return splitUrl
}

function GetAgentdata() {
  var en = global.en;
  const data = JSON.stringify({ code: inviteCode_.value });
  let endata = AES.encrypt(data, en);
  console.log(endata);
  api.GetAgentInfo({ data: endata })
    .then((res) => {
      var body = res?.data;
      var msg = JSON.parse(AES.decrypt(body, en));
      console.log(msg, "response msg of created");
      if (msg?.JsonData?.code == 200) {
        store.commit('user/Agent_Info', msg?.JsonData)
        agentInfo.value = msg?.JsonData
        const customer_id = extractSpecialIds(msg?.JsonData?.customerAddr);//get id from customerAddr like [2852,2853] etc

        CustomerService(msg?.JsonData?.Id,customer_id) //getting customer name 
      }
    })
    .catch((e) => {
      console.log(e);
    });
}

function extractSpecialIds(link) {
  //const link = "http://chat.royalgaming.today/#/?visiter_id=&avatar=&business_id=1&groupid=1&special=2857,http://chat.royalgaming.today/#/?visiter_id=&avatar=&business_id=1&groupid=1&special=2858"

  const urls = link?.split(",");
  const regex = /special=(\d+)/;
  
  return urls.map(url => {
    const match = url?.match(regex);
    return match ? parseInt(match[1]) : null;
  }).filter(id => id !== null);
}

function CustomerService(id,customerId) {
 // const customer_id = extractSpecialIds();

  var en = global.en_cu;
  const data = JSON.stringify({ "Id":id,"customer_id":JSON.stringify(customerId) });
   console.log(data)
  let endata = AES.encrypt(data, en);
  console.log(endata);
  api.GetServicLink({ data: endata })
    .then((res) => {
      var body = res?.data;
      var msg = JSON.parse(AES.decrypt(body, en));
      console.log(msg, "response msg of customer service");
      if (msg?.JsonData?.result == "ok" ) {
        customer_service_link.value = msg?.JsonData?.data
        //store.commit('user/Agent_Info', msg?.JsonData)
        //agentInfo.value = msg?.JsonData
      }
    })
    .catch((e) => {
      console.log(e);
    });
}



function toTop() {
  // message({ message: '为了您的账户安全，请先绑定手机号。', duration: 2 })
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const HowtoIos = () => {
  showModal.value = !showModal.value;
}

function handleScroll() {
  if (scTimer.value) return;
  scTimer.value = setTimeout(() => {
    scY.value = window.scrollY;
    clearTimeout(scTimer.value);
    scTimer.value = 0;
  }, 100);
}

const closeGameModal = () => {
  selectGameModal.value = false;
  h5_selectGameDialog.value = false;
  // router.push('/')
};


const goDialog_Game = (number) => {
  var gameEn = global?.gameEn;
  //var en = global.en_cu;
  let data = {
    name: gameEnterInfo?.value?.name,
    password: gameEnterInfo?.value?.pw,
  };
  var endata = AES.encrypt(JSON.stringify(data), gameEn);
 //var ennnnn= 'i9WxutVSKjI3DeaCt7exrqlMa7+OSTXEzjQrh3LGge/O/aDl0uleWJOLqZ/ISpaFMl0TXmF2koS5Uq5gG4k1wmRcjPzf2VceuxhACykS8/o='
  // var msg = JSON.parse(AES.decrypt(ennnnn, en));
  // console.log(msg);
  switch (number) {
    case 0:
      // if (
      //   agentInfo?.value?.gameAddr == null ||
      //   agentInfo?.value?.gameAddr == undefined ||
      //   agentInfo?.value?.gameAddr == ""
      // )
      //   return;
      if (loginState?.value) {
        window.open(
          Global.old_pc_game_url + `?token=${endata}`
        );
      } else {
        window.open(Global.old_pc_game_url + `?token=`);
      }
      closeGameModal();
      break;
    case 1:

      //   if (
      //   agentInfo?.value?.gameAddr == null ||
      //   agentInfo?.value?.gameAddr == undefined ||
      //   agentInfo?.value?.gameAddr == ""
      // )
      //   return;
      if (loginState?.value) {
        window.open(
          Global.new_pc_game_url + `?token=${endata}`
        );
      } else {
        window.open(Global.new_pc_game_url + `?token=`);
      }

      // window.open("http://www.hj888888.vip/");
      closeGameModal();
      break;
    case 2:
      //      if (
      //   agentInfo?.value?.h5Link == null ||
      //   agentInfo?.value?.h5Link == undefined ||
      //   agentInfo?.value?.h5Link == ""
      // )
      //   return;
      if (loginState?.value) {
        window.open(
          Global.h5_game_url + `?token=${endata}`
        );
      } else {
        window.open(Global.h5_game_url + `?token=`);
      }
      closeGameModal();
      break;
    case 3:
      // if (
      //   agentInfo?.value?.gameAddr == null ||
      //   agentInfo?.value?.gameAddr == undefined ||
      //   agentInfo?.value?.gameAddr == ""
      // )
      //   return;
      if (loginState?.value) {
        window.open(
          Global.new_pc_game_url + `?token=${endata}`
        );
      } else {
        window.open(Global.new_pc_game_url + `?token=`);
      }
      closeGameModal();
      break;

    default:
      break;
  }
};

const goGame = () => {
   selectGameModal.value = true;
}
const goGameH5 = () => {
  goDialog_Game(2)
  //h5_selectGameDialog.value = true
}

function serviceName(index) {
    // 游戏类型转换
    var msg = {
        0: '客服一',
        1: '客服二',
        2: '客服三',
        3: '客服四',
        4: '客服五',
        5: '客服六',
        6: '客服七',
        7: '客服八',
        8: '客服九',
        9: '客服十'
    }
    return msg[index]
}

function clickService(id) {
  console.log(id,"iddddd")
//here i am find for example id 2853 then find 2853 customer url from agentInfo?.value?.customerAddr
//const aa = "http://chat.royalgaming.today/#/?visiter_id=&avatar=&business_id=1&groupid=1&special=2852,http://chat.royalgaming.today/#/?visiter_id=&avatar=&business_id=1&groupid=1&special=2853,http://chat.royalgaming.today/#/?visiter_id=&avatar=&business_id=1&groupid=1&special=2854,http://chat.royalgaming.today/#/?visiter_id=&avatar=&business_id=1&groupid=1&special=2855,http://chat.royalgaming.today/#/?visiter_id=&avatar=&business_id=1&groupid=1&special=2856,http://chat.royalgaming.today/#/?visiter_id=&avatar=&business_id=1&groupid=1&special=2857,http://chat.royalgaming.today/#/?visiter_id=&avatar=&business_id=1&groupid=1&special=2858";

const link = agentInfo?.value?.customerAddr?.split(",").find(url => url.includes(`special=${id}`));

console.log(link,"linkkkkkkkkkkkkkk")
  let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=500,height=700,left=${window.screen.width / 2},top=${window.screen.width / 2}`;
  if (agentInfo?.value) {
    if (loginState?.value) {
      let loginId = LoginResponseInfo?.value?.Id;
      let loginName = LoginResponseInfo?.value?.username;
      let splitedUrl = link?.split("=");
      let nick_name = `&nick_name=${loginName}`;
      let cusUrl =
        splitedUrl[0] +
        "=" +
        loginId +
        splitedUrl[1] +
        "=" +
        splitedUrl[2] +
        "=" +
        splitedUrl[3] +
        "=" +
        splitedUrl[4] +
        "=" +
        splitedUrl[5] +
        nick_name;
      //window.open(cusUrl)
      window.open(cusUrl,"mywindow",params)
    } else {
     /// window.open(link)
     window.open(link,"mywindow",params)
    }
  }
  isshowKefu.value = false
}

const goService = (number) => {
  let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=500,height=700,left=${window.screen.width / 2},top=${window.screen.width / 2}`;
  IconNum.value = number
  //isShowIcon.value = !isShowIcon.value
  switch (number) {
    case 0:
      isshowWx.value = false
      isshowPh.value = false
      isshowQQ.value = false
      isshowKefu.value = !isshowKefu.value
      // if (splitServiceUrl()?.length == 1) {
      //   let url = agentInfo?.value?.customerAddr;
      //   if (agentInfo?.value) {
      //     if (loginState?.value) {
      //       let loginId = LoginResponseInfo?.value?.Id;
      //       let loginName = LoginResponseInfo?.value?.username;
      //       let splitedUrl = url?.split("=");
      //       let nick_name = `&nick_name=${loginName}`;
      //       let cusUrl =
      //         splitedUrl[0] +
      //         "=" +
      //         loginId +
      //         splitedUrl[1] +
      //         "=" +
      //         splitedUrl[2] +
      //         "=" +
      //         splitedUrl[3] +
      //         "=" +
      //         splitedUrl[4] +
      //         "=" +
      //         splitedUrl[5] +
      //         nick_name;
      //      // window.open(cusUrl)
      //       window.open(cusUrl,"mywindow",params)

      //     } else {
      //       //window.open(url)
      //       window.open(url,"mywindow",params)
      //     }
      //   }
      // }


      break;
    case 1:
      isshowKefu.value = false
      isshowWx.value = false
      isshowPh.value = false
      isshowQQ.value = !isshowQQ.value
      break;
    case 2:
      isshowKefu.value = false
      isshowQQ.value = false
      isshowPh.value = false
      isshowWx.value = !isshowWx.value
      break;
    case 3:
      isshowKefu.value = false
      isshowQQ.value = false
      isshowWx.value = false
      isshowPh.value = !isshowPh.value
      break;
    default:
      break;
  }
}

if (route?.query !== undefined && route.query?.InvCode !== undefined) {
  console.log(route.query.InvCode);
  inviteCode_.value = route.query.InvCode
  const inviteCode = route.query.InvCode;
  localStorage.setItem('inviteCode', inviteCode);
  // console.error(route.query.inviteCode + " route query from main.vue");
} 

onMounted(() => {
  // load.show('Loading...', 2000); // Show loading for 2 seconds

  //  load.hide()
  // setTimeout(() => {
  //   load.hide()
  // }, 3000);
  // var url = "xincs597.com";
  //var url = "www.23423.com";
   var url = "www.royalgaming.today";
   console.log(window.location,"ddddddd")
  //var url = window.location.host
  GetAgentdata()
  window.addEventListener("scroll", handleScroll);
  //CustomerService()
  // callData()
})
</script>
<style scoped>
.bg_img {
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

.how_section_bg {
  background-image: url(@/assets/images/howsection.jpg);
  background-repeat: no-repeat !important;
  background-size: cover;
}

.play_ {
  background-image: url(@/assets/images/homebg.png);
  background-repeat: no-repeat !important;

}

.footer_ {
  background-image: url(@/assets/images/footer.jpg);
}

.shape1 {
  position: absolute;
  /* top: 10px; */
  top: 100px;
  /* // left: -150px; */
  left: 150px;
  max-width: 250px;
  opacity: 0.25;
  z-index: 1;
}

.section-header__title {
  display: inline-block;
  color: #fff;
  margin-bottom: 15px;
  position: relative;
}

.section-header p {
  margin-bottom: 15px;
  font-size: 19px;
}

.how-section::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: #2e0327;
  opacity: 0.9;
}

@media only screen and (min-width: 1025px) {
  .how-item::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 0;
    border: 1px dashed rgba(255, 200, 39, 0.7);
    top: 60px;
  }
}

.how-item__thumb {
  width: 120px;
  height: 120px;
  background: #350b2d;
  border-radius: 50%;
  font-size: 46px;
  margin: 0 auto 30px;
  position: relative;
  box-shadow: -4.828px -4.828px 12px 0px rgb(255 200 39 / 40%),
    3px 5px 15px 0px rgb(255 82 1 / 20%);
}

.how-item__thumb:hover {
  background: linear-gradient(0deg, #ff9c19 40%, #ffdd2d 110%) !important;
  cursor: pointer;
  color: #000 !important;
}

.how-item__thumb .badge {
  position: absolute;
  right: -10px;
  top: 10px;
  width: 30px;
  height: 30px;
  color: #1f1f23 !important;
  background: linear-gradient(0deg, #ff9c19 40%, #ffdd2d 110%);
}

.badge.badge--round {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  line-height: 0.75;
  font-size: 14px;
  font-weight: 500;
}

.footer-bottom {
  padding-top: 55px;
  margin-top: 20px;
  border-top: 2px solid rgba(255, 200, 39, 0.1);
  position: relative;
}

.footer-bottom::before {
  content: "";
  position: absolute;
  inset: 0;
  height: 1px;
  background: linear-gradient(90deg,
      #fb0094,
      #0000ff,
      #00ff00,
      #ffff00,
      #fb0094,
      #0000ff,
      #00ff00,
      #ffff00,
      #fb0094);
  background-size: 500%;
  animation: animate 10s linear infinite;
}

@keyframes animate {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 500% 0;
  }
}

.qrcode__image {
  background-color: #fff;
  border: 0.25rem solid #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
  height: 15%;
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 15%;
}


.BtnUnit {
  width: 185px;
  height: 40px;
  border-radius: 5px;
  color: #FFF;
  background: rgba(0, 0, 0, 0);
  position: relative;
  margin-top: 7px;
  transition: background-color .6s;
  cursor: pointer;
  border: 1px solid #FFC827;
}

.BtnUnit .T1 {
  font-size: 16px;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.bg__mobile {
  background-image: url('@/assets/background.jpg');
  background-size: 100% 100%;
  background-color: #350b2d;
  height: 100%;
}

.card_bg {
  background-image: url('@/assets/1111.jpg');
  background-size: cover;
  height: 100%;
  width: 100%;
}

.two {
  background-image: url('@/assets/2222.jpg');
  background-size: cover;
}

.three {
  background-image: url('@/assets/3333.jpg');
  background-size: cover;
}

.four {
  background-image: url('@/assets/4444.jpg');
  background-size: cover;
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