<template>
  <div>
    <div class="content">
      <h1>{{ $t('sidebar.plan') }}</h1>
      <p>Пока пусто. Описание появится позже</p>
        <full-calendar/>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  layout: 'dashboard',
  middleware: ['auth'],
  head() {
    return {
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.10.0/fullcalendar.min.css' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.10.0/fullcalendar.css' },
        { rel: 'stylesheet', href: '/css/time.css' },
      ]
    }
  }
}
</script>

<style>
</style>
