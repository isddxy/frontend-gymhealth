<template>
  <div class="lang">

    <ul class="select-lang">
      <nuxt-link  v-for="lang in languages" :to="switchLocalePath(lang.id)" class="language" :key="lang.id" @click="changeLang(lang.id)">
      <li>
        <img class="flag" :src="lang.img">
        <span class="name">{{ lang.name }}</span>
      </li>
      </nuxt-link>
    </ul>

    <div class="active">
      <img class="flag flag-active" :src="langnow.img">
      <span class="name" :key="langnow.id">{{ langnow.name }}</span>
      <img class="arrow" src="~/static/assets/img/_src/icon/flags/arrow.svg">
    </div>

  </div>
</template>

<script>
export default {
  name: 'AppLangswitcher',
  data: () => ({
    langnow: {
      id: 'ru',
      name: 'Русский',
      img: '/assets/img/_src/icon/flags/ru.svg',
    },
    languages: [
      {
        id: 'ru',
        name: 'Русский',
        img: '/assets/img/_src/icon/flags/ru.svg',
      },
      {
        'id' : 'es',
        'name' : 'Español',
        'img' : '/assets/img/_src/icon/flags/es.svg'
      },
      {
        'id' : 'pt',
        'name' : 'Portugal',
        'img' : '/assets/img/_src/icon/flags/pt.svg'
      },
      {
        'id' : 'fr',
        'name' : 'France',
        'img' : '/assets/img/_src/icon/flags/fr.svg'
      },
      {
        'id' : 'zh',
        'name' : '中国',
        'img' : '/assets/img/_src/icon/flags/zh.svg'
      },
      {
        'id' : 'en',
        'name' : 'English',
        'img' : '/assets/img/_src/icon/flags/us.svg'
      },
    ]
  }),
  computed: {
  },
  methods: {
    changeLang: function(lang) {
      this.languages.forEach(function(value) {
        if( lang == value.id ) {
          console.log(this.langnow.id);
          // langnow.id = value.id;
          // langnow.name = value.name;
          // langnow.img = value.img;
        }
      });

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

