<template>
  <div class="content-dashboard">
    <h1>{{ $t('my.workout.update.title') }}</h1>
    <form @submit.prevent="update">
      <div class="form-group">
        <label><strong>{{ $t('my.workout.create.name') }}:</strong></label>
        <input v-model="workout.name" type="text" class="form-control" :placeholder="$t('my.workout.create.name')" autofocus>
        <small class="form-text text-danger" v-if="errors.name">{{errors.name[0]}}</small>
      </div>
      <div class="form-group">
        <label><strong>{{ $t('my.workout.create.description') }}:</strong></label>
        <textarea v-model="workout.description" class="form-control" rows="15"></textarea>
        <small class="form-text text-danger" v-if="errors.description">{{errors.description[0]}}</small>
      </div>
    <br>
    <img class="full-img" :src="workout.img">
      <div class="form-group">
        <label><strong>{{ $t('my.workout.create.img') }}:</strong></label>
        <input v-model="workout.img" type="text" class="form-control" :placeholder=" $t('my.workout.create.img')" autofocus>
        <small class="form-text text-danger" v-if="errors.img">{{errors.img[0]}}</small>
      </div>
      <br>
      <button type="submit" class="btn btn-primary">{{ $t('my.workout.update.submit_btn_name') }} </button>
    </form>
    
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  head() {
      return { title: 'The id is: ' }
  },
  data() {
    return {
      workout: {
          name: '',
          description: '',
          img: '',
      }
    }
  },
  async asyncData({$axios, params}) {
    let {data} = await $axios.$get(`/workout/${params.id}`)
    return {
      workout: data
    }
  },
  methods: {
      async update() {
         
          
        try {

           await this.$axios.patch(`/workout/${this.$route.params.id}`, {
            name: this.workout.name,
            description: this.workout.description,
            img: this.workout.img,
          })
          //return this.$router.push('/my/workouts')
          return this.$router.push(this.localePath('my-workouts'))

        } catch (e) {

            return true;

        }

      }

      
  }
}
</script>

<style lang="sass">
textarea.form-control
  border-radius: 30px
  border: 1px solid #D0CCDE 
  padding: 20px
  font-size: 18px
.full-img
    width: auto
    max-height: 400px 
    background: cover
    border-radius: 20px
</style>
