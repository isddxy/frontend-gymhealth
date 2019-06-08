<template>
  <div>
    <div class="content-full">
        <h1>{{ $t('auth.sign_up') }}</h1>
        <form @submit.prevent="submit">
            <div class="form-group">
                <label>{{ $t('auth.full_name') }}</label>
                <input v-model.trim="form.name" type="text" class="form-control" v-bind:placeholder="$t('auth.full_name_test')" autofocus>
                <small class="form-text text-danger" v-if="errors.name">{{ errors.name[0] }}</small>
            </div>
            <div class="form-group">
                <label>Email</label>
                <input v-model.trim="form.email" type="email" class="form-control" v-bind:placeholder="$t('auth.email_test')">
                <small class="form-text text-danger" v-if="errors.email">{{ errors.email[0] }}</small>
            </div>
            <div class="form-group">
                <label>{{ $t('auth.password') }}</label>
                <input v-model.trim="form.password" type="password" class="form-control" v-bind:placeholder="$t('auth.password')">
                <small class="form-text text-danger" v-if="errors.password">{{ errors.password[0] }}</small>
            </div>
            <button type="submit" class="btn btn-large btn-color-accent btn-start btn-response btn-submit">{{ $t('auth.create_account') }}т</button>
            <hr>
            <nuxt-link :to="localePath('start-sign-in')" class="btn btn-large btn-color-empty-border-gray btn-response">{{ $t('auth.sign_in') }}</nuxt-link>
      </form>


      </div>
  </div>
</template>

<script>
export default {
    layout: 'start-main',
    middleware: ['guest'],
    components: {

    },
    data () {
        return {
            form: {
                email: '',
                name: '',
                password: ''
            }
        }
    },
    methods: {
        async submit() {

        try {

            await this.$axios.$post('register', this.form)
            await this.$auth.loginWith('local', {
                data: {
                    email: this.form.email,
                    password: this.form.password
                }
            })

            this.$router.push({
                path: this.$route.query.redirect || "/ru/my"
            })

        } catch (e) {

            return true;

        }

        },
    },
};
</script>

<style>
</style>
