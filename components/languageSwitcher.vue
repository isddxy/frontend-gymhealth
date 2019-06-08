<template>
  <div class="lang">

    <ul class="select-lang">
      <nuxt-link class="language"
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)">
        <li>
          <img class="flag" :src="'/assets/img/_src/icon/flags/' + locale.code + '.svg'">
          <span class="name">{{ locale.name }}</span>
        </li>
      </nuxt-link>
    </ul>

    <div class="active">
      <img class="flag flag-active" :src="'/assets/img/_src/icon/flags/' + langNow.code + '.svg'">
      <span class="name">{{ langNow.name }}</span>
      <img class="arrow" src="/assets/img/_src/icon/flags/arrow.svg">
    </div>

  </div>
</template>

<script>
export default {
  name: 'AppLangswitcher',
  data: () => ({

  }),
  computed: {
    langNow() {

      let languge = {
        code: 'ru',
        name: 'Englishas'
      }

      let l_lang = this.$i18n.locale;

      this.$i18n.locales.filter(function (lang) {
        if (lang.code == l_lang) {
          languge.code = lang.code
          languge.name = lang.name
          return languge
        }
      })
          
      return languge

    },

    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
    
  },
  methods: {
    changeLang: function(langId, langName, langImg) {
      this.langnow.id = langId
      this.langnow.name = langName
      this.langnow.img = langImg
    }
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

