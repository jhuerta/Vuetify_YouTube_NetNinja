<template>
  <div class="dashboard">
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 md6>
          <v-btn color="primary" outline block>1</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn color="primary" outline block>1</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn color="primary" outline block>1</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn color="primary" outline block>1</v-btn>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs4 md3>
          <v-btn color="primary" outline block>1</v-btn>
        </v-flex>
        <v-flex xs4 md3>
          <v-btn color="primary" outline block>1</v-btn>
        </v-flex>
        <v-flex xs4 md3>
          <v-btn color="primary" outline block>1</v-btn>
        </v-flex>
      </v-layout>
      <v-layout
        row
        wrap
        :justify-space-around="'justify-space-around' == this.justification_selection"
        :justify-space-between="'justify-space-between' == this.justification_selection"
        :justify-center="'justify-center' == this.justification_selection"
        :justify-end="'justify-end' == this.justification_selection"
      >
        <v-flex xs4 md3>
          <v-btn color="primary" outline block>One</v-btn>
        </v-flex>
        <v-flex xs4 md3>
          <v-btn color="primary" outline block>Two</v-btn>
        </v-flex>
      </v-layout>
    </v-container>Choose justification
    <select name="justification" v-model="justification_selection">
      <option value="justify-space-around">justify-space-around</option>
      <option value="justify-space-between">justify-space-between</option>
      <option value="justify-center">justify-center</option>
      <option value="justify-end">justify-end</option>
      <option value="justify-start">justify-start</option>
      <option value="nothing">none</option>
    </select>
  </div>
</template>



<script>
export default {
  data() {
    return {
      justification: "justify-space-around",
      justification_selection: "justify-end"
    };
  }
};
</script>
