<template>
  <div class="dashboard">
    <v-container>
      <h1 class="subheading grey--text">Dashboard</h1>
      <span v-for="project in projects" :key="project.id">
        <ProjectCard flat :key="project.id" :project="project" />
      </span>
    </v-container>
  </div>
</template>


<script>
import ProjectCard from "@/components/ProjectCard";

export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: [
        {
          projectTitle: "CSS Styling",
          person: "Juan",
          dueBy: "April 20 2019",
          status: "ongoing"
        },
        {
          projectTitle: "HTML Layout",
          person: "Pedro",
          dueBy: "April 10 2019",
          status: "complete"
        },
        {
          projectTitle: "Flat remodelation",
          person: "Enrique",
          dueBy: "June 20 2019",
          status: "complete"
        },
        {
          projectTitle: "Task management cleanup",
          person: "All",
          dueBy: "July 20 2019",
          status: "overdue"
        }
      ]
    };
  }
};
</script>