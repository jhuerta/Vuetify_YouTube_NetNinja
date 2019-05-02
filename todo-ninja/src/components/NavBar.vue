<template>
  <nav>
    <v-navigation-drawer v-model="drawer" app class="primary lighten-1">
      <v-btn fab flat small color="black" @click="toggleDrawer">
        <v-icon>close</v-icon>
      </v-btn>

      <v-layout column align-center>
        <v-flex mt5>
          <v-avatar size="100">
            <img src="https://api.adorable.io/avatars/100/anything@adorable.png">
          </v-avatar>
          <p class="white--text subheading mt-2">The Net Ninja</p>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.id" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar flat class="primary">
      <v-toolbar-side-icon @click="toggleDrawer"></v-toolbar-side-icon>
      <v-toolbar-title class="grey--text text--lighten-2">
        <v-icon left color="grey">book</v-icon>
        <span class="font-weight-light">ToDo</span>
        <span class="text-uppercase">Ninja</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn color="grey lighten-2" flat>
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { id: 0, icon: "dashboard", text: "Dashboard", route: "/" },
        { id: 1, icon: "folder", text: "My Projects", route: "/projects" },
        { id: 2, icon: "people", text: "Team", route: "/team" },
        { id: 3, icon: "theaters", text: "Breakpoints", route: "/breakpoints" },
        { id: 4, icon: "toll", text: "Buttons", route: "/buttons" },
        { id: 5, icon: "call_missed", text: "Displays", route: "/displays" },
        { id: 6, icon: "games", text: "Playground", route: "/playground" },
        { id: 7, icon: "grid_on", text: "Grid", route: "/grid" }
      ]
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>