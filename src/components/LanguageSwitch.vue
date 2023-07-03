<template>
  <Menu as="div" class="ml-3 relative z-20 w-fit">
    <div>
      <MenuButton title=" switch language" class="bg-[#f3ba0f] flex w-8 h-8 text-sm rounded-full justify-center 
      items-center focus:outline-none focus:ring-2 focus:ring-offset-2 
      focus:ring-offset-gray-800 focus:ring-primary">
        <!-- <span class="sr-only">Change</span> -->
        <TranslateIcon title="language" class="w-5 h-5 text-slate-600"></TranslateIcon>
        <!-- <img class="h-8 w-8 rounded-full" src="@/assets/lang.svg" alt /> -->
      </MenuButton>
    </div>
    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform
     opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems class="origin-top-right absolute right-0 mt-2 w-fit h rounded-md shadow-lg py-1 bg-[#C76F0B] ring-1
       ring-black ring-opacity-5 focus:outline-none">
        <MenuItem>
          <div class="w-full p-4 whitespace-nowrap ">
            <div class="w-full  mx-auto">
              <RadioGroup v-model="lang" @click="changeLanguage()">
                <RadioGroupLabel class="sr-only">Server size</RadioGroupLabel>
                <div class="space-y-2">
                  <RadioGroupOption as="template" value="cz" v-slot="{ active, checked }">
                    <div :class="[
                active
                  ? 'ring-2 ring-offset-2 ring-offset-primary ring-white ring-opacity-60'
                  : '',
                checked ? 'bg-[#2e0327] bg-opacity-75 text-white ' : 'bg-slate-900  ',
              ]" class="relative text-white flex w-fit px-7 py-3 rounded-lg shadow-md cursor-pointer focus:outline-none">
                      <div class="flex items-center justify-between w-full">
                        <div class="flex items-center">
                          <div class="text-sm flex items-center justify-center space-x-3 w-fit">
                            <RadioGroupLabel as="p" :class="checked ? 'text-white' : 'text-white'" class="font-medium w-fit">{{t('zh')}}</RadioGroupLabel>
                            <img src="@/assets/icon/china.webp" alt class="w-8 h-8" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </RadioGroupOption>
                  <RadioGroupOption as="template" value="en" v-slot="{ active, checked }">
                    <div :class="[
                active
                  ? 'ring-2 ring-offset-2 ring-offset-primary ring-white ring-opacity-60'
                  : '',
                checked ? 'bg-[#2e0327] bg-opacity-75 text-white ' : 'bg-slate-900  ',
              ]" class="relative text-white flex w-fit px-7 py-3 rounded-lg shadow-md cursor-pointer focus:outline-none">
                      <div class="flex items-center justify-between w-full">
                        <div class="flex items-center">
                          <div class="text-sm flex items-center justify-center space-x-3 w-fit">
                            <RadioGroupLabel as="p" :class="checked ? 'text-white' : 'text-white'" class="font-medium w-fit" >{{t('en')}}</RadioGroupLabel>
                            <img src="@/assets/icon/usa-flag.webp" alt class="w-8 h-8" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup>
            </div>
          </div>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupDescription,
  RadioGroupOption,
} from "@headlessui/vue";
import {
  BellIcon,
  MenuIcon,
  XIcon,
  SelectorIcon,
  CheckIcon,
  SearchIcon,
  TranslateIcon 
} from "@heroicons/vue/outline";
import { useI18n } from "vue-i18n";
import { onMounted, reactive, ref, watch, computed } from "vue";
export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    RadioGroup,
    RadioGroupLabel,
    RadioGroupDescription,
    RadioGroupOption,
    BellIcon,
    MenuIcon,
    XIcon,
    SelectorIcon,
    CheckIcon,
    SearchIcon,
    TranslateIcon
  },
  setup() {
   const { t } = useI18n();
    const lang = ref(localStorage.getItem("l") || "cz");
    const changeLanguage = () => {
      console.log("l;ee");
      localStorage.setItem("l", lang.value);
      window.location.reload();
    };
    return {
      lang,
      changeLanguage,
      t
    };
  },
};
</script>

<style lang="scss" scoped>
</style>