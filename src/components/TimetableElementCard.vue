<template>
    <div v-for="element in elements" v-bind:key="element.id" class="bg-darkPurple hover:bg-purple-800 text-white hover:no-underline p-3 grid grid-cols-1 content-between rounded-xl h-80">
        <div class="max-w-sm rounded">
            <div class="kartyaCim font-semibold text-lg rounded-xl  bg-orange p-2 text-center">{{ element.title }}</div>
            <div class="rounded-xl font-semibold text-xs">{{ element.ttid }}</div>
            <div class="rounded-xl font-semibold text-xs">{{ element.day }}</div>
            <div class="rounded-xl font-semibold text-xs">{{ element.description }}</div>
            <div class="rounded-xl font-semibold text-xs">{{ element.start }}</div>
            <div class="rounded-xl font-semibold text-xs">{{ element.end }}</div>
            <div class="rounded-xl font-semibold text-xs">{{ element.repeating }}</div>
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

    return {
      user: computed(() => store.getters.getUser),
      isLoggedIn: computed(() => store.getters.isAuthenticated),
      getTimetableElements: store.dispatch('getTimetableElements'),
      elements: computed(() => store.getters.getTimetableElementList),

    };
  },
};
</script>
