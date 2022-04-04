 <template>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
   <div class="collapse navbar-collapse" id="navbarNav">
     <h1 id="navcim">TNote</h1>
    <div>
      <ul class="navbar-nav">
      <li class="nav-item p-3">
          <router-link style="text-decoration: none; color: inherit;" to="/">Home</router-link> 
      </li>
      <li class="nav-item p-3">
          <router-link style="text-decoration: none; color: inherit;" to="/register">Register</router-link> 
      </li>
      <li class="nav-item p-3">
          <router-link style="text-decoration: none; color: inherit;" to="/login">Login</router-link>
      </li>
    </ul>
  </div>
  <div>
    <ul class="navbar-nav">
    <li class="nav-item p-3">
        <router-link style="text-decoration: none; color: inherit;" to="/">Home</router-link> 
    </li>
    <li class="nav-item p-3">
       <span>Logged in as </span>
    </li>
    <li class="nav-item p-3">
        <button>Logout</button>
    </li>
    </ul>
  </div> 

  </div>
</nav>
</template>
<script>
export default {
  name: 'Navbar',
  components: { }
}
</script>

<style scoped>
#navcim {
  padding-left: 2%;
  font-weight: bold;
}
</style>