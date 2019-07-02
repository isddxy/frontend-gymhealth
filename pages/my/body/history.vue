<template>
  <div>
    <div class="right-content">
      <h1>История замеров тела</h1>
      <br><br>
      <p>
        Не нужно дожидаться прихода в зал, чтобы решить, чем вы будете заниматься сегодня, какие мышцы и каким образом тренировать. На это расходуется масса времени. Идите в зал с четким планом тренировки, из которого вы точно будете знать, что вам нужно нагружать сегодня.
      </p>

      <div class="bodysize">

        <div v-for="(body, index) in bodysize" :key="index">
          <nuxt-link :to="localePath({ name: 'my-body-id', params: {id: body.id} })">
                Front:<br>
                <img :src="body.photo_front" height="100">
                <hr>
                back:<br>
                <img :src="body.photo_back" height="100">
                <hr>
                left:<br>
                <img :src="body.photo_left" height="100">
                <hr>
                right:<br>
                <img :src="body.photo_right" height="100">
                <p>{{ body.created_at }}</p>
                <p>{{ body.neck }}</p>
                <p>{{ body.chest }}</p>
                <p>{{ body.under_chest }}</p>
                <p>{{ body.shoulders }}</p>
                <p>{{ body.arm_left }}</p>
                <p>{{ body.arm_right }}</p>
                <p>{{ body.forearm_left }}</p>
                <p>{{ body.forearm_right }}</p>
                <p>{{ body.wrist }}</p>
                <p>{{ body.waist }}</p>
                <p>{{ body.belly }}</p>
                <p>{{ body.hip }}</p>
                <p>{{ body.hip_left }}</p>
                <p>{{ body.hip_right }}</p>
                <p>{{ body.shin_left }}</p>
                <p>{{ body.shin_right }}</p>
                <p>{{ body.ankle }}</p>

            <hr>
          </nuxt-link>
          
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  middleware: ['auth'],
  head() {
      return { title: 'История замеров тела' }
  },
  data() {
    return {
      bodysize: [],
    }
  },
  mounted() {
    this.$axios.$post('/user/body').then(response => {
      this.bodysize = response.data
    })
  }
}
</script>

<style lang="sass">

</style>
