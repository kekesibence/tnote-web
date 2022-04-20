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
                            <select id="days" name="days" class="input shadow appearance-none border rounded-full w-full py-2 px-3 text-black" placeholder="Monday" v-model="day" required>
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>                                
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>
                                <option value="Sunday">Sunday</option>
                            </select>
                        </div>

                        <div class="mb-4">
                            <label class="block text-grey-darker text-center text-sm font-bold mb-2" for="password">Element description</label>
                            <input class="input shadow appearance-none border border-red rounded-full w-full py-2 px-3 text-black mb-3"  type="text" placeholder="Descriptsion.." v-model="description" required>
                        </div>

                        <div class="mb-6">
                            <label class="block text-grey-darker text-center text-sm font-bold mb-2" for="passwordAgain">Element start</label>
                            
                            <div class="input shadow appearance-none border border-red rounded-full w-full py-0 px-3 text-black mb-3 bg-white">
                                <label class="block bg-white text-black text-sm font-bold my-2">
                                    <input placeholder="12" class="text-black text-center border-1 rounded mx-1" type="number" min="0" max="23" v-model="startHours"> Hours 
                                    <input placeholder="00" class="text-black text-center border-1 rounded mx-1" type="number" min="0" max="59" v-model="startMinutes"> Minutes
                                    <input placeholder="00" class="text-black text-center border-1 rounded mx-1" type="number" min="0" max="59" v-model="startSeconds"> Second</label>
                            </div>
                        </div>

                        <div class="mb-6">
                            <label class="block text-grey-darker text-center text-sm font-bold mb-2" for="passwordAgain">Element end</label>

                            <div class="input shadow appearance-none border border-red rounded-full w-full py-0 px-3 text-black mb-3 bg-white">
                                <label class="block bg-white text-black text-sm font-bold my-2">
                                    <input placeholder="12" class="text-black text-center border-1 rounded mx-1" type="number" min="0" max="23" v-model="endHours"> Hours 
                                    <input placeholder="00" class="text-black text-center border-1 rounded mx-1" type="number" min="0" max="59" v-model="endMinutes"> Minutes
                                    <input placeholder="00" class="text-black text-center border-1 rounded mx-1" type="number" min="0" max="59" v-model="endSeconds"> Second</label>
                            </div>
                        </div>

                        <div class="mb-6">
                            <label class="block text-grey-darker text-center text-sm font-bold my-2" for="passwordAgain">Element repeating <input type="checkbox" class="" v-model="repeating"></label>
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
    const startHours = ref('')
    const startMinutes = ref('')
    const startSeconds = ref('')  
    const endHours = ref('')
    const endMinutes = ref('')
    const endSeconds = ref('')
    const repeating = ref('')

    const error = ref('')


    
    const submit = async(e) => {
         try {
        console.log("add")
        await store.dispatch('addTimetableElement', {
            title: title.value,
            day: day.value,
            description: description.value,
            start: startHours.value + ":" + startMinutes.value + ":" + startSeconds.value,
            end: endHours.value + ":" + endMinutes.value + ":" + endSeconds.value,
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
      title, 
      day, 
      description, 
      startHours,
      startMinutes,
      startSeconds, 
      endHours,
      endMinutes,
      endSeconds, 
      repeating,
    };
  },
};
</script>

