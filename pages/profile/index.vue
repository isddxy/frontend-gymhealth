<template>
  <div>
    <div class="right-content">
        <h1>Профиль {{ user.name }}</h1>
        <h3>Ваш email: {{ user.email }}</h3>
       
        <a class="btn btn-top-menu" @click.prevent="logout">{{ $t('auth.logout') }}</a>

      </div>
  </div>
</template>

<script>

export default {
    layout: 'start-main',
    head: {
        title: 'Профиль' 
    },
    middleware: ['auth'],
    methods: {
        logout() {
            this.$auth.logout()
        }
    }
};
</script>

<style>
</style>
