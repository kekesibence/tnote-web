import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import NoteView from '../views/Notes/NoteView.vue'
import Notes from '../views/Notes/Notes.vue'
import NoteEdit from '../views/Notes/NoteEdit.vue'
import NoteAdd from '../views/Notes/NoteAdd.vue'




const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/noteview',
    name: 'noteview',
    component: NoteView
  },
  {
    path: '/notes',
    name: 'notes',
    component: Notes
  },
  {
    path: '/noteadd',
    name: 'noteadd',
    component: NoteAdd
  },
  {
    path: '/noteedit',
    name: 'noteedit',
    component: NoteEdit
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
