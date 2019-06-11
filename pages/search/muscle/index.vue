<template>
  <div>
    <div class="content-dashboard">
      <h1>{{ $t('common.search') }} {{ $t('topNav.muscles') }}</h1>
      <br>
      <form>
        <div class="form-group form-group-search">
          <input  type="text" class="form-control" v-bind:placeholder="$t('common.search')" autofocus>
          <small class="form-text text-danger"></small>
        </div>
      </form>
      <div v-for="(muscle, index) in muscles" :key="index">
        <img :src="muscle.img" height=150/>
        <h1>{{ muscle.name }}</h1>
        <p>{{ muscle.description }}</p>
        <h3>{{ muscle.muscle_group.name }} </h3>
        <p>Картинка: {{ muscle.muscle_group.img }}</p>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  head: {
    title: 'Dashboard'
  },
  data() {
    return {
      muscles: []
    }
  },
  async asyncData({$axios}) {
    let {data} = await $axios.$get('/muscles')
    //console.log(data)
    return {
      muscles: data
    }
  }
  
}
</script>

<style <style lang="sass" scoped>
form
  width: 100%

.form-group input
  border: 1px solid gray !important
</style>
