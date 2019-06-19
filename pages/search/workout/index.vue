<template>
    <div class="content-dashboard">
      <br>
      <h1>{{ $t('search.workout.title') }}</h1>
      <form>
        <div class="form-group form-group-search">
          <input  type="text" class="form-control" v-bind:placeholder="$t('search.workout.placeholder')" autofocus>
          <small class="form-text text-danger"></small>
        </div>
      </form>
      <br>
      <h3>{{ $t('search.workout.last_added') }}</h3>
      <hr>
      <div class="workout-cards">

        <div v-for="(workout, index) in workouts" :key="index">
        <nuxt-link :to="localePath({ name: 'my-workouts-id', params: {id: workout.id} })">
          <div class="card" v-bind:style="{ 'background': 'linear-gradient(180deg, rgba(155, 155, 155, 0) 3.36%, rgba(60, 60, 60, 0.8) 81.59%), url(' + workout.img + ')'}">
            <h2>{{ workout.name }}</h2>
            <a class="btn btn-card-more btn-color-gradient-gray" href="#">{{ $t('common.more') }}</a>
          </div>
        </nuxt-link>
      </div>

      </div>

  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  head() {
      return { title: this.$t('search.workout.title') }
  },
  data() {
    return {
      workouts: []
    }
  },
  async asyncData({$axios}) {
    let {data} = await $axios.$get('/search/workouts')
    return {
      workouts: data
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
