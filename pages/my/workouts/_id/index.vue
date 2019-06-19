<template>
  <div>
    <div class="content-dashboard">
        <img class="full-img" :src="workout.img">
        <h1>{{ workout.name }}</h1>
        <p>{{ workout.description }}</p>
        <hr>
        
        <div class="author">
            <img src="https://picsum.photos/100/100" class="author_img">
            <h3>{{ workout.user.name }}</h3>
        </div>
        
        <div class="date">{{ workout.updated_at }}</div>
        <br><br>
        <div v-if="authenticated">
            <div v-if="user.id === workout.user.id">
                 <nuxt-link :to="localePath({ name: 'my-workouts-id-edit', params: {id: workout.id}})" class="btn btn-large btn-color-empty-border-gray">{{ $t('my.workout.btn_update') }}</nuxt-link>
                 <button @click="deleteWorkout(workout.id)" class="btn btn-large btn-color-empty-border-gray">{{ $t('my.workout.btn_delete') }}</button>
            </div>
        </div>
      

    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  head() {
      return { title: this.workout.name }
  },
  data() {
    return {
      workout: []
    }
  },
  async asyncData({$axios, params}) {
    let {data} = await $axios.$get(`/workout/${params.id}`)
    return {
      workout: data
    }
  },
  methods: {
    async deleteWorkout(id) {
      await this.$axios.$delete(`/workout/${id}`)
      this.$router.push(this.localePath('my-workouts'))
    }
  }
}
</script>

<style lang="sass" scoped>
.full-img
    width: auto
    max-height: 400px 
    background: cover
    border-radius: 20px
.date
    float: right
    font-size: 18px
    margin: 20px
.author
    .author_img
        width: 50px
        border-radius: 999px
        float: left
        margin: 0 15px 0 0
    h3
        font-size: 18px
button
  width: auto
  background-color: #f6d2d2
</style>
