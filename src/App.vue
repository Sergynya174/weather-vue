<script setup>

</script>

<template>
  <div class="page">
    <nav class="container-link">
      <router-link class="link" active-class="active" to="/">Погода</router-link>
      <router-link class="link" active-class="active" to="/history">Настройки</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="sass" scoped>
@import './assets/styles/main'
.page
  position: relative
  display: flex
  justify-content: center
  align-items: center
  min-height: 100vh
  background-color: #59585d
  flex-direction: column

.container-link
  display: flex
  width: 100%
  margin: 10px auto 0
  align-items: center
  justify-content: space-evenly
  gap: 10px
  
.link
  text-decoration: none

.active
  background-color: #0e100f
  max-width: 170px
  width: 35%
  height: 50px
  border-radius: 10px 10px 0 0
  display: flex
  align-items: center
  justify-content: center
  
</style>
