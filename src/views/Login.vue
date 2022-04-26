<template>
<div>
<h1 class="flex justify-center pt-16 text-xl w-full font-bold">Login</h1>
  <div class="w-7/12 mx-auto -">
  <div class="shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col border-1 border-black/50 mt-4">
    <main class="form-login">
    <form @submit.prevent="submit">
      <div class="mb-4">
        <label class="block text-grey-darker text-center text-sm font-bold mb-2" for="email">
          E-mail address
        </label>
        <input class="input shadow appearance-none border rounded-full w-full py-2 px-3 text-black"  type="text" placeholder="example@mail.com" v-model="email" required>
      </div>

      <div class="mb-4">
        <label class="block text-grey-darker text-center text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input class="input shadow appearance-none border border-red rounded-full w-full py-2 px-3 text-black mb-3"  type="password" placeholder="***********" v-model="password" required>
        <label class="block text-red-700 text-center text-sm font-bold mt-0" v-show="error">E-mail or password incorrect</label>
      </div>
      <div class="flex items-center justify-between">
        <button class="submitBtn bg-orange font-bold rounded text-white  py-2 px-4">Submit</button>
      </div>
    </form>
    </main>
  </div>
</div>
</div>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: false,
      router: useRouter(),
      store: useStore()
    }
  },
  methods: {
    async submit(e) { 
        try {
          await this.$store.dispatch('login', {
            email: this.email,
            password: this.password
          })
          this.$router.push('/')
          } catch(err) {
            this.error = true
          }
        }
    }
  }
</script>
