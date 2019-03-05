import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from "js-cookie";
import { clearLoginInfo } from "@/libs/tool.js"
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    username: Cookies.get("username"),
    hasLogin: Cookies.get("username"),
    info: Cookies.get("userinfo"),
  },
  mutations: {
    setUsername(state, val) {
      Cookies.set("username", val);
      state.username = val
    },
    setLogin(state, val) {
      state.hasLogin = val
    },
    setLogout(state) {
      clearLoginInfo()
      state.hasLogin = false
      state.username = ''
    },
    setInfo(state,val) {
      Cookies.set("userinfo", val);
      state.info = val
    }
  }
})
export default store