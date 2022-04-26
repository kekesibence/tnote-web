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
        <input class="input shadow appearance-none border rounded-full w-full py-2 px-3 text-black"  type="text" placeholder="Example Name" v-model="username" required>
        <label class="block text-red-700 text-center text-sm font-bold mt-2" v-show="nameError">Name must be 5 characters</label>
      </div>

      <div class="mb-4">
        <label class="block text-grey-darker text-center text-sm font-bold mb-2" for="email">
          E-mail address
        </label>
        <input class="input shadow appearance-none border rounded-full w-full py-2 px-3 text-black"  type="text" placeholder="example@mail.com" v-model="email" required>
        <label class="block text-red-700 text-center text-sm font-bold mt-2" v-show="emailError">Please use a valid email address</label>
      </div>

      <div class="mb-4">
        <label class="block text-grey-darker text-center text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input class="input shadow appearance-none border border-red rounded-full w-full py-2 px-3 text-black mb-3"  type="password" placeholder="***********" v-model="password" required>
        <label class="block text-red-700 text-center text-sm font-bold mt-2" v-show="passwordError">Password must be 8 characters</label>
      </div>

      <div class="mb-6">
        <label class="block text-grey-darker text-center text-sm font-bold mb-2" for="passwordAgain">
          Password again
        </label>
        <input class="input shadow appearance-none border border-red rounded-full w-full py-2 px-3 text-black mb-3"  type="password" placeholder="***********" v-model="passwordAgain" required>
        <label class="block text-red-700 text-center text-sm font-bold mt-2" v-show="passwordAgainError">Password must match</label>
      </div>

      <div class="flex items-center justify-between">
        <button class="submitBtn bg-orange font-bold rounded text-white  py-2 px-4">submit</button>
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
  data() {
    return {
      username: '',
      email: '',
      password: '',
      passwordAgain: '',
      nameError: false,
      emailError: false,
      passwordError: false,
      passwordAgainError: false,
      router: useRouter(),
      store: useStore()
    }
  },
  methods: {
    async submit(e) { 
      if(this.username.length < 5) {
        this.nameError = true
      }else {
        this.nameError = false
      }
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) 
      {
        this.emailError = true
      }else{
        this.emailError = false
      }
      if(this.password.length < 8){
        this.passwordError = true
      } else {
        this.passwordError = false
      }
      if (this.password != this.passwordAgain) {
        this.passwordAgainError = true
      }else {
        this.passwordAgainError = false
      }
      if (!this.nameError && !this.emailError && !this.passwordError && !this.passwordAgainError)  {
        try {
          await this.$store.dispatch('register', {
            name: this.username,
            email: this.email,
            password: this.password
          })
          this.$router.push('/')
          } catch(err) {
              console.log(err)
          }
        }
      }
    }
  }
  /*setup() {
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const passwordAgain = ref('')
    const error = ref('')



    const router = useRouter()
    const store = useStore()  
    let nameError = false
    let passwordError = false
    let passwordAgainError = false

    function validate() {
      if(name.value.length < 5) {
        console.log(name.value.length)
        nameError = true
      }else {
        nameError = false
      }
      console.log(nameError)
    }
    const submit = async(e) => {  
      console.log("val start")
      if(validate()){
        console.log("jo")
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
    }
    return { submit, name, email, password, passwordAgain, error, nameError, passwordError, passwordAgainError }
  }
}*/
</script>

