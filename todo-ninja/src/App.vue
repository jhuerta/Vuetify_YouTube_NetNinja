<template>
  <v-app class="grey lighten-4">
    <NavBar />
    <v-content class="ml-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar
  },
  name: "App",

  data() {
    return {
      //
    };
  }
};
</script>
