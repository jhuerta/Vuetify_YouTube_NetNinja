<template>
  <v-card>
    <v-layout row wrap :class="`pl-3 py-2 project ${project.status}`">
      <v-flex xs12 md6 class="lighten-4">
        <div class="caption font-weight-bold">Project Title</div>
        <div>{{ project.projectTitle }}</div>
      </v-flex>
      <v-flex xs12 sm4 md2 class="white lighten-4">
        <div class="caption font-weight-bold">Person</div>
        <div>{{ project.person }}</div>
      </v-flex>
      <v-flex xs12 sm4 md2 class="white lighten-4">
        <div class="caption font-weight-bold">Due by</div>
        <div>{{ project.dueBy }}</div>
      </v-flex>
      <v-flex xs12 sm4 md2 class="white lighten-4">
        <div>
          <v-chip
            small
            :class="[
              'font-weight-medium black--text text--darken-4 lighten-2',
              { yellow: project.status == 'ongoing' },
              { green: project.status == 'complete' },
              { red: project.status == 'overdue' },
              `${project.status}`
            ]"
            >{{ project.status }}</v-chip
          >
        </div>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style  scoped>
.layout.row > div {
  padding: 4px;
}

.v-chip.ongoing {
  background-color: yellow;
}
.v-chip.complete {
  background-color: green;
}
.v-chip.overdue {
  background-color: red;
}

.project.ongoing {
  border-left: 15px solid yellow;
}
.project.complete {
  border-left: 15px solid green;
}
.project.overdue {
  border-left: 15px solid red;
}
</style>