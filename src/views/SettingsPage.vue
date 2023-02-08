<template>
  <SettingsContainer />
</template>

<script>
  import SettingsContainer from "@/components/Settings/SettingsContainer.vue"
  export default {
    data: function(){
      return {
        title: "Settings"
      }
    },
    components: {
      SettingsContainer
    },
  }
</script>

<style>
</style>
