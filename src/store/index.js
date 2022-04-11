import { createStore } from 'vuex'
import axios from 'axios'


const store = createStore({
  state: {
    user: null,
    token: null,
    noteList: [],
    note: {
      id: null,
      content: null,
      ownerId: null,
      title: null,
      updatedAt: null,
    },
    isAuthenticated: false
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload,
      console.log("User state change:", state.user)
    },
    setToken(state, payload) {
      state.token = payload,
      console.log("Token state changed:", state.token)
    },
    setIsAuthenticated(state, payload) {
      state.isLoggedIn = payload
      console.log("Logged In or Out")    
    },
    fillNoteList(state, payload) {
      state.noteList = payload
      console.log("Notes fill")
      console.log(state.noteList)
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
      const { data } = await axios.post("login", { email, password }, { withCredentials: true, });
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      console.log(data.user)
      if(data) {
        context.commit('setUser', data.user)
        context.commit('setToken', data.token)
      }
    },
    async logout(context) {
      console.log('logout')

      const user = null;
      const token = null;
      context.commit("setUser", user);
      context.commit("setToken", token)
    },
    async getNotes(context) {
      console.log('notes');
      axios.defaults.headers.common["Authorization"] = `Bearer ${this.getters.getToken}`;
      const response  = await axios.get('users/1/notes')
      context.commit("fillNoteList", response.data)
    }
  },
  getters: {
    isAuthenticated: state => !!state.user,
    getUser: (state) => state.user,
    getToken: (state) => state.token,
    getNoteList: (state) => state.noteList
  }
})

export default store
