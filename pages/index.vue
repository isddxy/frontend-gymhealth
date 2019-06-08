<template>
  <div id="welcome">

    <div class="page-main">
      <div class="bg">
        <img class="background" src="~/static/assets/img/_src/bg/bg-background.svg">
        <img class="mountain" src="~/static/assets/img/_src/bg/bg-mountain.svg">
        <img class="fitness-girl" src="~/static/assets/img/_src/bg/fitness_girl.svg">
      </div>

      <div class="container">
        <AppHeader></AppHeader>

        <div class="content-right">
          <h1>{{ $t('welcome.main_title') }}</h1>
          <p>
            {{ $t('welcome.main_text') }}
          </p>

          <div class="btns-form">
            <nuxt-link :to="localePath('start-sign-up')" class="btn btn-large btn-color-accent btn-start">{{ $t('auth.get_start_free') }}</nuxt-link>
            <nuxt-link :to="localePath('start-sign-in')" class="btn btn-large btn-color-empty-border-gray">{{ $t('auth.sign_in') }}</nuxt-link>
          </div>

          <div class="btns-auth-soc">
            <div class="title">{{ $t('auth.login_with') }}</div>
            <ul>
              <li>
                <a href="#" class="btn-soc btn-soc-google"><img src="~/static/assets/img/_src/icon/soc/google.svg"></a>
              </li>
              <li>
                <a href="#" class="btn-soc btn-soc-vk"><img src="~/static/assets/img/_src/icon/soc/vk.svg"></a>
              </li>
              <li>
                <a href="#" class="btn-soc btn-soc-facebook"><img src="~/static/assets/img/_src/icon/soc/facebook.svg"></a>
              </li>
              <li>
                <a href="#" class="btn-soc btn-soc-twitter"><img src="~/static/assets/img/_src/icon/soc/twitter.svg"></a>
              </li>
            </ul>
          </div>

        </div>
        
      <div class="footer">
        <AppLangswitcher />
      </div>


      </div>



    </div>
  </div>
</template>

<script>
import AppHeader from '~/components/header/header.vue'
import AppLangswitcher from '~/components/languageSwitcher.vue'

export default {
  layout: 'start',
  components: {
    AppHeader,
    AppLangswitcher
  },
  head: {
    title: 'Gymhealth 🚀'
  }
}
</script>

<style <style lang="sass">
.footer
  position: fixed
  bottom: 0
  right: 15%
</style>
