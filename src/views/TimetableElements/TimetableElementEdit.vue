<template>
    <div class="noteAdd" v-if="isLoggedIn">
        <h1 class="flex justify-center pt-16 text-xl w-full font-bold">Edit timetable element</h1>
            <div class="w-7/12 mx-auto">
                <div class="shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col border-1 border-black/50 mt-4">
                    <main class="form">
                        <form @submit.prevent="submit">
                            <div class="mb-4">
                                <label class="block text-grey-darker text-center text-sm font-bold mb-2" for="title">Note title</label>
                                <input  class="input shadow appearance-none border rounded-full w-full py-2 px-3 text-black"  id="title" type="text" placeholder="Title" v-model="title" required>
                            </div>
                            <div class="mb-4">
                                <label class="block text-grey-darker text-center text-sm font-bold mb-2" for="content">Note content</label>
                                <textarea class="form-control block w-full x-3 p-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded ransition  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="content" rows="5" placeholder="Your text"  v-model="content" required></textarea>
                            </div>
                            <div class="flex items-center justify-between">
                                <button class="bg-orange font-bold rounded text-white py-2 px-4">Submit</button>
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
import { computed } from "vue";
import NotLoggedIn from "../../components/NotLoggedIn.vue"

export default {
    name: "Notes",
    components: {
        NotLoggedIn
    },
    data() {
        const store = useStore();
    
        let respone = computed(() => store.getters.getActiveNote)
        const note = respone.value
        return {
            title: note.title,
	        content: note.content,
        }
    },
    setup() {
        const store = useStore();
        const router = useRouter();

        const submit = async(e) => {
            console.log("edit")
            try {
                await store.dispatch('editNote', {
                title: document.getElementById("title").value,
                content: document.getElementById("content").value,
                ownerId: store.getters.getUser.id,
                })
                router.push('/notes')
            } catch(err) {
                console.log(err)
            }   
        }
        return {
        submit,
        isLoggedIn: computed(() => store.getters.isAuthenticated),
        note: computed(() => store.getters.getActiveNote),
        };
  },
};
</script>
