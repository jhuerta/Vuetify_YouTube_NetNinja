<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>

    <v-container>
      <v-expansion-panel>
        <v-expansion-panel-content
          v-for="project in myProjects"
          :key="project.name"
        >
          <div slot="header">{{ project.projectTitle }}</div>
          <v-card-text class="px-4 grey--text">
            <div class="font-weight-bold">due by {{ project.dueBy }}</div>
            <div>
              Made by {{ project.person }}, currently
              <span class="font-weight-bold">{{ project.status }}</span>
            </div>
            <div class="my-4">{{ project.description }}</div>
          </v-card-text>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>
  </div>
</template>

<script>
import db from "@/fb";
export default {
  computed: {
    myProjects() {
      return this.projects.filter(p => p.person === "Juan");
    }
  },
  data() {
    return {
      projects: [
        // {
        //   projectTitle: "PCSS Styling",
        //   person: "Juan",
        //   dueBy: "April 20 2019",
        //   status: "ongoing",
        //   description:
        //     "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae officiis illo esse dolore, pariatur in inventore quas aliquid quo commodi repellendus, repellat eius consequuntur debitis perspiciatis alias magnam architecto unde. Adipisci quas placeat hic perspiciatis voluptates voluptatibus, repellendus sunt, modi exercitationem, maxime architecto soluta magnam doloribus molestiae? Ipsum repellat quis, sint, optio iure eum, odio repudiandae ipsa nobis fuga provident.  Qui voluptates esse eos ab eligendi nostrum, nihil libero, praesentium nulla, magni vitae officia. Rerum iusto id ab explicabo. Cumque dolore officiis saepe illo atque quibusdam error, ipsum accusamus harum.  Nemo ea eius quo saepe recusandae, tenetur, hic consequuntur amet aut ipsum doloribus! Quia illo beatae, cum iure id qui ex doloremque in expedita quae ipsa, aliquam, aut nam ab.   Ullam earum explicabo ipsa vitae officiis doloremque dolorum repellat alias minus quasi, pariatur nesciunt, quia unde. Deleniti iste odit officia asperiores vero corrupti, possimus dolores tempore tenetur veniam, modi obcaecati.  Minus quaerat dicta dolore qui optio similique voluptate, veniam quis. Quasi aliquam quis reiciendis voluptatum facere nam consequatur quo tempore."
        // },
        // {
        //   projectTitle: "ZHTML Layout",
        //   person: "Pedro",
        //   dueBy: "April 10 2019",
        //   status: "complete",
        //   description:
        //     "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae officiis illo esse dolore, pariatur in inventore quas aliquid quo commodi repellendus, repellat eius consequuntur debitis perspiciatis alias magnam architecto unde. Adipisci quas placeat hic perspiciatis voluptates voluptatibus, repellendus sunt, modi exercitationem, maxime architecto soluta magnam doloribus molestiae? Ipsum repellat quis, sint, optio iure eum, odio repudiandae ipsa nobis fuga provident.  Qui voluptates esse eos ab eligendi nostrum, nihil libero, praesentium nulla, magni vitae officia. Rerum iusto id ab explicabo. Cumque dolore officiis saepe illo atque quibusdam error, ipsum accusamus harum.  Nemo ea eius quo saepe recusandae, tenetur, hic consequuntur amet aut ipsum doloribus! Quia illo beatae, cum iure id qui ex doloremque in expedita quae ipsa, aliquam, aut nam ab.   Ullam earum explicabo ipsa vitae officiis doloremque dolorum repellat alias minus quasi, pariatur nesciunt, quia unde. Deleniti iste odit officia asperiores vero corrupti, possimus dolores tempore tenetur veniam, modi obcaecati.  Minus quaerat dicta dolore qui optio similique voluptate, veniam quis. Quasi aliquam quis reiciendis voluptatum facere nam consequatur quo tempore."
        // },
        // {
        //   projectTitle: "AFlat remodelation",
        //   person: "Enrique",
        //   dueBy: "June 20 2019",
        //   status: "complete",
        //   description:
        //     "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae officiis illo esse dolore, pariatur in inventore quas aliquid quo commodi repellendus, repellat eius consequuntur debitis perspiciatis alias magnam architecto unde. Adipisci quas placeat hic perspiciatis voluptates voluptatibus, repellendus sunt, modi exercitationem, maxime architecto soluta magnam doloribus molestiae? Ipsum repellat quis, sint, optio iure eum, odio repudiandae ipsa nobis fuga provident.  Qui voluptates esse eos ab eligendi nostrum, nihil libero, praesentium nulla, magni vitae officia. Rerum iusto id ab explicabo. Cumque dolore officiis saepe illo atque quibusdam error, ipsum accusamus harum.  Nemo ea eius quo saepe recusandae, tenetur, hic consequuntur amet aut ipsum doloribus! Quia illo beatae, cum iure id qui ex doloremque in expedita quae ipsa, aliquam, aut nam ab.   Ullam earum explicabo ipsa vitae officiis doloremque dolorum repellat alias minus quasi, pariatur nesciunt, quia unde. Deleniti iste odit officia asperiores vero corrupti, possimus dolores tempore tenetur veniam, modi obcaecati.  Minus quaerat dicta dolore qui optio similique voluptate, veniam quis. Quasi aliquam quis reiciendis voluptatum facere nam consequatur quo tempore."
        // },
        // {
        //   projectTitle: "BTask management cleanup",
        //   person: "All",
        //   dueBy: "July 20 2019",
        //   status: "overdue",
        //   description:
        //     "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae officiis illo esse dolore, pariatur in inventore quas aliquid quo commodi repellendus, repellat eius consequuntur debitis perspiciatis alias magnam architecto unde. Adipisci quas placeat hic perspiciatis voluptates voluptatibus, repellendus sunt, modi exercitationem, maxime architecto soluta magnam doloribus molestiae? Ipsum repellat quis, sint, optio iure eum, odio repudiandae ipsa nobis fuga provident.  Qui voluptates esse eos ab eligendi nostrum, nihil libero, praesentium nulla, magni vitae officia. Rerum iusto id ab explicabo. Cumque dolore officiis saepe illo atque quibusdam error, ipsum accusamus harum.  Nemo ea eius quo saepe recusandae, tenetur, hic consequuntur amet aut ipsum doloribus! Quia illo beatae, cum iure id qui ex doloremque in expedita quae ipsa, aliquam, aut nam ab.   Ullam earum explicabo ipsa vitae officiis doloremque dolorum repellat alias minus quasi, pariatur nesciunt, quia unde. Deleniti iste odit officia asperiores vero corrupti, possimus dolores tempore tenetur veniam, modi obcaecati.  Minus quaerat dicta dolore qui optio similique voluptate, veniam quis. Quasi aliquam quis reiciendis voluptatum facere nam consequatur quo tempore."
        // },
        // {
        //   projectTitle: "BTask management cleanup",
        //   person: "Juan",
        //   dueBy: "July 20 2019",
        //   status: "overdue",
        //   description:
        //     "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae officiis illo esse dolore, pariatur in inventore quas aliquid quo commodi repellendus, repellat eius consequuntur debitis perspiciatis alias magnam architecto unde. Adipisci quas placeat hic perspiciatis voluptates voluptatibus, repellendus sunt, modi exercitationem, maxime architecto soluta magnam doloribus molestiae? Ipsum repellat quis, sint, optio iure eum, odio repudiandae ipsa nobis fuga provident.  Qui voluptates esse eos ab eligendi nostrum, nihil libero, praesentium nulla, magni vitae officia. Rerum iusto id ab explicabo. Cumque dolore officiis saepe illo atque quibusdam error, ipsum accusamus harum.  Nemo ea eius quo saepe recusandae, tenetur, hic consequuntur amet aut ipsum doloribus! Quia illo beatae, cum iure id qui ex doloremque in expedita quae ipsa, aliquam, aut nam ab.   Ullam earum explicabo ipsa vitae officiis doloremque dolorum repellat alias minus quasi, pariatur nesciunt, quia unde. Deleniti iste odit officia asperiores vero corrupti, possimus dolores tempore tenetur veniam, modi obcaecati.  Minus quaerat dicta dolore qui optio similique voluptate, veniam quis. Quasi aliquam quis reiciendis voluptatum facere nam consequatur quo tempore."
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
  }
};
</script>

<style lang="scss" scoped>
</style>