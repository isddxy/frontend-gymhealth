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

        <div class="right-content">
          <h1>Reach your goals <br>right now</h1>
          <p>
            Платформа, позволяющая планировать и контролировать тренировочный процесс, следить за прогрессом, а также сном и приёмами пищи.
          </p>

          <div class="btns-form">
            <nuxt-link to="/start/sign-up" class="btn btn-large btn-color-accent btn-start">Начать бесплатно</nuxt-link>
            <nuxt-link to="/start/sign-in" class="btn btn-large btn-color-empty-border-gray btn-response">Войти</nuxt-link>
          </div>

          <div class="btns-auth-soc">
            <div class="title">Авторизоваться через</div>
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


      </div>

      <!-- <div class="switcher-language">
        English
      </div> -->

    </div>
  </div>
</template>

<script>
import AppHeader from '~/components/header/header.vue'

export default {
  layout: 'start',
  components: {
    AppHeader
  },
  head: {
    title: 'Gymhealth 🚀'
  }
}
</script>

<style>
</style>
