<template>
  <div>
    <div class="right-content">
      <h1>Sign In</h1>
      <form @submit.prevent="submit">
        <div class="form-group">
          <label>Email почта</label>
          <input v-model.trim="form.email" type="email" class="form-control" placeholder="Email" autofocus>
          <small class="form-text text-danger" v-if="errors.email">{{ errors.email[0] }}</small>
        </div>
        <div class="form-group">
          <label>Пароль</label>
          <input v-model.trim="form.password" type="password" class="form-control" placeholder="Ваш пароль">
          <small class="form-text text-danger" v-if="errors.password">{{ errors.password[0] }}</small>
        </div>
        <button type="submit" class="btn btn-primary">Войти</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'start-main',
  middleware: ['guest'],
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async submit() {
      
      try {

        await this.$auth.loginWith("local", {
          data: this.form
        });

        this.$router.push({
          path: this.$route.query.redirect || "/dashboard"
        })

      } catch (e) {

        return true;
      }

    }
  },
  components: {
  },
  head: {
    title: 'Sign In 🚀'
  }
}
</script>

<style>
</style>
