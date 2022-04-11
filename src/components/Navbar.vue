<template>
  <!--<nav class="navbar-custom navbar-expand-md" v-if="isLoggedIn">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#collapsibleNavbar"
    >
      <img id="navbar-logo" src="menu.png" />
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <div class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-item nav-link py-2 mx-2"
            >Home</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/notes" class="nav-item nav-link py-2 mx-2"
            >Notes</router-link
          >
        </li>

        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img id="dropdown-logo" src="profil.png" />
          </a>

          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link to="/login" class="dropdown-item"
              ><button @click="logoutClick">Logout</button></router-link
            >
            <div class="dropdown-divider"></div>
            <router-link to="/user" class="dropdown-item">{{
              user.name
            }}</router-link>
          </div>
        </li>
      </div>
    </div>
  </nav>-->    
  <nav class="navbar navbar-expand-md navbar-custom" v-if="isLoggedIn">
    <div class="collapse navbar-collapse w-100" id="collapsibleNavbar">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/notes">notes</router-link>
        </li>
        
      </ul>
    </div>
    <div class="mx-auto order-0">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <img id="navbar-logo" src="menu.png" />
      </button>
    </div>

    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img id="dropdown-logo" src="profil.png" />
          </a>

          <div class="dropdown-menu dropdown-menu-right">
            <router-link to="/login" class="dropdown-item">
              <button @click="logoutClick" id="profileBtn">Logout</button></router-link>
            <div class="dropdown-divider"></div>
            <router-link to="/user" class="dropdown-item">
              {{ user.name }}
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </nav>

  <nav class="navbar navbar-expand-md navbar-custom" v-else>
    <div class="collapse navbar-collapse w-100" id="collapsibleNavbar">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/register">register</router-link>
        </li>
      </ul>
    </div>
    <div class="mx-auto order-0">
      <button class="navbar-toggler" type="button"  data-toggle="collapse" data-target="#collapsibleNavbar">
      <img id="navbar-logo" src="menu.png" />
    </button>
    </div>
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/about">about us</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";

export default {
  name: "Navbar",
  components: {},
  setup() {
    const store = useStore();
    const router = useRouter();

    const logoutClick = () => {
      store.dispatch("logout");
      console.log("logout");
      router.push("/login");
    };

    return {
      logoutClick,
      user: computed(() => store.getters.getUser),
      isLoggedIn: computed(() => store.getters.isAuthenticated),
    };
  },
};
</script>

<style >
</style>