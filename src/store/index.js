import { createStore } from 'vuex'
import axios from 'axios'


const store = createStore({
  state: {
    user: null,
    token: null,
    note: null,
    noteList: [],
    timetable: null,
    timetableList: [],
    timetableElement: null,
    timetableElementList: [],
    isAuthenticated: false,
    activeNote: null,
    activeTimetable: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    setToken(state, payload) {
      state.token = payload
    },
    setIsAuthenticated(state, payload) {
      state.isLoggedIn = payload
    },
    fillNoteList(state, payload) {
      state.noteList = payload
    },
    fillTimetableList(state, payload) {
      state.timetableList = payload
    },
    fillTimetableElementsList(state, payload) {
      state.timetableElementList = payload
    },
    setActiveNote(state, payload) {
      state.activeNote = payload
    },
    setActiveTimetable(state, payload) {
      state.activeTimetable = payload
    },
    setActiveTimetableElement(state, payload) {
      state.activeTimetableElement = payload
    },
  },
  actions: {
    async register(context, { name, email, password } ) {

        const { data } = await axios.post("register", { name, email, password });
        if(data) {
          context.commit('setUser', data.user)
        }
    },
    async login(context, { email, password } ) {
      const { data } = await axios.post("login", { email, password }, { withCredentials: true, });
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      console.log(data.user)
      if(data) {
        context.commit('setUser', data.user)
        context.commit('setToken', data.token)
      }
    },
    async logout(context) {

      const user = null;
      const token = null;
      context.commit("setUser", user);
      context.commit("setToken", token)
    },
    async getNotes(context) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${this.getters.getToken}`;
      const response  = await axios.get(`users/${this.getters.getUser.id}/notes`)
      context.commit("fillNoteList", response.data)
      console.log(response.data)
    },
    async addNote(context, {title, content, ownerId }) {
      console.log('addNote');
      console.log(content, ownerId, title)
      axios.defaults.headers.common["Authorization"] = `Bearer ${this.getters.getToken}`;
      await axios.post('notes', { content, ownerId, title}, {withCredentials: true, });
    },
    async editNote(context, {title, ownerId, content }){
      axios.defaults.headers.common["Authorization"] = `Bearer ${this.getters.getToken}`;
      await axios.patch(`notes/${this.getters.getActiveNote.id}`, { content, ownerId, title}, {withCredentials: true, });
      context.commit("setActiveNote", null)
    },
    async deleteNote(context, id) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${this.getters.getToken}`;
      await axios.delete(`notes/${id}`, {withCredentials: true, });
    },
    async setActiveNote(context, note) {
      context.commit("setActiveNote", note)
    },
    async getTimetables(context) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${this.getters.getToken}`;
      const response  = await axios.get(`users/${this.getters.getUser.id}/timetables`)
      context.commit("fillTimetableList", response.data)
    },
    async setActiveTimetable(context, timetable) {
      context.commit("setActiveTimetable", timetable)
    },
    async getTimetableElements(context) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${this.getters.getToken}`;
      const id = this.getters.getActiveTimetable.id
      const response  = await axios.get(`timetables/${id}/selectedtimetable`)
      context.commit("fillTimetableElementsList", response.data)
    },
    
  },
  getters: {
    isAuthenticated: state => !!state.user,
    getUser: (state) => state.user,
    getToken: (state) => state.token,
    getNoteList: (state) => state.noteList,
    getActiveNote: (state) => state.activeNote,
    getTimetableList: (state) => state.timetableList,
    getActiveTimetable: (state) => state.activeTimetable,
    getTimetableElementList: (state) => state.timetableElementList,
    getActiveTimetableElement: (state) => state.activeTimetableElement,
  }
})

export default store
