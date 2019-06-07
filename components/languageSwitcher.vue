<template>
  <div class="lang">

    <ul class="select-lang">
      <li class="language" v-for="lang in languages" :key="lang.id" @click="changeLang(lang.id)">
        <img class="flag" :src="lang.img">
        <span class="name">{{ lang.name }}</span>
      </li>
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
      return this.$i18n.locale = lang;

    }
  }
}
</script>
