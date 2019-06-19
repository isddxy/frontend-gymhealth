<template>
  <div class="container col-md-6 mt-5">
    <h1>{{ $t('my.workout.create.title') }}</h1>
    <br>
    <form @submit.prevent="create">
      <div class="form-group">
        <label><strong>{{ $t('my.workout.create.name') }}:</strong></label>
        <input v-model="form.name" type="text" class="form-control" :placeholder="$t('my.workout.create.name')" autofocus>
        <small class="form-text text-danger" v-if="errors.name">{{errors.name[0]}}</small>
      </div>
      <div class="form-group">
        <label><strong>{{ $t('my.workout.create.description') }}:</strong></label>
        <textarea v-model="form.description" class="form-control" rows="15"></textarea>
        <small class="form-text text-danger" v-if="errors.description">{{errors.description[0]}}</small>
      </div>
      <div class="form-group">
        <label><strong>{{ $t('my.workout.create.img') }}:</strong></label>
        <input v-model="form.img" type="text" class="form-control" :placeholder=" $t('my.workout.create.img')" autofocus>
        <small class="form-text text-danger" v-if="errors.img">{{errors.img[0]}}</small>
      </div>
      <br>
      <button type="submit" class="btn btn-primary">{{ $t('my.workout.create.submit_btn_name') }}</button>
    </form>
  </div>
</template>

<script>
  export default {
    layout: 'dashboard',
    middleware: ['auth'],
    head() {
      return { title: this.$t('my.workout.create.title') }
    },
    data() {
      return {
        form: {
          name: '',
          img: '',
          description: ''
        }
      }
    },
    methods: {
      async create() {

        try {

          await this.$axios.$post('/workout/create', this.form)
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
</style>












