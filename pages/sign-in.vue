<template>
  <div>
    <div class="right-content">
      <h1>Sign In</h1>
      <div class="input-form">
        <span class="input-span"><input type="text" class="test-input" placeholder="Логин или Email" /></span>
      </div>
      <div class="input-form">
        <span class="input-span"><input type="text" class="test-input" placeholder="Пароль" /></span>
      </div>
      <nuxt-link to="/lets-start" class="btn btn-large btn-color-empty-border-gray btn-response">Зарегистрироваться</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'start-main',
  components: {
  },
  head: {
    title: 'Sign In 🚀',
    script: [
      { src: '/assets/js/input.js' }
    ],
  }
}
</script>

<style>
</style>
