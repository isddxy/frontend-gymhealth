<template>
  <div>
    <div class="content-full">
        <h1>Регистрация</h1>
        <form @submit.prevent="submit">
            <div class="form-group">
                <label>Полное имя</label>
                <input v-model.trim="form.name" type="text" class="form-control" placeholder="Имя Фамилия" autofocus>
                <small class="form-text text-danger" v-if="errors.name">{{ errors.name[0] }}</small>
            </div>
            <div class="form-group">
                <label>Email почта</label>
                <input v-model.trim="form.email" type="email" class="form-control" placeholder="Email">
                <small class="form-text text-danger" v-if="errors.email">{{ errors.email[0] }}</small>
            </div>
            <div class="form-group">
                <label>Пароль</label>
                <input v-model.trim="form.password" type="password" class="form-control" placeholder="Ваш пароль">
                <small class="form-text text-danger" v-if="errors.password">{{ errors.password[0] }}</small>
            </div>
            <button type="submit" class="btn btn-large btn-color-accent btn-start btn-response btn-submit">Регистрация</button>
            <hr>
            <nuxt-link to="/start/sign-in" class="btn btn-large btn-color-empty-border-gray btn-response">Войти</nuxt-link>
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
                path: this.$route.query.redirect || "/dashboard"
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
