<template>
  <div class="home">
    <h2>Home</h2>
      <router-link style="text-decoration: none; color: inherit;" to="/notes">Check notes</router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore} from 'vuex'



export default {
  setup() {
    const store = useStore()
    const user  = store.getters.getUser

  },
  name: 'Home',
  components: {},
  methods: {},
  computed: {}
}
</script>
