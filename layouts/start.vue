<template>
  <div>

    <div class="section">

      <div class="grid-wrapper grid-wrapper-accent">
        <AppHeader></AppHeader>

        <nuxt/>

      </div>

      <div class="video-container">
        <div class="color-overlay"></div>
        <div class="color-overlay"></div>
        <video autoplay loop muted class="video-bg">
            <source src="~/static/assets/video/main-video.mp4" type="video/mp4">
        </video>
      </div>

    </div>

  </div>
</template>


<script>
import AppHeader from '~/components/header/header.vue'
import AppLangswitcher from '~/components/languageSwitcher.vue'

export default {
  components: {
    AppHeader,
    AppLangswitcher
  },
  transition (to, from) {
    if (!from) return 'slide-left'
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  }
}
</script>



<style lang="sass" scoped>
.section
  position: relative
  width: 100%
  height: 100vh
  display: flex
  //align-items: center
  justify-content: center
  overflow: hidden

.video-container
  position: absolute
  bottom: 0
  right: 0
  width: 100%
  height: 100%
  overflow: hidden
  z-index: -99

.color-overlay
  position: absolute
  bottom: 0
  right: 0
  background: linear-gradient(86.76deg, rgba(255, 255, 255, 0.85) 1.89%, rgba(255, 255, 255, 0.75) 30.45%, rgba(255, 255, 255, 0.5) 56.76%, rgba(255, 255, 255, 0) 109.4%)
  width: 100%
  height: 100vh
  opacity: 0.6

.video-bg
  height: auto
  min-height: 100%
  width: 100%
  //height: 100%
  //width: auto
  //margin: 0 -450px
</style>
