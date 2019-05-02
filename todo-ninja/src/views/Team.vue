<template>
  <div class="team">
    <v-container class="my-5">
      <h1 class="subheading grey--text">Team Component</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis
        ut itaque iste sapiente perferendis tempora tenetur eos vitae illum
        voluptatum, iure similique ipsam modi consequuntur doloremque laudantium
        in aperiam.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A odit
        sapiente iure nostrum suscipit, saepe, officiis autem quibusdam
        blanditiis ab dolor. Officia debitis accusantium pariatur inventore
        quibusdam nisi fugiat alias? Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Sapiente laboriosam inventore, porro facere quis
        cumque nemo commodi sequi labore, odio quam magni atque voluptate
        officiis nesciunt ratione. Veritatis, ut nemo.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
        commodi dignissimos corporis quidem in esse. Voluptatibus, doloribus
        perferendis quas eaque dicta, iusto dignissimos nihil inventore a quo
        quaerat officia excepturi?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        nostrum, maiores, dicta, voluptas earum distinctio minima a sequi at
        inventore quisquam? Error accusamus cum eum voluptatum! Deserunt
        assumenda velit corporis?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis ab
        sapiente fugit in quia. Ratione sunt quidem officiis aspernatur. Modi
        provident quibusdam fugiat iusto nam blanditiis qui animi eius esse.
      </p>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="member in members" :key="member.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="blue darken-4">
                <img
                  :src="`https://api.adorable.io/avatars/100/${member.name}@adorable.png`"
                  alt="alt"
                >
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{member.name}}</div>
              <div class="grey--text">{{member.role}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="grey">
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: [
        { name: "Juan", role: "Software developer" },
        { name: "Hasmin", role: "Designer" },
        { name: "Miguel", role: "Copywriter" },
        { name: "Sofia", role: "Project Manager" },
        { name: "Lucas", role: "Front End developer" },
        { name: "Irene", role: "Database Administrator" },
        { name: "Maria", role: "Scrum Master" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>