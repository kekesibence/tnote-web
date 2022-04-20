<template>
<div>
  <h1 class="flex justify-center pt-16 text-xl w-full font-bold">Register</h1>
  <div class="w-7/12 mx-auto">
  <div class="shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col border-1 border-black/50 mt-4">
    <main class="form-login">
    <form @submit.prevent="submit">
      <div class="mb-4">
        <label class="block text-grey-darker text-center text-sm font-bold mb-2" for="name">
          Full Name
        </label>
        <input class="input shadow appearance-none border rounded-full w-full py-2 px-3 text-black"  type="text" placeholder="Example Name" v-model="name" required>
      </div>

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
      </div>

      <div class="mb-6">
        <label class="block text-grey-darker text-center text-sm font-bold mb-2" for="passwordAgain">
          Password again
        </label>
        <input class="input shadow appearance-none border border-red rounded-full w-full py-2 px-3 text-black mb-3"  type="password" placeholder="***********" v-model="passwordAgain" required>
      </div>

      <div class="flex items-center justify-between">
        <button class="submitBtn bg-orange font-bold rounded text-white  py-2 px-4">submit</button>

        <router-link to="" class="inline-block align-baseline font-semibold hover:text-orange hover:no-underline text-sm" href="#">
          Forgot Password?
        </router-link>
      </div>
    </form>
    </main>
  </div>
</div>
</div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  setup() {
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const passwordAgain = ref('')

    const error = ref(null);

    const router = useRouter()
    const store = useStore()

    const submit = async(e) => {
      try {
        await store.dispatch('register', {
          name: name.value,
          email: email.value,
          password: password.value
        })
        router.push('/')
      } catch(err) {
        error.value = err.value
      }
      
    }
    return { submit, name, email, password, passwordAgain, error }
  }
}
</script>

