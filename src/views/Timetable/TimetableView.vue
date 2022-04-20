<template>
    <div class="noteAdd" v-if="isLoggedIn">
            <div class="w-11/12 pt-16 mx-auto">
                <h2 class="text-2xl text-center font-bold pb-6">{{ element.name }}</h2> 
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-7 gap-4 shadow-md rounded mt-4 py-2 mb-4">
                    <div class="">
                        <h2 class="text-2xl text-center font-bold pb-6">Monday</h2>
                        <div v-for="element in mondayList" v-bind:key="element.id" class="bg-darkPurple hover:bg-purple-800 text-white hover:no-underline p-3 grid grid-cols-1 content-between rounded-xl h-64 mb-2">
                            <div class="w-full rounded">
                                <div class="kartyaCim font-semibold text-lg rounded-xl  bg-orange p-2 text-center">{{ element.title }}</div>
                                <div class="mt-6 p-1 text-gray-300 text-sm">{{ element.description }}</div>
                                <div class="mt-6 p-1 text-gray-300 text-sm">{{ element.start }}</div> 
                                <div class="mt-6 p-1 text-gray-300 text-sm">{{ element.end }}</div>
                            </div>
                           <div class="mt-1 mb-0 pb-2 px-2 mx-auto flex justify-between">
                                <button class="rounded font-semibold text-xs text-orange border-darkPurple hover:text-white p-2 border-1 bg-darkPurple hover:bg-orange" @click="setActiveTimetableElement(element)">View element</button>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <h2 class="text-2xl text-center font-bold pb-6">Tuesday</h2> 
                        <div v-for="element in tuesdayList" v-bind:key="element.id" class="bg-darkPurple hover:bg-purple-800 text-white hover:no-underline p-3 grid grid-cols-1 content-between rounded-xl h-64 mb-2">
                            <div class="w-full rounded">
                                <div class="kartyaCim font-semibold text-lg rounded-xl  bg-orange p-2 text-center">{{ element.title }}</div>
                                <div class="mt-6 p-1 text-gray-300 text-sm">{{ element.description }}</div>
                                <div class="mt-6 p-1 text-gray-300 text-sm">{{ element.start }}</div> 
                                <div class="mt-6 p-1 text-gray-300 text-sm">{{ element.end }}</div>
                            </div>
                            <div class="mt-1 mb-0 pb-2 px-2  mx-auto flex justify-between">
                                <button class="rounded font-semibold text-xs text-orange border-darkPurple hover:text-white p-2 border-1 bg-darkPurple hover:bg-orange" @click="setActiveTimetableElement(element)">View element</button>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <h2 class="text-2xl text-center font-bold pb-6">Wednesday</h2> 
                        <div v-for="element in wednesdayList" v-bind:key="element.id" class="bg-darkPurple hover:bg-purple-800 text-white hover:no-underline p-3 grid grid-cols-1 content-between rounded-xl h-64 mb-2">
                            <div class="w-full rounded">
                                <div class="kartyaCim font-semibold text-lg rounded-xl  bg-orange p-2 text-center">{{ element.title }}</div>
                                <div class="mt-6 p-1 text-gray-300 text-sm">{{ element.description }}</div>
                                <div class="mt-6 p-1 text-gray-300 text-sm">{{ element.start }}</div> 
                                <div class="mt-6 p-1 text-gray-300 text-sm">{{ element.end }}</div>
                            </div>
                            <div class="mt-1 mb-0 pb-2 px-2  mx-auto flex justify-between">
                                <button class="rounded font-semibold text-xs text-orange border-darkPurple hover:text-white p-2 border-1 bg-darkPurple hover:bg-orange" @click="setActiveTimetableElement(element)">View element</button>
                            </div>
                        </div>
                    </div>
                     <div class="">
                        <h2 class="text-2xl text-center font-bold pb-6">Thursday</h2> 
                        <div v-for="element in thursdayList" v-bind:key="element.id" class="bg-darkPurple hover:bg-purple-800 text-white hover:no-underline p-3 grid grid-cols-1 content-between rounded-xl h-64 mb-2">
                            <div class="w-full rounded">
                                <div class="kartyaCim font-semibold text-lg rounded-xl  bg-orange p-2 text-center">{{ element.title }}</div>
                                <div class="mt-6 p-1 text-gray-300 text-sm">{{ element.description }}</div>
                                <div class="mt-6 p-1 text-gray-300 text-sm">{{ element.start }}</div> 
                                <div class="mt-6 p-1 text-gray-300 text-sm">{{ element.end }}</div>
                            </div>
                            <div class="mt-1 mb-0 pb-2 px-2  mx-auto flex justify-between">
                                <button class="rounded font-semibold text-xs text-orange border-darkPurple hover:text-white p-2 border-1 bg-darkPurple hover:bg-orange" @click="setActiveTimetableElement(element)">View element</button>
                            </div>
                        </div>
                    </div>
                     <div class="">
                        <h2 class="text-2xl text-center font-bold pb-6">Friday</h2>
                        <div v-for="element in fridayList" v-bind:key="element.id" class="bg-darkPurple hover:bg-purple-800 text-white hover:no-underline p-3 grid grid-cols-1 content-between rounded-xl h-64 mb-2">
                            <div class="w-full rounded">
                                <div class="kartyaCim font-semibold text-lg rounded-xl  bg-orange p-2 text-center">{{ element.title }}</div>
                                <div class="mt-6 p-1 text-gray-300 text-sm">{{ element.description }}</div>
                                <div class="mt-6 p-1 text-gray-300 text-sm">{{ element.start }}</div> 
                                <div class="mt-6 p-1 text-gray-300 text-sm">{{ element.end }}</div>
                            </div>
                            <div class="mt-1 mb-0 pb-2 px-2  mx-auto flex justify-between">
                                <button class="rounded font-semibold text-xs text-orange border-darkPurple hover:text-white p-2 border-1 bg-darkPurple hover:bg-orange" @click="setActiveTimetableElement(element)">View element</button>
                            </div>
                        </div> 
                    </div>
                     <div class="">
                        <h2 class="text-2xl text-center font-bold pb-6">Saturday</h2> 
                        <div v-for="element in saturdayList" v-bind:key="element.id" class="bg-darkPurple hover:bg-purple-800 text-white hover:no-underline p-3 grid grid-cols-1 content-between rounded-xl h-64 mb-2">
                            <div class="w-full rounded">
                                <div class="kartyaCim font-semibold text-lg rounded-xl  bg-orange p-2 text-center">{{ element.title }}</div>
                                <div class="mt-6 p-1 text-gray-300 text-sm">{{ element.description }}</div>
                                <div class="mt-6 p-1 text-gray-300 text-sm">{{ element.start }}</div> 
                                <div class="mt-6 p-1 text-gray-300 text-sm">{{ element.end }}</div>
                            </div>
                            <div class="mt-1 mb-0 pb-2 px-2  mx-auto flex justify-between">
                                <button class="rounded font-semibold text-xs text-orange border-darkPurple hover:text-white p-2 border-1 bg-darkPurple hover:bg-orange" @click="setActiveTimetableElement(element)">View element</button>
                            </div>
                        </div>
                    </div>
                     <div class="">
                        <h2 class="text-2xl text-center font-bold pb-6">Sunday</h2> 
                        <div v-for="element in sundayList" v-bind:key="element.id" class="bg-darkPurple hover:bg-purple-800 text-white hover:no-underline p-3 grid grid-cols-1 content-between rounded-xl h-64 mb-2">
                            <div class="w-full rounded">
                                <div class="kartyaCim font-semibold text-lg rounded-xl  bg-orange p-2 text-center">{{ element.title }}</div>
                                <div class="mt-6 p-1 text-gray-300 text-sm">{{ element.description }}</div>
                                <div class="mt-6 p-1 text-gray-300 text-sm">{{ element.start }}</div> 
                                <div class="mt-6 p-1 text-gray-300 text-sm">{{ element.end }}</div>
                            </div>
                            <div class="mt-1 mb-0 pb-2 px-2  mx-auto flex justify-between">
                                <button class="rounded font-semibold text-xs text-orange hover:text-white p-2  bg-darkPurple hover:bg-orange" @click="setActiveTimetableElement(element)">View element</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-between mx-auto mt-2">
                    <router-link to="/timetableelementadd" class="mx-auto pt-2 bg-orange hover:bg-darkPurple font-bold rounded hover:no-underline text-white py-2 px-4">Add new element</router-link>
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
        element: computed(() => store.getters.getActiveTimetable), 
        mondayList: computed(() => store.getters.getElementByDay("Monday")),
        tuesdayList: computed(() => store.getters.getElementByDay("Tuesday")),
        wednesdayList: computed(() => store.getters.getElementByDay("Wednesday")),
        thursdayList: computed(() => store.getters.getElementByDay("Thursday")),
        fridayList: computed(() => store.getters.getElementByDay("Friday")),
        saturdayList: computed(() => store.getters.getElementByDay("Saturday")),
        sundayList: computed(() => store.getters.getElementByDay("Sunday"))

    };
  },
};
</script>