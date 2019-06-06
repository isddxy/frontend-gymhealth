<template>
  <div>
    <div class="right-content">
      <h1>Как это работает?</h1>
      <p>
        There was a time, not too long ago, when phrases like “private cloud” or “on prem” were forbidden within the offices of cloud providers. The mindset was clearly that everything – and they meant every single thing – ran better as a workload in the cloud.
        <br>
        And while it certainly is the case that most things run more reliably and less expensively in the cloud, Internet of Things (IoT) technology and use cases have changed the cloud-only mentality (or, at least, changed the meaning of “cloud”). By definition, a workload running on a thing cannot run in the cloud. But also, it clearly must run in conjunction with the cloud. Does the thing connect to the cloud or does the cloud extend to the thing?
      </p>
      <nuxt-link to="/sign-in" class="btn btn-large btn-color-empty-border-gray btn-response">Войти</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'start-main',
  components: {
  },
  head: {
    title: "Let's Start 🚀"
  }
}
</script>

<style>
</style>
