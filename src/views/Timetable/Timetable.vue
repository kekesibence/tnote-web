<template>
    <div v-if="isLoggedIn">
        <h1 class="flex justify-center py-16 text-xl w-full font-bold">{{ user.name }}'s timetable</h1>
        <div class="relative overflow-x-auto mx-auto shadow-md rounded-lg w-9/12">
            <table class="w-full text-sm text-white text-center bg-darkPurple">
                <thead class="text-xs uppercase bg-orange">
                    <tr>
                        <th scope="col" class="px-6 py-3 border-r-2">Time</th>
                        <th scope="col" class="px-6 py-3 border-r-2">Monday</th>
                        <th scope="col" class="px-6 py-3 border-r-2">Tuesday</th>
                        <th scope="col" class="px-6 py-3 border-r-2">Wednesday</th>
                        <th scope="col" class="px-6 py-3 border-r-2">Thursday</th>
                        <th scope="col" class="px-6 py-3 border-r-2">Friday</th>
                        <th scope="col" class="px-6 py-3 border-r-2">Saturday</th>
                        <th scope="col" class="px-6 py-3">Sunday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="index in 24" :key="index" >
                            <td class="px-6 py-4 bg-darkPurple" v-for="index in 8" :key="index"></td>
                        </tr>
                </tbody>
            </table>
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
  setup() {
    const store = useStore();
    const router = useRouter();
     

    return {
      user: computed(() => store.getters.getUser),
      isLoggedIn: computed(() => store.getters.isAuthenticated),
    };
  },
};
</script>
