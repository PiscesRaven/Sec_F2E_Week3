<template lang="pug">
  #app
    Main
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Main from "@v/Main.vue";

@Component({
  components: {
    Main
  }
})
export default class App extends Vue {}
</script>

