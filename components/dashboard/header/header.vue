<template>
  <div class="wrapper-header">

    <AppTopNav/>

    <AppProfile/>

  </div>
</template>


<script>
import AppProfile from '~/components/dashboard/header/profile.vue'
import AppTopNav from '~/components/dashboard/header/topNav.vue'

export default {
  components: {
    AppTopNav,
    AppProfile
  },
}
</script>
