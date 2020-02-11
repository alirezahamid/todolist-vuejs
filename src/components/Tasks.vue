<template>
  <v-container>
    <v-app-bar
      color="transparent"
      flat
    >
      <v-toolbar-title>My Tasks</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-layout justify-center>
      <v-flex
        justify-center
        row
      >
        <v-card
          shaped
          class="todoCard text-center grey lighten-4 elevation-0"
          id="addTodo"
        >
          <v-card-text class="title">Add Todo</v-card-text>
          <v-card-text>
            <v-icon large>mdi-plus</v-icon>
          </v-card-text>
        </v-card>
        <v-card
          shaped
          class="todoCard"
        >
          <v-card-title>Todo</v-card-title>
          <v-card-text>this is Todo</v-card-text>
          <v-cart-actions style="margin-left:.5em">
            <v-btn icon>
              <v-icon color="pink">mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon color="green">mdi-checkbox-marked-circle</v-icon>
            </v-btn>

          </v-cart-actions>

        </v-card>

      </v-flex>
    </v-layout>
  </v-container>

</template>
<script>
export default {
  name: 'tasks'
}
</script>
<style>
.todoCard {
  min-width: 30%;
  flex-wrap: wrap;
  margin: 1em;
}
</style>
