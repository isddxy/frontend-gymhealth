<template>
    <nav class="top-menu">
        <ul>
            <li><a href="#">{{ $t('common.workouts') }}</a></li>
            <li><a href="#">{{ $t('common.exercises') }}</a></li>
            <li><nuxt-link :to="localePath('index')">{{ $t('common.trainers') }}</nuxt-link></li>
            <template v-if="!authenticated">
                <li><nuxt-link :to="localePath('start-about')" class="btn btn-top-menu">{{ $t('common.how_work') }}</nuxt-link></li>
            </template>
            <template v-if="authenticated">
                <li><nuxt-link :to="localePath('profile')" class="btn btn-top-menu">{{ user.name }}</nuxt-link></li>
            </template>
        </ul>
    </nav>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    computed: {
        ...mapGetters({
            loggedIn: "auth/authenticated"
        })
    }    
}
</script>


<style lang="sass" scoped>
.top-menu
    ul
        margin: 0
        padding: 0
        display: grid
        list-style: none
        grid-template-columns: repeat(4, auto)
        grid-gap: 90px
        align-items: center
        justify-content: right
        li
            justify-content: left
            height: 100%
            display: grid
            justify-items: center
            a
                text-decoration: none
                color: #7E738B
                font-size: 22px
                text-decoration: none
                align-self: center
                justify-self: center
                line-height: 23px
                display: block
</style>