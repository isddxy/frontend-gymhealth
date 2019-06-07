<template>
  <div id="welcome">

    <div class="page-main">
      <div class="bg">
        <img class="background" src="~/static/assets/img/_src/bg/bg-background.svg">
      </div>

      <div class="container-only-page">
        <AppHeader></AppHeader>

        <nuxt />


      </div>

    </div>
  </div>
</template>

<script>
import AppHeader from '~/components/header/header.vue'

export default {
  components: {
    AppHeader
  },
  transition (to, from) {
    if (!from) return 'slide-left'
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  }
}
</script>


<style lang="sass">
body
	height: 100vh
	overflow: hidden 
</style>
