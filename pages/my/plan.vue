<template>
  <div>
    <div class="content">
      <h1>{{ $t('sidebar.plan') }}</h1>
      <p>Пока пусто. Описание появится позже</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  middleware: ['auth'],
  head: {
    title: 'План развития'
  }
}
</script>

<style>
</style>
