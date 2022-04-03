<template>
   <div class="container justify-content-center w-25">
    <main class="form-login">
      <form @submit.prevent="submit">
        <h1>Sign up</h1>

        <div class="form-group row">
          <input name="name" type="name" placeholder="Example Name" v-model="name" required/>
          <label>Name</label>
        </div>

        <div class="form-group row">
          <input type="email" name="email" placeholder="example@test.com" v-model="email" required/>
          <label>E-mail</label>
        </div>

        <div class="form-group row">
          <input type="password" name="password" placeholder="Password" v-model="password" required/>
          <label>Password</label>
        </div>

        <button class="btn btn-danger">Submit</button>
      </form>
    </main>
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const name = ref('')
    const email = ref('')
    const password = ref('')

    const router = useRouter()

    const submit = async (e) => {
      console.log(name.value, email.value, password.value)
      const form = new FormData(e.target);
      const inputs = Object.fromEntries(form.entries());
      await axios.post("register", inputs);
      await router.push("/login");
    }
    
    return { submit, name, email, password }
  }
}
</script>

