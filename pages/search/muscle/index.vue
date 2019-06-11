<template>
  <div>
    <div class="content-dashboard">
      <h1>{{ $t('common.search') }} - {{ $t('topNav.muscles') }}</h1>
      <br>
      <form>
        <div class="form-group form-group-search">
          <input  type="text" class="form-control" v-bind:placeholder="$t('common.search')" autofocus>
          <small class="form-text text-danger"></small>
        </div>
      </form>
      <div class="content-search">
        <div v-for="(muscle, index) in muscles" :key="index" class="search-card">
          <img :src="muscle.img" height=150/>
          <h2>{{ muscle.name }}</h2>    
          <h3>{{ muscle.muscle_group.name }} </h3>
          <p>{{ muscle.description }}</p>
        </div>
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
  border: 1px solid #D0CCDE !important
.content-search
  margin-top: 40px
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  grid-gap: 2vw
.search-card
  background-color: rgba(243, 239, 248, 0.68)
  padding: 30px
  border-radius: 20px
  overflow: hidden
  h3
    color: #76699D
  p
    font-size: 18px
    color: #A09BB1
    overflow: hidden
    height: 60px
  img
    width: 100%
    height: auto
    border-radius: 10px
  &:hover
    box-shadow: 0px 8px 55px rgba(59, 34, 91, 0.15)
</style>
