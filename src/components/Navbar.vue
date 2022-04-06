 <!--<template>
 <nav class="navbar navbar-expand-lg navbar-light bg-light" v-if="isLoggedIn" >
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <p><router-link class="nav-link" style="text-decoration: none; color: inherit;" to="/"><b class="sr-only">Home</b></router-link></p>
        </li>
         <li class="nav-item">
          <p><router-link class="nav-link" style="text-decoration: none; color: inherit;" to="/notes">Notes</router-link></p> 
        </li>
        <li class="nav-item">
          <p>Logged in as {{ user.name }}</p>
        </li>
        <li class="nav-item">
         <p class="navbar-item p-3 my-2 my-lg-0" @click="logoutClick" >Logout</p>
        </li>
      </ul>  
  </nav>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" v-else>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" style="text-decoration: none; color: inherit;" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" style="text-decoration: none; color: inherit;" to="/register">Register</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" style="text-decoration: none; color: inherit;" to="/login">Login</router-link>
        </li>
      </ul>
   </nav>-->
   <template>
      <nav class="navbar-custom navbar-expand-md " v-if="isLoggedIn">      
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav" >
                <li class="nav-item">
                  <router-link to="/" class="nav-item nav-link py-2 mx-2">Home</router-link>
                </li>  
                <li class="nav-item">
                  <router-link to="/notes" class="nav-item nav-link py-2 mx-2">Notes</router-link>
                </li>  
                <li class="nav-item">
                  <router-link to="/login" class="nav-item nav-link py-2 mx-2"><button @click="logoutClick">Logout</button></router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/user" class="nav-link py-2 mx-2" >User: {{ user.name }}</router-link>
                </li>
          </ul>
          </div>

      </nav>

      <nav class="navbar-custom navbar-expand-md " v-else>      
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav" >
                <li class="nav-item">
                  <router-link to="/" class="nav-item nav-link py-2 mx-2">Home</router-link>
                </li>  
                <li class="nav-item">
                  <router-link to="/register" class="nav-item nav-link py-2 mx-2">Register</router-link>
                </li>  
                <li class="nav-item">
                  <router-link to="/login"  class="nav-link py-2 mx-2">Login</router-link>
                </li>
          </ul>
          </div>
      </nav>
</template>

<script>
import { useStore} from 'vuex'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

export default {
  name: 'Navbar',
  components: { },
  setup() {
    const store = useStore()
    const router = useRouter()


    const logoutClick = () => {
      store.dispatch('logout')
      console.log('logout')
      router.push('/login')
    }

    return { 
      logoutClick, 
      user: computed(() => store.getters.getUser),
      isLoggedIn: computed(() => store.getters.isAuthenticated)  
    }
  }
}
</script>

<style >
.navbar-custom {
    background-color: #4433cc;
}

/* change the brand and text color */
.navbar-custom .navbar-brand,
.navbar-custom .navbar-text {
    color: white;
}

/* change the link color */
.navbar-custom .navbar-nav .nav-link {
    color: white;
}

/* change the color of active or hovered links */
.navbar-custom .nav-item.active .nav-link,
.navbar-custom .nav-item:focus .nav-link,
.navbar-custom .nav-item:hover .nav-link {
    color: red;
}

/* for dropdowns only */
.navbar-custom .navbar-nav .dropdown-menu {
    background-color: #ddaa11;
}

/* dropdown item text color */
.navbar-custom .navbar-nav .dropdown-item {
    color: red;
}

/* dropdown item hover or focus */
.navbar-custom .navbar-nav .dropdown-item:hover,
.navbar-custom .navbar-nav .dropdown-item:focus {
    color: #eeeeee;
    background-color: red;
}
</style>