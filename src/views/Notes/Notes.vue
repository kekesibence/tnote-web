<template>
    <div class="notes" v-if="isLoggedIn">
        <h2>You can see all of your notes here..</h2> 
    <div class="row px-5" v-for="rowIndex in Math.ceil(notes.length / 3)" v-bind:key="rowIndex.id">
            <div class="card col-sm-3" v-for="note in notes.slice(3 * (rowIndex - 1), 3 * rowIndex)" v-bind:key="note.id">
                <div class="card-body">
                    <div class="card-title"><h6>{{ note.title }}</h6></div>
                    <p class="card-subtitle">{{ note.content }}</p>
                    <router-link  class="card-footer" style="text-decoration: none; color: inherit;" to="/noteview"> 
                        <p>Updated at: {{ note.updated_at }}</p>
                    </router-link>
                </div>
            </div>
        </div>
        <router-link style="text-decoration: none; color: inherit;" to="/noteadd">Add new Note</router-link>
    </div> 
    <div v-else>
        <h2>Please log in before checking your notes</h2>
    </div>    
</template>

      <!--  -->
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
      getnotes: store.dispatch('getNotes'),
      notes: computed(() => store.getters.getNoteList)
    };
  },
};
</script>
