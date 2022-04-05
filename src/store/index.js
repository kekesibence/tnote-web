import { createStore } from 'vuex'
import axios from 'axios'


const store = createStore({
  state: {
    user: null,
    isAuthenticated: false
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload,
      console.log("User state change:", state.user)
    },
    setIsAuthenticated(state, payload) {
      state.isLoggedIn = payload
      console.log("Logged In or Out")    
    }
  },
  actions: {
    async register(context, { name, email, password } ) {
        console.log('register')

        const { data } = await axios.post("register", { name, email, password });
        if(data) {
          context.commit('setUser', data.user)
        }
    },
    async login(context, { email, password } ) {
      console.log('login')
      const { data } = await axios.post("login", { email, password}, { withCredentials: true, });
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      console.log(data)
      if(data) {
        context.commit('setUser', data.user.proxy.user)
      }
    },
    async logout(context) {
      console.log('logout')

      const user = null;
      context.commit("setUser", user);
    }
  },
  getters: {
    isAuthenticated: state => !!state.user,
    getUser: (state) => state.user,
  }
})

export default store
