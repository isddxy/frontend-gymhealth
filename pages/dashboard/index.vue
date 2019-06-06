<template>
  <div>
    <div class="right-content">
      <h1>Панель управления</h1>
      <p>Пока пусто. Описание появится позже</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'start-main',
  middleware: ['auth'],
  head: {
    title: 'Dashboard'
  }
}
</script>

<style>
</style>
