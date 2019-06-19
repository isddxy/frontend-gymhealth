<template>

<div class="grid-wrapper">


  <AppHeader />

  <AppSidebar />

  <div class="content" id="app">

    <nuxt />

  </div>

  <div class="footer">
    <!-- <ul class="list-unstyled text-small">
        <li><a class="text-muted" href="#">Welcome</a></li>
        <li><a class="text-muted" href="#">>Login</a></li>
        <li><a class="text-muted" href="#">>Sign Up</a></li>
        <li><a class="text-muted" href="#">>Forget Password</a></li>
        <li><a class="text-muted" href="#">>Login Social media</a></li>
    </ul> -->
    <AppLangswitcher />
  </div>
</div>



</template>

<script>
import AppLangswitcher from '~/components/languageSwitcher.vue'
import AppSidebar from '~/components/dashboard/sidebar'
import AppHeader from '~/components/dashboard/header/header.vue'

export default {
  components: {
    AppHeader,
    AppLangswitcher,
    AppSidebar
  },
  transition (to, from) {
    if (!from) return 'slide-left'
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  }
}
</script>


<style lang="sass" scoped>
.footer
  margin-top: 200px
</style>
