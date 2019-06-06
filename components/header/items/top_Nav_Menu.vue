<template>
    <nav class="top-menu">
        <ul>
            <li><a href="#">Тренировки</a></li>
            <li><a href="#">Упражнения</a></li>
            <li><a href="#">Тренера</a></li>
            <li><nuxt-link to="/about" class="btn btn-top-menu">Как это работает?</nuxt-link></li>
        </ul>
    </nav>
</template>

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