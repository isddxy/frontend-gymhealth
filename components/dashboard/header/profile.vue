<template>
  <div>
            <template v-if="!authenticated">
              <div class="profile">
                <nuxt-link :to="localePath('start-sign-in')" class="btn btn-top-menu">{{ $t('auth.sign_in') }}</nuxt-link>
              </div>
            </template>
            <template v-if="authenticated">
                <div class="profile">
                  <nuxt-link :to="localePath('my-profile')"  class="profile-user">
                    <div class="profile-user-name">{{ user.name }}</div>
                    <div class="profile-user-photo">
                      <img src="https://picsum.photos/200/300" class="userphoto">
                    </div>
                  </nuxt-link>
                </div>
            </template>
  </div>
</template>
