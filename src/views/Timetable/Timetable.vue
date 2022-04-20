<template>
    <div v-if="isLoggedIn">
        <h1 class="flex justify-center pt-16 text-xl w-full font-bold">{{ user.name }}'s timetables</h1>
        <div class="py-10 px-10 mx-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:mid-cols-3 gap-10">
            <TimetableCard/>   
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
import TimetableCard from "../../components/TimetableCard.vue"
import NotLoggedIn from "../../components/NotLoggedIn.vue"


export default {
  name: "Timetable",
  components: {
      TimetableCard,
      NotLoggedIn
  },
  setup() {
    const store = useStore();
    const router = useRouter();
     

    return {
      user: computed(() => store.getters.getUser),
      isLoggedIn: computed(() => store.getters.isAuthenticated),
      getTimetables: store.dispatch('getTimetables'),
      notes: computed(() => store.getters.getNoteList)
    };
  },
};
</script>
