<template>
  <div>
    <div class="right-content">
      <h1>{{ $t('sidebar.stat') }}</h1>
      <p>Пока пусто. Описание появится позже</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  middleware: ['auth'],
  head: {
    title: 'Прогресс'
  }
}
</script>

<style>
</style>
