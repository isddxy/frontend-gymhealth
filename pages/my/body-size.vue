<template>
  <div>
    <div class="content">
      <h1>{{ $t('sidebar.body_size') }}</h1>
      <p>Пока пусто. Описание появится позже</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  middleware: ['auth'],
  head: {
    title: 'Размеры тела'
  }
}
</script>

<style>
</style>
