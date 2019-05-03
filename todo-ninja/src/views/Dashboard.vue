<template>
  <div class="dashboard">
    <v-container>
      <h1 class="subheading grey--text">Dashboard</h1>
      <v-layout row wrap class="mb-3">
        <v-tooltip top>
          <v-btn
            slot="activator"
            color="gray"
            small
            flat
            @click="sortBy('projectTitle')"
          >
            <v-icon left small>folder</v-icon>
            <span class="caption text-lowercase">By project name</span>
          </v-btn>
          <span>
            <v-icon left small class="white">folder</v-icon>Sort by project
            title or name
          </span>
        </v-tooltip>

        <v-tooltip bottom>
          <v-btn
            slot="activator"
            color="gray"
            small
            flat
            @click="sortBy('person')"
          >
            <v-icon left small>person</v-icon>
            <span class="caption text-lowercase">By person</span>
          </v-btn>
          <span>
            <v-icon left small class="white">person</v-icon>sort instead by
            person
          </span>
        </v-tooltip>
      </v-layout>
      <span v-for="project in projects" :key="project.id">
        <ProjectCard flat :key="project.id" :project="project" />
      </span>
    </v-container>
  </div>
</template>


<script>
import ProjectCard from "@/components/ProjectCard";
import db from "@/fb";

export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: [
        // {
        //   projectTitle: "PCSS Styling",
        //   person: "Juan",
        //   dueBy: "April 20 2019",
        //   status: "ongoing"
        // },
        // {
        //   projectTitle: "ZHTML Layout",
        //   person: "Pedro",
        //   dueBy: "April 10 2019",
        //   status: "complete"
        // },
        // {
        //   projectTitle: "AFlat remodelation",
        //   person: "Enrique",
        //   dueBy: "June 20 2019",
        //   status: "complete"
        // },
        // {
        //   projectTitle: "BTask management cleanup",
        //   person: "All",
        //   dueBy: "July 20 2019",
        //   status: "overdue"
        // }
      ]
    };
  },
  created() {
    db.collection("projects").onSnapshot(data => {
      const changes = data.docChanges();
      changes.forEach(change => {
        if (change.type === "added") {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          });
        }
      });
    });
  },
  methods: {
    sortBy(propertyToSortBy) {
      this.projects.sort((a, b) => {
        const toReturn = a[propertyToSortBy] < b[propertyToSortBy] ? -1 : 1;
        return toReturn;
      });
    }
  }
};
</script>