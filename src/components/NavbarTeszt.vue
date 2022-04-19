<template>
    <header class="bg-darkPurple sm:flex sm:items-center sm:px-4 sm:py-0" v-if="!isLoggedIn">
        <div class="flex items-center justify-between px-4 py-3 sm:p-0">
            <div>
                <img class="h-14" src="../assets/tnote_logo_complete.png" alt="tnote-logo">
            </div>
            <div class="sm:hidden border">
                <button type="button" @click="isOpen = !isOpen">
                    <img src="../assets/menu.png" alt="Menu logo" viewBox="0 0 24 24" class="h-10 w-10"> 
                </button>
            </div>
        </div>
        <nav :class="isOpen ? 'block' : 'hidden'" class="px-4 pt-1 pb-1 sm:flex">
            <router-link class="block py-1 font-semibold hover:text-orange hover:no-underline sm:mr-4" to="/register">Register</router-link>
            <router-link class="block py-1 font-semibold hover:text-orange hover:no-underline sm:mr-4" to="/login">Login</router-link>
            <router-link class="block py-1 font-semibold hover:text-orange hover:no-underline sm:mr-4" to="">About us</router-link>
        </nav>
    </header>

    <!---------------------------------------------------------------------------------------->
    <header class="bg-darkPurple sm:flex sm:items-center sm:px-4 sm:py-0" v-if="isLoggedIn">
        <div class="flex items-center justify-between px-4 py-3 sm:p-0">
            <div>
                <img class="h-14" src="../assets/tnote_logo_complete.png" alt="tnote-logo">
            </div>
            <div class="sm:hidden border">
                <button type="button" @click="isOpen = !isOpen">
                    <img src="../assets/menu.png" alt="Menu logo" viewBox="0 0 24 24" class="h-10 w-10"> 
                </button>
            </div>
        </div>

        <nav :class="isOpen ? 'block' : 'hidden'" class="sm:block">
            <div class="px-2 py-2 sm:flex sm:p-0">
                <router-link class="block px-2 py-1 font-semibold hover:text-orange hover:no-underline sm:mr-4" to="/notes">Notes</router-link>
                <router-link class="block px-2 py-1 font-semibold hover:text-orange hover:no-underline sm:mr-4" to="/">About us</router-link> 
                <ProfileDropdown class="hidden sm:block"/>
            </div>
            <div class="px-3 py-2 border-t border-gray-600 sm:hidden"> 
                <div class="flex items-center">
                    <router-link class="font-semibold hover:text-orange hover:no-underline" to="/">{{ user.name }}</router-link>
                </div>
                <div class="mt-1" >
                    <router-link class="block text-white-600 py-1 hover:text-orange hover:no-underline text-sm"  to="/">Contact support</router-link>
                    <button  class="block text-white-600 py-1  hover:text-orange hover:no-underline text-sm	" @click="logoutClick">Logout</button>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";
import ProfileDropdown from "./ProfileDropdown.vue"

export default ({
    components: {
        ProfileDropdown,
    },
    setup() {
        const store = useStore();
        const router = useRouter();

        const logoutClick = () => {
        store.dispatch("logout");
        console.log("logout");
        router.push("/login");
        };

        return {
        logoutClick,
        user: computed(() => store.getters.getUser),
        isLoggedIn: computed(() => store.getters.isAuthenticated),
        };
    },
    data() {
        return {
            isOpen: true,
        }
    },
})
</script>
