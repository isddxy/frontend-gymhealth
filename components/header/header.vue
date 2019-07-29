<template>
    <header>
        <Logo></Logo>
        <nav_menu></nav_menu>
    </header>
</template>


<script>
import Logo from '~/components/header/items/Logo.vue'
import nav_menu from '~/components/header/items/nav_menu.vue'

export default {
  components: {
    Logo,
    nav_menu
  }
}
</script>

<style lang="sass" scoped>
header
  display: grid
  grid-template-columns: 240px 1fr
  grid-area: header
  margin-top: 2.7em //80px
  align-items: center
</style>
