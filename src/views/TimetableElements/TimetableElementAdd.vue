<template>
    <div class="elementAdd" v-if="isLoggedIn">
        <h1 class="flex justify-center pt-16 text-xl w-full font-bold">Create new timetable element</h1>
            <div class="w-7/12 mx-auto">
                <div class="shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col border-1 border-black/50 mt-4">
                    <main class="form-login">
                        <form @submit.prevent="submit">
                        <div class="mb-4">
                            <label class="block text-grey-darker text-center text-sm font-bold mb-2" for="name">Element title:</label>
                            <input class="input shadow appearance-none border rounded-full w-full py-2 px-3 text-black"  type="text" placeholder="Title" v-model="title" required>
                        </div>

                        <div class="mb-4">
                            <label class="block text-grey-darker text-center text-sm font-bold mb-2" for="email">Element day</label>
                            <input class="input shadow appearance-none border rounded-full w-full py-2 px-3 text-black"  type="text" placeholder="Monday" v-model="day" required>
                        </div>

                        <div class="mb-4">
                            <label class="block text-grey-darker text-center text-sm font-bold mb-2" for="password">Element description</label>
                            <input class="input shadow appearance-none border border-red rounded-full w-full py-2 px-3 text-black mb-3"  type="text" placeholder="Descriptsion.." v-model="description" required>
                        </div>

                        <div class="mb-6">
                            <label class="block text-grey-darker text-center text-sm font-bold mb-2" for="passwordAgain">Element start</label>

                            <input class="input shadow appearance-none border border-red rounded-full w-full py-2 px-3 text-black mb-3" type="time" step="1" placeholder="HH:MM:SS" v-model="start" required>
                        </div>

                        <div class="mb-6">
                            <label class="block text-grey-darker text-center text-sm font-bold mb-2" for="passwordAgain">Element end</label>

                            <input class="input shadow appearance-none border border-red rounded-full w-full py-2 px-3 text-black mb-3" type="time" step="1" placeholder="HH:MM:SS" v-model="end" required>
                        </div>

                        <div class="mb-6">
                            <label class="block text-grey-darker text-center text-sm font-bold mb-2" for="passwordAgain">Element repeating</label>
                            <input type="checkbox" name="" id="" v-model="repeating" >
                        </div>

                        <div class="flex items-center justify-between">
                            <button class="submitBtn bg-orange font-bold rounded text-white  py-2 px-4">submit</button>
                        </div>
                        </form>
                    </main>
                </div>
         </div>
    </div>
    <div v-else>
        <NotLoggedIn/>
    </div>
</template>
<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import NotLoggedIn from "../../components/NotLoggedIn.vue"


export default {
  name: "TimetableElements",
  components: {
      NotLoggedIn
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const title = ref('')
    const day = ref('')
    const description = ref('')
    const start = ref('')
    const end = ref('')
    const repeating = ref('')

    const error = ref('')


    
    const submit = async(e) => {
         try {
        console.log("add")
        await store.dispatch('addTimetableElement', {
            title: title.value,
            day: day.value,
            description: description.value,
            start: start.value,
            end: end.value,
            repeating: repeating.value,
        })
        router.push('/timetableview')
      } catch(err) {
        error.value = err.value
      }
     /* try {
        await store.dispatch('addNote', {
          title: document.getElementById("title").value,
          content: document.getElementById("content").value,
          ownerId: store.getters.getUser.id,
        })
        router.push('/notes')
      } catch(err) {
      }
      */
    }
    return {
      submit,
      user: computed(() => store.getters.getUser),
      isLoggedIn: computed(() => store.getters.isAuthenticated),
      getnotes: store.dispatch('getNotes'),
      notes: computed(() => store.getters.getNoteList),
      title, day, description, start, end, repeating,
    };
  },
};
</script>

