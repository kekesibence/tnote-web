<template>
  <div class="relative"> 
    <button class="relative z-10 block h-9 w-9 overflow-hidden" @click="isOpen =!isOpen">
      <img class="h-full w-full object-cover " src="../assets/profil.png" alt="profilkep" />
    </button>
    <button v-if="isOpen" @click="isOpen = false" class="fixed inset-0 w-full h-full bg-black opacity-30 cursor-default"></button>
    <div v-if="isOpen" class="absolute right-0 mt-2 py-2 w-48  bg-violet-900 rounded-lg shadow-xl">
      <router-link class="block px-4 py-1 hover:text-orange hover:no-underline font-semibold" to="/">{{ user.name }}</router-link>
      <router-link class="block px-4 py-1 hover:text-orange hover:no-underline text-sm"  to="/">Contact support</router-link>
      <button class="block px-4 py-1 hover:text-orange hover:no-underline text-sm"  @click="logoutClick">Logout</button>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";

export default {
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
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
