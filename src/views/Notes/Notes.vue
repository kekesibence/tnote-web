<template>
    <div v-if="isLoggedIn">
        <h1 class="flex justify-center pt-16 text-xl w-full font-bold">{{ user.name }}'s notes</h1>
        <div class="py-10 px-10 mx-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:mid-cols-3 gap-10">
            <NoteCard/>
            <router-link to="/noteadd" class="bg-darkPurple p-3 rounded-xl hover:bg-purple-800 hover:no-underline h-80">
                <div class="max-w-sm rounded">
                    <div class="font-semibold text-lg rounded-xl bg-orange p-2 text-white text-center">Create new note</div>
                </div>
                <img class="pt-8 object-contain h-48 w-full" src="../../assets/addIcon.png" alt="">
            </router-link>   
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
import NoteCard from "../../components/NoteCard.vue"
import NotLoggedIn from "../../components/NotLoggedIn.vue"


export default {
  name: "Notes",
  components: {
      NoteCard,
      NotLoggedIn
  },
  setup() {
    const store = useStore();
    const router = useRouter();
     
    return {
      user: computed(() => store.getters.getUser),
      isLoggedIn: computed(() => store.getters.isAuthenticated),
      notes: computed(() => store.getters.getNoteList)
    };
  },
};
</script>
