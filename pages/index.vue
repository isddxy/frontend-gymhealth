<template>

  <div>

    <div class="welcome-info">
      <h1>{{ $t('welcome.main_title') }}</h1>
      <p>
        {{ $t('welcome.main_text') }}
      </p>

      <div class="btns-form">
        <nuxt-link :to="localePath('start-sign-up')" class="btn btn-large btn-color-accent btn-start">{{ $t('auth.get_start_free') }}</nuxt-link>
        <nuxt-link :to="localePath('start-sign-in')" class="btn btn-large btn-color-darkblue">{{ $t('auth.sign_in') }}</nuxt-link>
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
  </div>
</template>

<script>
export default {
  layout: 'start',
  middleware: ['guest'],
  components: {
  },
  head: {
    title: 'Gymhealth 🚀'
  }
}
</script>
