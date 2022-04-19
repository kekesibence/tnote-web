<template>
    <div class="noteAdd" v-if="isLoggedIn">
            <div class="w-7/12 pt-16 mx-auto">
                <div class="shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col border-1 border-black/50 mt-4">
                    <h2 class="text-2xl text-center font-bold pb-6">{{ note.title }}</h2> 
                    <p class="text-sm tracking-wider text-orange">Content:</p>   
                    <p class="text-md">{{ note.content }}</p>
                </div>
                <div class="flex items-center justify-between">
                    <router-link to="/noteedit" class=" bg-orange font-bold rounded hover:no-underline text-white py-2 px-4">Edit</router-link>
                    <button  @click="deleteNote" class=" bg-orange font-bold rounded hover:no-underline text-white py-2 px-4">Delete</button>
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
  name: "Notes",
  components: {
      NotLoggedIn
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const deleteNote = async(e) => {
            const id = store.getters.getActiveNote.id
            try {
                await store.dispatch('deleteNote', id)
                router.push('/notes')
            } catch(err) {
                console.log(err)
            }   
        }
    return {
        deleteNote,
        isLoggedIn: computed(() => store.getters.isAuthenticated),
        note: computed(() => store.getters.getActiveNote)  
    };
  },
};
</script>