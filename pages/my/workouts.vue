<template>
  <div>
    <div class="right-content">
      <h1>{{ $t('sidebar.workouts') }}</h1>
      <p>Пока пусто. Описание появится позже</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  middleware: ['auth'],
  head: {
    title: 'Мои тренировки'
  }
}
</script>

<style>
</style>
