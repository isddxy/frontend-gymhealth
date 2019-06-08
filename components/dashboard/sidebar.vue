<template>
  <div class="sidebar">
    <nuxt-link :to="localePath('my')" class="logo">
      <img class="icon" src="~/static/assets/img/_src/logo.svg">
      <img class="name" src="~/static/assets/img/_src/GymHealth.svg">
    </nuxt-link>
    <nav>
      <ul class="menu">
          <li>
            <nuxt-link :to="localePath('my-plan')" class="text-muted">
              <span class="icon">
                  <img src="~/static/assets/img/_src/icon/calendar.svg">
              </span>
              <span class="name">{{ $t('sidebar.plan') }}</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('my-workouts')" class="text-muted">
              <span class="icon">
                <img src="~/static/assets/img/_src/icon/girya.svg">
              </span>
              <span class="name">{{ $t('sidebar.workouts') }}</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('my-body-size')" class="text-muted">
              <span class="icon">
                <img src="~/static/assets/img/_src/icon/biceps.svg">
              </span>
              <span class="name">{{ $t('sidebar.body_size') }}</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('my-meal')" class="text-muted active">
              <span class="icon">
                <img src="~/static/assets/img/_src/icon/meal.svg">
                <div class="notification">
                  <span class="badge badge-small badge-red badge-icon">3</span>
                </div>
              </span>
              <span class="name">{{ $t('sidebar.meal') }}</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('my-stat')" class="text-muted">
              <span class="icon">
                <img src="~/static/assets/img/_src/icon/stat.svg">
              </span>
              <span class="name">{{ $t('sidebar.stat') }}</span>
            </nuxt-link>
          </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Logo from '~/components/header/items/Logo.vue'

export default {
  name: 'AppSidebar',
  components: {
    Logo
  }
}
</script>

<style lang="sass">
.lang
  margin: 40px 0
  font-size: 14px
  display: grid
  position: absolute
  bottom: 0
  right: 0
  grid-template-areas: "select-lang" "active"
  grid-template-columns: 1fr
  cursor: pointer
  .flag
    grid-area: 'flag'
    width: 20px
    height: 14px
    &-active
      opacity: 0
      transition: opacity .5s linear
  .select-lang
    grid-area: 'select-lang'
    border-radius: 10px 10px 0 0
    opacity: 0
    transition: opacity .5s linear
    margin: 0
    padding: 0
    .language
      opacity: 0
      text-decoration: none
      color: rgba(152, 147, 168, 0.75)
      @for $i from 1 through 5
        &:nth-child(#{$i}n)
          transition: opacity #{ ($i - 1)/10 }s linear
      li
        list-style: none
        display: grid
        grid-template-areas: "flag name"
        grid-template-columns: 40px 1fr
        height: 34px
      .flag
        align-self: center
        justify-self: center
        grid-area: 'flag'
      span.name
        align-self: center
        justify-self: left
        grid-area: 'name'
        opacity: 0.8
        min-width: 80px
      &:first-child:hover
        border-radius: 10px 10px 0 0
      &:hover
        color: #7F7A8F
        background-color: rgba(28, 28, 28, 0.04)
        span.name
          opacity: 0.9

    &:hover ~ .active .arrow
      transform: rotate(180deg)
      transition: transform .25s linear
  .active
    z-index: 2
    grid-area: 'active'
    display: grid
    height: 34px
    grid-template-areas: "flag name arrow"
    grid-template-columns: 40px 1fr 33px
    border-radius: 0 0 10px 10px
    transition: background-color .3s linear
    justify-items: center
    align-items: center
    span.name
      grid-area: 'name'
      opacity: 0.8
    .arrow
      grid-area: 'arrow'
      opacity: 0.5
      transition: transform .35s linear
  &:hover
    .select-lang
      height: auto
      display: grid
      opacity: 1
      background-color: rgba(28, 28, 28, 0.025)
      .language
        opacity: 1
      @for $i from 5 through 1
        .language:nth-child(#{$i})
            transition: opacity #{0 + ((6 - $i)/ 10) }s linear
    .active
      background-color: rgba(28, 28, 28, 0.05)
      .flag-active
        opacity: 1
        transition: opacity .25s linear
      .arrow
        transform: rotate(90deg)
        transition: transform .15s linear

</style>

