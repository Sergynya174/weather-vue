<template>
  <nav class="flex  w-full m-auto space-x-3 text-center p-2">
    <router-link class="grow" active-class="border-black border-b-2" to="/">Weather</router-link>
    <router-link class="grow" active-class="border-black border-b-2" to="/settings">Settings</router-link>
  </nav>
  <router-view/>
</template>

<style>
</style>
