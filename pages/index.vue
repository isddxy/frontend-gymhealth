<template>

<body id="welcome">

	<!-- Custom HTML -->

	<div class="page-main">
		<div class="bg">
			<img class="background" src="~/static/assets/img/_src/bg/bg-background.svg">
			<img class="mountain" src="~/static/assets/img/_src/bg/bg-mountain.svg">
			<img class="fitness-girl" src="~/static/assets/img/_src/bg/fitness_girl.svg">
		</div>

		<div class="container">
			<header>
				<div class="logo">
					<a href="/">
						<div class="icon">
								<img src="~/static/assets/img/_src/logo/short-logo.svg"
								alt="GymHealth logotype">
						</div>
						<div class="name">
								<img src="~/static/assets/img/_src/logo/gymhealth.svg"
								alt="GymHealth logotype">
						</div>
					</a>
				</div>

				<nav class="top-menu">
					<ul>
						<li><a href="#">Тренировки</a></li>
						<li><a href="#">Упражнения</a></li>
						<li><a href="#">Тренера</a></li>
						<li><a class="btn btn-top-menu" href="#">Как это работает?</a></li>
					</ul>
				</nav>
			</header>

			<div class="right-content">
				<h1>Reach your goals <br>right now</h1>
				<p>
					Платформа, позволяющая планировать и контролировать тренировочный процесс, следить за прогрессом, а также сном и приёмами пищи.
				</p>

				<div class="btns-form">
					<a href="#" class="btn btn-large btn-color-accent btn-start">Начать бесплатно</a>
					<a href="#" class="btn btn-large btn-color-empty-border-gray btn-response">Войти</a>
				</div>

				<div class="btns-auth-soc">
					<div class="title">Авторизоваться через</div>
					<ul>
						<li>
							<a href="#" class="btn-soc btn-soc-google"><img src="~/static/assets/img/_src/icon/soc/google.svg"></a>
						</li>
						<li>
							<a href="#" class="btn-soc btn-soc-vk"><img src="~/static/assets/img/_src/icon/soc/vk.svg"></a>
						</li>
						<li>
							<a href="#" class="btn-soc btn-soc-facebook"><img src="~/static/assets/img/_src/icon/soc/facebook.svg"></a>
						</li>
						<li>
							<a href="#" class="btn-soc btn-soc-twitter"><img src="~/static/assets/img/_src/icon/soc/twitter.svg"></a>
						</li>
					</ul>
				</div>

			</div>


		</div>

		<!-- <div class="switcher-language">
			English
		</div> -->

	</div>
</body>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  head: {
    title: 'Gymhealth 🚀'
  }
}
</script>

<style>

</style>
