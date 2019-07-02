<template>
  <div class="container col-md-6 mt-5">
    <h1>{{ $t('my.workout.create.title') }}</h1>
    <br>
    <form @submit.prevent="create">
      <div class="form-group">
        <label><strong>{{$t('my.body.add.neck')}}:</strong></label>
        <input v-model="form.neck" type="text" class="form-control" :placeholder="$t('my.body.add.neck')" autofocus>
        <small class="form-text text-danger" v-if="errors.neck">{{errors.neck[0]}}</small>
      </div>
      <div class="form-group">
        <label><strong>{{$t('my.body.add.chest')}}:</strong></label>
        <input v-model="form.chest" type="text" class="form-control" :placeholder="$t('my.body.add.chest')" autofocus>
        <small class="form-text text-danger" v-if="errors.chest">{{errors.chest[0]}}</small>
      </div>
      <div class="form-group">
        <label><strong>{{$t('my.body.add.under_chest')}}:</strong></label>
        <input v-model="form.under_chest" type="text" class="form-control" :placeholder="$t('my.body.add.under_chest')" autofocus>
        <small class="form-text text-danger" v-if="errors.under_chest">{{errors.under_chest[0]}}</small>
      </div>
      <div class="form-group">
        <label><strong>{{$t('my.body.add.arm_left')}}:</strong></label>
        <input v-model="form.arm_left" type="text" class="form-control" :placeholder="$t('my.body.add.arm_left')" autofocus>
        <small class="form-text text-danger" v-if="errors.arm_left">{{errors.arm_left[0]}}</small>
      </div>
      <div class="form-group">
        <label><strong>{{$t('my.body.add.arm_right')}}:</strong></label>
        <input v-model="form.arm_right" type="text" class="form-control" :placeholder="$t('my.body.add.arm_right')" autofocus>
        <small class="form-text text-danger" v-if="errors.arm_right">{{errors.arm_right[0]}}</small>
      </div>
      <div class="form-group">
        <label><strong>{{$t('my.body.add.forearm_left')}}:</strong></label>
        <input v-model="form.forearm_left" type="text" class="form-control" :placeholder="$t('my.body.add.forearm_left')" autofocus>
        <small class="form-text text-danger" v-if="errors.forearm_left">{{errors.forearm_left[0]}}</small>
      </div>
      <div class="form-group">
        <label><strong>{{$t('my.body.add.forearm_right')}}:</strong></label>
        <input v-model="form.forearm_right" type="text" class="form-control" :placeholder="$t('my.body.add.forearm_right')" autofocus>
        <small class="form-text text-danger" v-if="errors.forearm_right">{{errors.forearm_right[0]}}</small>
      </div>
      <div class="form-group">
        <label><strong>{{$t('my.body.add.wrist')}}:</strong></label>
        <input v-model="form.wrist" type="text" class="form-control" :placeholder="$t('my.body.add.wrist')" autofocus>
        <small class="form-text text-danger" v-if="errors.wrist">{{errors.wrist[0]}}</small>
      </div>
      <div class="form-group">
        <label><strong>{{$t('my.body.add.waist')}}:</strong></label>
        <input v-model="form.waist" type="text" class="form-control" :placeholder="$t('my.body.add.waist')" autofocus>
        <small class="form-text text-danger" v-if="errors.waist">{{errors.waist[0]}}</small>
      </div>
      <div class="form-group">
        <label><strong>{{$t('my.body.add.belly')}}:</strong></label>
        <input v-model="form.belly" type="text" class="form-control" :placeholder="$t('my.body.add.belly')" autofocus>
        <small class="form-text text-danger" v-if="errors.belly">{{errors.belly[0]}}</small>
      </div>
      <div class="form-group">
        <label><strong>{{$t('my.body.add.hip')}}:</strong></label>
        <input v-model="form.hip" type="text" class="form-control" :placeholder="$t('my.body.add.hip')" autofocus>
        <small class="form-text text-danger" v-if="errors.hip">{{errors.hip[0]}}</small>
      </div>
      <div class="form-group">
        <label><strong>{{$t('my.body.add.hip_left')}}:</strong></label>
        <input v-model="form.hip_left" type="text" class="form-control" :placeholder="$t('my.body.add.hip_left')" autofocus>
        <small class="form-text text-danger" v-if="errors.hip_left">{{errors.hip_left[0]}}</small>
      </div>
      <div class="form-group">
        <label><strong>{{$t('my.body.add.hip_right')}}:</strong></label>
        <input v-model="form.hip_right" type="text" class="form-control" :placeholder="$t('my.body.add.hip_right')" autofocus>
        <small class="form-text text-danger" v-if="errors.hip_right">{{errors.hip_right[0]}}</small>
      </div>
      <div class="form-group">
        <label><strong>{{$t('my.body.add.shin_left')}}:</strong></label>
        <input v-model="form.shin_left" type="text" class="form-control" :placeholder="$t('my.body.add.shin_left')" autofocus>
        <small class="form-text text-danger" v-if="errors.shin_left">{{errors.shin_left[0]}}</small>
      </div>
      <div class="form-group">
        <label><strong>{{$t('my.body.add.shin_right')}}:</strong></label>
        <input v-model="form.shin_right" type="text" class="form-control" :placeholder="$t('my.body.add.shin_right')" autofocus>
        <small class="form-text text-danger" v-if="errors.shin_right">{{errors.shin_right[0]}}</small>
      </div>
      <div class="form-group">
        <label><strong>{{$t('my.body.add.ankle')}}:</strong></label>
        <input v-model="form.ankle" type="text" class="form-control" :placeholder="$t('my.body.add.ankle')" autofocus>
        <small class="form-text text-danger" v-if="errors.ankle">{{errors.ankle[0]}}</small>
      </div>

        <h2>Фото</h2>
        <div class="form-group">
            <label><strong>{{$t('my.body.add.photo_front')}}:</strong></label>
            <input v-model="form.photo_front" type="text" class="form-control" :placeholder="$t('my.body.add.photo_front')" autofocus>
            <small class="form-text text-danger" v-if="errors.photo_front">{{errors.photo_front[0]}}</small>
        </div>
        <div class="form-group">
            <label><strong>{{$t('my.body.add.photo_back')}}:</strong></label>
            <input v-model="form.photo_back" type="text" class="form-control" :placeholder="$t('my.body.add.photo_back')" autofocus>
            <small class="form-text text-danger" v-if="errors.photo_back">{{errors.photo_back[0]}}</small>
        </div>
        <div class="form-group">
            <label><strong>{{$t('my.body.add.photo_left')}}:</strong></label>
            <input v-model="form.photo_left" type="text" class="form-control" :placeholder="$t('my.body.add.photo_left')" autofocus>
            <small class="form-text text-danger" v-if="errors.photo_left">{{errors.photo_left[0]}}</small>
        </div>
        <div class="form-group">
            <label><strong>{{$t('my.body.add.photo_right')}}:</strong></label>
            <input v-model="form.photo_right" type="text" class="form-control" :placeholder="$t('my.body.add.photo_right')" autofocus>
            <small class="form-text text-danger" v-if="errors.photo_right">{{errors.photo_right[0]}}</small>
        </div>
      
     
      <br>
      <button type="submit" class="btn btn-primary">{{ $t('my.body.add.submit_btn_name') }}</button>
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
            // neck: '',
            // chest: '',
            // under_chest: '',
            // shoulders: '',
            // arm_left: '',
            // arm_right: '',
            // forearm_left: '',
            // forearm_right: '',
            // wrist: '',
            // waist: '',
            // belly: '',
            // hip: '',
            // hip_left: '',
            // hip_right: '',
            // shin_left: '',
            // shin_right: '',
            // ankle: '',

            photo_front: '',
            photo_back: '',
            photo_left: '',
            photo_right: '',
        }
      }
    },
    methods: {
      async create() {

        try {

          await this.$axios.$post('/user/body/add/', this.form)
          return this.$router.push(this.localePath('my-body'))

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












