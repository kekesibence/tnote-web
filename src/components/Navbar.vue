 <template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" v-if="isLoggedIn">
    <div class="collapse navbar-collapse" id="navbarNav">
      <table class="table table-dark p-0">
        <thead>
          <tr>
            <th scope="col "><p class="navbar-item p-3"><router-link style="text-decoration: none; color: inherit;" to="/">Tnote</router-link></p></th>
            <th scope="col"><p class="navbar-item p-3"><router-link style="text-decoration: none; color: inherit;" to="/notes">Notes</router-link></p></th>
            <th scope="col"><p class="navbar-item p-3" >Logged in as:  {{ user.name }} </p></th>
            <th scope="col"><p class="navbar-item p-3" @click="logoutClick" >Logout</p></th>
          </tr>
        </thead>
      </table>

    </div> 
  </nav>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" v-else>
    <div class="collapse navbar-collapse" id="navbarNav">
      <table class="table table-dark p-0 m-0">
        <thead>
          <tr>
            <th scope="col px-0"><p class="navbar-item p-3 mb-0"><router-link style="text-decoration: none; color: inherit;" to="/">Tnote</router-link></p></th>
            <th scope="col px-0"><p class="navbar-item p-3 mb-0"><router-link style="text-decoration: none; color: inherit;" to="/notes">Notes</router-link></p></th>
            <th scope="col px-0"><p class="navbar-item p-3 mb-0" ><router-link style="text-decoration: none; color: inherit;" to="/register">Register</router-link></p></th>
            <th scope="col px-0"><p class="navbar-item p-3 mb-0" ><router-link style="text-decoration: none; color: inherit;" to="/login">Login</router-link></p></th>
          </tr>
        </thead>
      </table>
          
    </div> 
  </nav>
</template>
<script>
import { useStore} from 'vuex'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

export default {
  name: 'Navbar',
  components: { },
  setup() {
    const store = useStore()
    const router = useRouter()


    const logoutClick = () => {
      store.dispatch('logout')
      router.push('/')
    }
    
    return { 
      logoutClick, 
      user: computed(() => store.getters.getUser),
      isLoggedIn: computed(() => store.getters.isAuthenticated)  
    }
  }
}
</script>

<style scoped>
#navcim {
  padding-left: 2%;
  font-weight: bold;
}
</style>