<template>
  <div>
    <div class="content-dashboard">
      <h1>{{ $t('search.muscle_group.title') }}</h1>
      <div class="content-search list">
        <div v-for="(muscle, index) in muscle_group" :key="index" class="search-card">
          <img :src="muscle.img"/>
          <h2>{{ muscle.name }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  head() {
      return { title: this.$t('search.muscle_group.title') }
  },
  data() {
    return {
      muscle_group: []
    }
  },
  async asyncData({$axios}) {
    let {data} = await $axios.$get('/search/muscle-group')
    return {
      muscle_group: data
    }
  }
  
}
</script>

<style <style lang="sass" scoped>
form
  width: 100%

.form-group input
  border: 1px solid #D0CCDE !important
.content-search
  margin-top: 40px
  display: grid
  grid-template-columns: 1fr 1fr 1fr 1fr
  grid-gap: 2vw
.search-card
  background-color: rgba(243, 239, 248, 0.48)
  padding: 30px
  border-radius: 20px
  overflow: hidden
  h2
    line-height: 32px
  h3
    color: #76699D
  &:hover
    box-shadow: 0px 8px 35px rgba(59, 34, 91, 0.15)
</style>
