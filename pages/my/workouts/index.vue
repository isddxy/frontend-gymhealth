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

      <div class="workout-cards">

        <a href="#" v-for="(workout, index) in workouts" :key="index">

          <div class="card" v-bind:style="{ 'background': 'linear-gradient(180deg, rgba(155, 155, 155, 0) 3.36%, rgba(60, 60, 60, 0.8) 81.59%), url(' + workout.img + ')'}">
            <h2>{{ workout.name }}</h2>
            <a class="btn btn-card-more btn-color-gradient-gray" href="#">{{ $t('common.more') }}</a>
            <a class="btn btn-card-edit btn-color-yellow" href="#">
              <img src="~/static/assets/img/_src/icon/gear.svg">
            </a>
          </div>
        </a>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  middleware: ['auth'],
  head() {
      return { title: this.$t('sidebar.workouts') + this.user.id }
  },
  data() {
    return {
      workouts: [],
    }
  },
  mounted() {
    this.$axios.$get('/user/'+ this.user.id +'/workouts').then(response => {
      this.workouts = response.data
    })
  }
}
</script>

<style lang="sass">
.workout-cards
  width: 100%
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(20.000em, 1fr))
  grid-gap: 2vw
  .card
    background: #d1d1d1
    border-radius: 20px
    height: 14.2em
    background: linear-gradient(180deg, rgba(155, 155, 155, 0) 3.36%, rgba(60, 60, 60, 0.8) 81.59%), url(https://cdn.diabetesdaily.com/wp-content/blogs.dir/21/files/2018/05/victor-freitas-546968-unsplash.jpg);
    background-size: cover !important
    opacity: 0.9
    color: #fff
    position: relative
    -webkit-transition: opacity .2s linear
    -moz-transition: opacity .2s linear
    -o-transition: opacity .2s linear
    transition: opacity .2s linear
    overflow: hidden
    &:hover
      box-shadow: 0px 8px 25px rgba(122, 122, 122, 0.44)
      opacity: 1
    &:hover
      > h2
        bottom: 3em
      > .btn
        bottom: 1em
        opacity: 1
    h2
      font-size: 1.2em
      letter-spacing: 0.04em
      line-height: 1.2em
      position: absolute
      bottom: 0
      padding: 1.15em 2.1em
      -webkit-transition: bottom .2s ease-in-out
      -moz-transition: bottom .2s ease-in-out
      -o-transition: bottom .2s ease-in-out
      transition: bottom .2s ease-in-out
    .btn
      text-decoration: none
      position: absolute
      bottom: -3.125em
      opacity: 0
      -webkit-transition: bottom .25s, opacity .15s ease-in-out
      -moz-transition: bottom .25s, opacity .15s ease-in-out
      -o-transition: bottom .25s, opacity .15s ease-in-out
      transition: bottom .25s, opacity .15s ease-in-out
      &-card-more
        margin: 1.15em 3em
        padding: 1em 3.5em
      &-card-edit
        border-radius: 99px
        right: 1em
        margin: 1.15em 2em
        padding: 0.9em 1.02em 0.5em 1.02em
        img
          height: 1.625em

</style>
