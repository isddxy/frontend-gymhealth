<template>
    <header>
        <Logo></Logo>
        <top_nav_menu></top_nav_menu>
    </header>
</template>


<script>
import Logo from '~/components/header/items/Logo.vue'
import top_nav_menu from '~/components/header/items/top_nav_menu.vue'

export default {
  components: {
    Logo,
    top_nav_menu
  }
}
</script>

<style lang="sass" scoped>
header
    display: grid
    grid-template-columns: 224px 1fr
    grid-area: header
    margin-top: 80px
    align-items: center
</style>