<template>
  <div>
    <div class="right-content">
      <h1>{{ $t('sidebar.workouts') }}</h1>
      <br>
      <nuxt-link class="btn btn-large btn-color-accent btn-start" :to="localePath('my-workouts-create')">{{ $t('paga_workout.create_new') }}</nuxt-link>
      <br><br>
      <p>
        Не нужно дожидаться прихода в зал, чтобы решить, чем вы будете заниматься сегодня, какие мышцы и каким образом тренировать. На это расходуется масса времени. Идите в зал с четким планом тренировки, из которого вы точно будете знать, что вам нужно нагружать сегодня.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  middleware: ['auth'],
  head() {
      return { title: this.$t('sidebar.workouts') }
  },
}
</script>

<style>
</style>
