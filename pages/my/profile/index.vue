<template>
  <div>
    <div class="right-content">
        <img src="https://picsum.photos/200/200" class="profile_userphoto">
        <h1>{{ $t('common.profile') }} {{ user.name }}</h1>
        <h3>{{ $t('common.Your') }} email: {{ user.email }}</h3>
        <br>
        <a class="btn btn-top-menu" @click.prevent="logout">{{ $t('auth.logout') }}</a>

      </div>
  </div>
</template>

<script>

export default {
    layout: 'dashboard',
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

<style lang="sass">
.profile_userphoto
    float:left
    border-radius: 999px
</style>

