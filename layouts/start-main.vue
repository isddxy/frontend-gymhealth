<template>
  <div id="welcome">

    <div class="page-main">
      <div class="bg">
        <img class="background" src="~/static/assets/img/_src/bg/bg-background.svg">
      </div>

      <div class="container">
        <header>
          <div class="logo">
            <nuxt-link to="/">
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

          <nav class="top-menu">
            <ul>
              <li><a href="#">Тренировки</a></li>
              <li><a href="#">Упражнения</a></li>
              <li><a href="#">Тренера</a></li>
              <li><nuxt-link to="/about" class="btn btn-top-menu">Как это работает?</nuxt-link></li>
            </ul>
          </nav>
        </header>

        <nuxt />


      </div>

    </div>
  </div>
</template>

<script>
export default {
  transition (to, from) {
    if (!from) return 'slide-left'
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  }
}
</script>


<style>
</style>
