<template>
  <div id="app" class="bg-lightPurple">
    <NavbarTeszt class="sticky top-0 z-50"/>
    <router-view class="mt-24 md:mt-12 h-screen"/>
  </div>
</template>

<script>
import NavbarTeszt from '@/components/NavbarTeszt.vue'


export default {
  components: {
    NavbarTeszt
  }
}

</script>
<style>

</style>
