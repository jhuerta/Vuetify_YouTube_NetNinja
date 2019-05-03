<template>
  <nav>
    <v-snackbar
      v-model="messageNotificationBar"
      :timeout="5000"
      top
      color="success"
    >
      <span>Awesome. The project has been added </span>
      <div>
        <span class="font-weight-bold">Title: </span>
        {{ savedProject.projectTitle }}
        <span class="font-weight-bold">Person: </span>
        {{ savedProject.person }}
        <span class="font-weight-bold">Due by: </span> {{ savedProject.dueBy }}
      </div>
      <span>Awesome. The project has been added </span>
      <v-btn flat color="white" @click.native="messageNotificationBar = false"
        >Close</v-btn
      >
    </v-snackbar>

    <v-toolbar app flat class="primary">
      <v-toolbar-side-icon @click="toggleDrawer"></v-toolbar-side-icon>
      <v-toolbar-title class="grey--text text--lighten-2">
        <v-icon left color="grey">book</v-icon>
        <span class="font-weight-light">ToDo</span>
        <span class="text-uppercase">Ninja</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu offsetY>
        <v-btn flat slot="activator" color="grey">
          <v-icon left>expand_more</v-icon>
          <span>Menu</span>
        </v-btn>

        <v-list>
          <v-list-tile
            v-for="link in links"
            :key="link.id"
            router
            :to="link.route"
          >
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-btn color="grey lighten-2" flat>
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="primary lighten-1">
      <v-btn fab flat small color="black" @click="toggleDrawer">
        <v-icon>close</v-icon>
      </v-btn>

      <v-layout column align-center>
        <v-flex mt5>
          <v-avatar size="100">
            <img
              src="https://api.adorable.io/avatars/100/anything@adorable.png"
            />
          </v-avatar>
          <p class="white--text subheading mt-2">The Net Ninja</p>
        </v-flex>

        <v-flex class="mt-4 mb-3">
          <Popup @projectSuccessfullySaved="projectHasBeenSuccessfullySaved" />
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile
          v-for="link in links"
          :key="link.id"
          router
          :to="link.route"
        >
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{
              link.text
            }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "@/components/Popup.vue";
export default {
  components: {
    Popup
  },
  data() {
    return {
      savedProject: {},
      messageNotificationBar: false,
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
    projectHasBeenSuccessfullySaved(project) {
      this.savedProject = project;
      this.messageNotificationBar = true;
    },
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>