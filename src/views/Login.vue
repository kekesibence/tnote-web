<template>
   <div class="container justify-content-center formok">
    <main class="form-singin ">
      <form @submit.prevent="submit">
        <h1>login</h1>

        <div class="form-group row">
          <input class="input"  type="email" name="email" placeholder="example@test.com" v-model="email" required/>
          <label>e-mail</label>
        </div>

        <div class="form-group row">
          <input class="input"  type="password" name="password" placeholder="password"  v-model="password" required/>
          <label>password</label>
        </div>

        <button class="submitBtn">submit</button>
        <p v-if="error">Hiba</p>
      </form>
    </main>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  /*name: "Login",
  components: {},
  setup() {
    const email = ref('')
    const password = ref('')
    //let error = false
    const error = ref(null);


    const router = useRouter()
    const store = useStore()

    const submit = async(e) => {
      try {
        await store.dispatch('login', {
          email: email.value,
          password: password.value
        })
        console.log('router elott')
        router.push('/')
      } catch(er) {
        error.value = err.value
      }
    }
    return { submit, email, password, error}
  },*/
   setup() {
    const email = ref('')
    const password = ref('')
    const error = ref(null);

    const router = useRouter()
    const store = useStore()

    const submit = async(e) => {
      try {
        await store.dispatch('login', {
          email: email.value,
          password: password.value
        })
        router.push('/')
      } catch(err) {
        error.value = err.value
      }
      
    }
    return { submit, email, password, error }
  }
}
</script>
