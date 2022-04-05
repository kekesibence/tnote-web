<template>
   <div class="container justify-content-center w-25 p-4">
    <main class="form-singin ">
      <form @submit.prevent="submit">
        <h1>Log in</h1>

        <div class="form-group row">
          <input type="email" name="email" placeholder="example@test.com" v-model="email" required/>
          <label>E-mail</label>
        </div>

        <div class="form-group row">
          <input type="password" name="password" placeholder="Password"  v-model="password" required/>
          <label>Password</label>
        </div>

        <button class="btn btn-danger">Submit</button>
        <p v-if="error == true">Hiba</p>
      </form>
    </main>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: "Login",
  components: {},
  setup() {
    const email = ref('')
    const password = ref('')
    let error = false

    const router = useRouter()
    const store = useStore()

    const submit = async(e) => {
      try {
        await store.dispatch('login', {
          email: email.value,
          password: password.value
        })
        router.push('/')
      } catch(er) {
        error = true
        console.log(error)
      }
    }
    return { submit, email, password, error}
  },
}
</script>
