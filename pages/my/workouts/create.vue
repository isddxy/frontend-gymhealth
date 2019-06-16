<template>
  <div class="container col-md-6 mt-5">
    <h1>{{ $t('paga_workout.create_new') }}</h1>
    <br>
    <form @submit.prevent="create">
      <div class="form-group">
        <label><strong>{{ $t('paga_workout.name') }}:</strong></label>
        <input v-model="form.name" type="text" class="form-control" :placeholder="$t('paga_workout.name')" autofocus>
        <small class="form-text text-danger" v-if="errors.name">{{errors.name[0]}}</small>
      </div>
      <div class="form-group">
        <label><strong>{{ $t('paga_workout.img') }}:</strong></label>
        <input v-model="form.img" type="text" class="form-control" :placeholder=" $t('paga_workout.img')" autofocus>
        <small class="form-text text-danger" v-if="errors.img">{{errors.img[0]}}</small>
      </div>
      <div class="form-group">
        <label><strong>{{ $t('paga_workout.description') }}:</strong></label>
        <textarea v-model="form.description" class="form-control" rows="5"></textarea>
        <small class="form-text text-danger" v-if="errors.description">{{errors.description[0]}}</small>
      </div>
      <button type="submit" class="btn btn-primary">Create</button>
    </form>
  </div>
</template>

<script>
  export default {
    layout: 'dashboard',
    middleware: ['auth'],
    head() {
      return { title: this.$t('paga_workout.create_new') }
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
          return this.$router.push('/my/workouts')

        } catch (e) {

            return true;

        }

      }
    }
  }
</script>













