<template>
  <div class="profile">
    <nuxt-link :to="localePath('my-profile')"  class="profile-user">
      <div class="profile-user-name">{{ user.name }}</div>
      <div class="profile-user-photo">
        <img src="https://picsum.photos/200/300" class="userphoto">
      </div>
    </nuxt-link>
  </div>
</template>
