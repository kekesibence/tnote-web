<template>
  <div class="home">
    <h1>Tervezett projekt elkészülés: Április 14.</h1>
    <h2>The logged in user: </h2>
      <router-link style="text-decoration: none; color: inherit;" to="/notes">Check notes</router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore} from 'vuex'



export default {
  setup() {
    const store = useStore()

  
  },
  name: 'Home',
  components: {},
  methods: {},
  computed: {}
}
</script>
