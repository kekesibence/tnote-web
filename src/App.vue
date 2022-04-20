<template>
  <div id="app" class="bg-lightPurple">
    <Navbar class="sticky top-0 z-50"/>
    <router-view class="mt-24 md:mt-12 h-screen"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}

</script>
<style>

</style>
