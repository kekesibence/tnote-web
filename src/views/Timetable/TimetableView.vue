<template>
    <div class="noteAdd" v-if="isLoggedIn">
            <div class="w-11/12 pt-16 mx-auto">
                <h2 class="text-2xl text-center font-bold pb-6">{{ timetable.name }}</h2> 
                <div class="grid grid-cols-7 gap-4 shadow-md rounded mt-4 py-2">
                    <div class="">
                        <h2 class="text-2xl text-center font-bold pb-6">Monday</h2>
                        <TimetableElementCard/> 
                    </div>
                    <div class="">
                        <h2 class="text-2xl text-center font-bold pb-6">Tuesday</h2> 
                        <TimetableElementCard/>
                    </div>
                    <div class="">
                        <h2 class="text-2xl text-center font-bold pb-6">Wednesday</h2> 
                        <TimetableElementCard/>
                    </div>
                     <div class="">
                        <h2 class="text-2xl text-center font-bold pb-6">Thursday</h2> 
                        <TimetableElementCard/>
                    </div>
                     <div class="">
                        <h2 class="text-2xl text-center font-bold pb-6">Friday</h2> 
                        <TimetableElementCard/>
                    </div>
                     <div class="">
                        <h2 class="text-2xl text-center font-bold pb-6">Saturday</h2> 
                        <TimetableElementCard/>
                    </div>
                     <div class="">
                        <h2 class="text-2xl text-center font-bold pb-6">Sunday</h2> 
                        <TimetableElementCard/>
                    </div>
                </div>
                
                
                <div class="flex items-center justify-between">
                    <router-link to="/timetableelementadd" class=" bg-orange font-bold rounded hover:no-underline text-white py-2 px-4">Add new element</router-link>
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
import TimetableElementCard from "../../components/TimetableElementCard.vue"


export default {
  name: "TimetableView",
  components: {
      NotLoggedIn,
      TimetableElementCard
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    return {
        isLoggedIn: computed(() => store.getters.isAuthenticated),
        timetable: computed(() => store.getters.getActiveTimetable)  
    };
  },
};
</script>