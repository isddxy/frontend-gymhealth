<template>
  <div>
    <div class="welcome-info">
      <h1>{{ $t('auth.sign_in') }}</h1>
      <form @submit.prevent="submit">
        <div class="form-group">
          <label>{{ $t('auth.login_or_email') }}</label>
          <input v-model.trim="form.email" type="email" class="form-control" v-bind:placeholder="$t('auth.login_or_email')" autofocus>
          <small class="form-text text-danger" v-if="errors.email">{{ errors.email[0] }}</small>
        </div>
        <div class="form-group">
          <label>{{ $t('auth.password') }}</label>
          <input v-model.trim="form.password" type="password" class="form-control" v-bind:placeholder="$t('auth.password')">
          <small class="form-text text-danger" v-if="errors.password">{{ errors.password[0] }}</small>
        </div>
        <button type="submit" class="btn btn-large btn-color-accent btn-start btn-response btn-submit">{{ $t('auth.sign_in') }}</button>
        <hr>
        <nuxt-link :to="localePath('start-sign-up')" class="btn btn-top-menu btn-response">{{ $t('auth.i_no_account') }}</nuxt-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'start',
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

        var config = {
            headers: {'X-localization': this.$i18n.locale}
        };

        await this.$auth.loginWith("local", {
          data: this.form
        });

        this.$router.push({
            path: this.localePath(this.$route.query.redirect || "/my")
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

<style lang="sass">
h1
  margin-bottom: 50px
p
  margin-bottom: 40px
  color: rgba(131, 126, 151, 0.83)
form
  width: 350px
  margin: 0 auto
</style>
