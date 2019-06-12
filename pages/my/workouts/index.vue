<template>
  <div>
    <div class="right-content">
      <h1>{{ $t('sidebar.workouts') }}</h1>
      <p>Пока пусто. Описание появится позже</p>
      <nuxt-link :to="localePath('my-workouts-create')">{{ $t('paga_workout.create_new') }}</nuxt-link>
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
