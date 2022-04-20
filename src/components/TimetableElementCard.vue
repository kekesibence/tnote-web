<template>
    <div v-for="element in elements" v-bind:key="element.id" class="bg-darkPurple hover:bg-purple-800 text-white hover:no-underline p-3 grid grid-cols-1 content-between border-2 border-white hover:border-none h-54">
        <div class="w-full rounded">
            <div class="kartyaCim font-semibold text-lg rounded-xl  bg-orange p-2 text-center">{{ element.title }}</div>
            <div class="rounded-xl font-semibold text-xs py-1">{{ element.day }}</div>
            <div class="rounded-xl font-semibold text-xs py-1">{{ element.description }}</div>
            <div class="rounded-xl font-semibold text-xs py-1">{{ element.start }}</div>
            <div class="rounded-xl font-semibold text-xs py-1">{{ element.end }}</div>
            <div class="rounded-xl font-semibold text-xs py-1">{{ element.repeating }}</div>
            <button class="rounded font-semibold text-xs text-orange border-darkPurple hover:text-white p-2 border-1 bg-darkPurple hover:bg-orange" @click="setActiveTimetableElement(element)">View element</button>
        </div>
    </div>
</template>
<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";

export default {
  name: "TimetableElement",
  components: {},
  setup() {
    const store = useStore();
    const router = useRouter();

    function setActiveTimetableElement(element) {
      store.dispatch('setActiveTimetableElement', element)
      router.push("/timetableelementview")
    }    

    return {
      user: computed(() => store.getters.getUser),
      isLoggedIn: computed(() => store.getters.isAuthenticated),
      getTimetableElements: store.dispatch('getTimetableElements'),
      elements: computed(() => store.getters.getTimetableElementList),
      setActiveTimetableElement
    };
  },
};
</script>
