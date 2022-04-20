<template>
    <div v-for="timetable in timetables" v-bind:key="timetable.id" class="bg-darkPurple hover:bg-purple-800 text-white hover:no-underline p-3 grid grid-cols-1 content-between rounded-xl h-80">
        <div class="max-w-sm rounded">
            <div class="kartyaCim font-semibold text-lg rounded-xl  bg-orange p-2 text-center">{{ timetable.name }}</div>
            <div class="mt-6 p-2 text-gray-300 text-sm line-clamp-2">vmi</div>
        </div>
        <div class="mt-6 mb-0 pb-2 px-2 flex justify-between">
            <div class="rounded-xl font-semibold text-xs">Updated: {{ timetable.updated_at.split("T")[0] }}</div>
            <button class="rounded font-semibold text-xs text-orange border-darkPurple hover:text-white p-2 border-1 bg-darkPurple hover:bg-orange" @click="setActiveTimetable(timetable)">View timetable</button>
        </div>
    </div>
</template>
<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";

export default {
  name: "Timetables",
  components: {},
  setup() {
    const store = useStore();
    const router = useRouter();
    
    function setActiveTimetable(timetable) {
      store.dispatch('setActiveTimetable', timetable),
      router.push('/timetableview')
    }

    return {
      user: computed(() => store.getters.getUser),
      isLoggedIn: computed(() => store.getters.isAuthenticated),
      getTimetables: store.dispatch('getTimetables'),
      timetables: computed(() => store.getters.getTimetableList),
      setActiveTimetable,
    };
  },
};
</script>
