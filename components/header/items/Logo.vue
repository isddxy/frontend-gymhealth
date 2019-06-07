<template>
  <div class="logo">
    <nuxt-link :to="localePath('index')">
      <div class="icon">
          <img src="~/static/assets/img/_src/logo/short-logo.svg"
          alt="GymHealth logotype">
      </div>
      <div class="name">
          <img src="~/static/assets/img/_src/logo/gymhealth.svg"
          alt="GymHealth logotype">
      </div>
    </nuxt-link>
  </div>
</template>

<style lang="sass" scoped>
.logo
  text-decoration: none
  &:hover
    .icon
      -webkit-transform: scale(1.2)
      transform: scale(1.2)
  .icon
    //outline: 1px solid red
    margin: 0 11px 0px 0
    float: left
    width: 40px
    height: 32px
    transition: transform .3s linear
  .name
    float: left
    padding-top: 4px
    margin-bottom: -8px
    //outline: 1px solid red
    width: 173px
</style>