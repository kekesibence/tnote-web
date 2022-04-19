<template>
    <div v-for="note in notes" v-bind:key="note.id" class="bg-darkPurple hover:bg-purple-800 text-white hover:no-underline p-3 grid grid-cols-1 content-between rounded-xl h-80">
        <div class="max-w-sm rounded">
            <div class="kartyaCim font-semibold text-lg rounded-xl  bg-orange p-2 text-center">{{ note.title }}</div>
            <div class="mt-6 p-2 text-gray-300 text-sm line-clamp-2">{{ note.content }}</div>
        </div>
        <div class="mt-6 mb-0 pb-2 px-2 flex justify-between">
            <div class="rounded-xl font-semibold text-xs">Updated: {{ note.updated_at.split("T")[0] }}</div>
            <button class="rounded font-semibold text-xs text-orange border-darkPurple hover:text-white p-2 border-1 bg-darkPurple hover:bg-orange" @click="setActiveNote(note)">View note</button>
        </div>
    </div>
</template>
<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";

export default {
  name: "Notes",
  components: {},
  setup() {
    const store = useStore();
    const router = useRouter();
    
    function setActiveNote(note) {
      store.dispatch('setActiveNote', note)
      router.push("/noteview")
    }
    return {
      setActiveNote,
      user: computed(() => store.getters.getUser),
      isLoggedIn: computed(() => store.getters.isAuthenticated),
      getnotes: store.dispatch('getNotes'),
      notes: computed(() => store.getters.getNoteList)
    };
  },
};
</script>
