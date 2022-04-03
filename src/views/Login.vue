<template>
   <div class="container justify-content-center w-25">
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
    const email = ref('')
    const password = ref('')

    const router = useRouter();
    const submit = async (e) => {
      const form = new FormData(e.target);
      const inputs = Object.fromEntries(form.entries());
      const { data } = await axios.post("login", inputs, {
        withCredentials: true,
      });
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      await router.push("/");
    };

    return { submit, email, password }
  }
}
</script>
