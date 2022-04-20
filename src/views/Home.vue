<template>
     <div v-if="isLoggedIn">
        <h1 class="flex justify-center pt-16 mt-6 text-2xl w-full font-bold">Welcome {{ user.name }}</h1>
        <div class="py-10 px-10 mx-5 ">
          <div class="grid grid-cols-1 text-center">
            <router-link to="/notes" class="font-semibold hover:text-orange hover:no-underline text-sm py-3" >Check your note ;)</router-link>
            <router-link to="/timetable" class="font-semibold hover:text-orange hover:no-underline text-sm" >Check your timetable :o</router-link>
          </div>
        </div>
    </div>
    <div v-else>
        <NotLoggedIn/>
    </div>   
</template>
<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";
import NotLoggedIn from "../components/NotLoggedIn.vue"


export default {
  name: "Notes",
  components: {
      NotLoggedIn
  },
  setup() {
    const store = useStore();
    const router = useRouter();
     
    return {
      user: computed(() => store.getters.getUser),
      isLoggedIn: computed(() => store.getters.isAuthenticated),
    };
  },
};
</script>
