<template>
  <div class="buttons">
    <h1>Home page</h1>
    <v-btn class="pink darker-2 white--text"
      >Color with class and darker class</v-btn
    >

    <v-btn small class="pink darker-2 white--text">Small button</v-btn>
    <v-btn large class="pink darker-2 white--text">Large button</v-btn>

    <v-btn flat color="pink" class="white--text">Using flat prop</v-btn>
    <v-btn depressed class="pink white--text">Using depressed prop</v-btn>
    <v-btn color="indigo lighten-3" class="pink white--text"
      >Using color prop instead of color class</v-btn
    >
    <v-btn class="pink white--text">
      <v-icon left>email</v-icon>
      <span>Using v-icon to add an MD icon. v-icon with right prop</span>
    </v-btn>

    <v-btn class="pink white--text">
      <v-icon>person</v-icon>
      <span>Normal</span>
      <v-icon medium>person</v-icon>
      <span>Meicum</span>
      <v-icon large color="green darken-2">person</v-icon>
      <span>Large</span>
      <v-icon color="green darken-4" x-large>person</v-icon>
      <span>X-Large</span>
    </v-btn>

    <v-btn fab flat color="pink">
      <v-icon color="pink" x-large>favorite</v-icon>
    </v-btn>
    <v-btn fab color="pink">
      <v-icon color="white" x-large>favorite</v-icon>
    </v-btn>
  </div>
</template>