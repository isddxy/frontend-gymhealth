<template>
  <div>
    <div class="content-dashboard">
      <h1>{{ $t('sidebar.dashboard') }}</h1>
      <p>Пока пусто. Описание появится позже</p>
      <h3>
        Главная
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  middleware: ['auth'],
  head: {
    title: 'Dashboard'
  }
}
</script>

<style>
</style>
