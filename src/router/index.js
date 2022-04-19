import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import NoteView from '../views/Notes/NoteView.vue'
import Notes from '../views/Notes/Notes.vue'
import NoteEdit from '../views/Notes/NoteEdit.vue'
import NoteAdd from '../views/Notes/NoteAdd.vue'
import User from '../views/User/User.vue'
import Timetable from '../views/Timetable/Timetable.vue'

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
  },
  {
    path: '/user',
    name: 'user',
    component: User
  },
  {
    path: '/timetable',
    name: 'user',
    component: Timetable
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
