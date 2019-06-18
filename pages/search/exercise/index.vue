<template>
  <div>
    <div class="content-dashboard">
      <h1>{{ $t('search.exercise.title') }}</h1>
      <br>
      <form>
        <div class="form-group form-group-search">
          <input  type="text" class="form-control" v-bind:placeholder="$t('search.exercise.placeholder')" autofocus>
          <small class="form-text text-danger"></small>
        </div>
      </form>
      <p>Пока пусто. Описание появится позже</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  head: {
    title: 'Dashboard'
  }
}
</script>

<style <style lang="sass" scoped>
form
  width: 100%

.form-group input
  border: 1px solid gray !important
</style>
