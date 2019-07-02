<template>
  <div>
    <div class="content">
      <img src="~/static/assets/img/_src/man-height.png" style="float:left">
      <h1>{{ $t('sidebar.body_size') }}</h1>
      <h2>{{ $t('page_body_size.title_h2')}}?</h2>
      <p>{{ $t('page_body_size.description1')}}</p>
      <p>{{ $t('page_body_size.description2')}}</p>
      <div class="btns-form">
        <nuxt-link :to="localePath('my-body-size')" class="btn btn-large btn-color-accent btn-start">{{ $t('page_body_size.creat_new_size')}}</nuxt-link>
        <nuxt-link :to="localePath('my-body-size')" class="btn btn-large btn-color-empty-border-gray">{{ $t('page_body_size.write_last')}}</nuxt-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  middleware: ['auth'],
  head() {
    return { title: this.$t('sidebar.body_size') }
  },
}
</script>

<style>
</style>
