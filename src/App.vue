<template>
  <div id="app" class="bg-lightPurple">
    <NavbarTeszt/>
    <router-view class="flex items-center justify-center"/>
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
