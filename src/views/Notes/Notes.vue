<template>
    <div class="notes" v-if="isLoggedIn">
        <h2>You can see all of your notes here..</h2>
        <div class="px-5">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <router-link style="text-decoration: none; color: inherit;" to="/noteview">View note</router-link>
                </div>
            </div>
        </div>
        <router-link style="text-decoration: none; color: inherit;" to="/noteadd">Add new Note</router-link>
    </div>

    <div v-else>
        <h2>Please log in before checking your notes</h2>
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

    return {
      user: computed(() => store.getters.getUser),
      isLoggedIn: computed(() => store.getters.isAuthenticated),
    };
  },
};
</script>
