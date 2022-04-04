import { createStore } from 'vuex'
import axios from 'axios'


const store = createStore({
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      console.log("User state change:", state.user)
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

      if(data) {
        context.commit('setUser', data.user)
      }
  }
  }
})

export default store
