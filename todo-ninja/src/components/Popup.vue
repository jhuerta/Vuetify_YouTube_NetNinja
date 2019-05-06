<template>
  <v-dialog max-width="600px" v-model="dialog">
    <v-btn flat slot="activator" class="success">Add new project</v-btn>
    <v-card>
      <v-card-title>
        <h2>Add a new project</h2>
      </v-card-title>

      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field :rules="inputRules" label="title" v-model="title" prepend-icon="folder"></v-text-field>
          <v-text-field :rules="inputRules" label="person" v-model="person" prepend-icon="person"></v-text-field>
          <v-textarea
            :rules="inputRules"
            label="information"
            v-model="information"
            prepend-icon="edit"
          ></v-textarea>

          <v-select
            append-icon="folder"
            :items="projectStatuses"
            label="Project Status"
            v-model="projectStatus"
          ></v-select>

          <v-menu>
            <v-text-field
              :rules="inputRules"
              label="Due date"
              prepend-icon="date_range"
              slot="activator"
              :value="formattedDate"
            ></v-text-field>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>

          <v-spacer></v-spacer>

          <v-btn
            :class="['mx-0 mt-3', { error: !noError, success: noError }]"
            ref="addProjectBtn"
            :loading="loadingStatus"
            @click="submit"
          >Add Project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from "date-fns/format";
import db from "@/fb";
export default {
  computed: {
    formattedDate() {
      return this.due ? format(this.due, "Do MMM YYYY") : "";
    }
  },
  data() {
    return {
      projectStatuses: ["ongoing", "complete", "overdue"],
      noError: true,
      dialog: false,
      loadingStatus: false,
      due: null,
      projectStatus: "",
      title: "",
      person: "",
      information: "",
      inputRules: [v => v.length >= 3 || "Mnimum length is 3 characters"]
    };
  },
  methods: {
    submit() {
      this.loadingStatus = true;
      if (this.$refs.form.validate()) {
        const projectToSave = {
          projectTitle: this.title,
          person: this.person,
          dueBy: this.formattedDate,
          status: this.projectStatus,
          description: this.information
        };
        db.collection("projects")
          .add(projectToSave)
          .then(() => {
            this.dialog = false;
            this.$emit("projectSuccessfullySaved", projectToSave);
          })
          .catch(error => {
            this.noError = false;
            console.log(error);
          })
          .finally(() => {
            this.loadingStatus = false;
          });
      } else {
        console.log("not valid");
      }
    }
  }
};
</script>