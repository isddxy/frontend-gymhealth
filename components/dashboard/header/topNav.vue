<template>
  <nav class="navbar">
    <ul class="top-menu">
      <li class="nav-item">
        <nuxt-link :to="localePath('search-workout')" class="nav-link" >{{ $t('topNav.workouts') }}</nuxt-link>
      </li>
      <!-- <li class="nav-item">
        <nuxt-link :to="localePath('search-meal')" class="nav-link">{{ $t('topNav.meals') }}</nuxt-link>
      </li> -->
      
      <!-- <li class="nav-item">
        <nuxt-link :to="localePath('search-trainer')" class="nav-link">{{ $t('topNav.trainers') }}</nuxt-link>
      </li> -->
      <li class="nav-item">
        <nuxt-link :to="localePath('search-muscle')" class="nav-link">{{ $t('topNav.muscles') }}</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link :to="localePath('search-muscle-group')" class="nav-link">{{ $t('topNav.muscle_group') }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>
