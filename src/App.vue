<template>
  <v-app>
    <v-app-bar
      app
      class="amber accent-4"
      dark
    >
      <div class="d-flex align-center">
        <v-icon x-large>mdi-book</v-icon>
        <h1 class="ml-3 mr-3">Todo List</h1>
      </div>
      <v-bottom-navigation
        background-color="transparent"
        class="elevation-0"
        width="20%"
      >
        <v-btn
          to="/"
          value="tasks"
          class="subtitle-1"
        >
          <span>My Tasks</span>
        </v-btn>

        <v-btn
          to="/compeleted"
          value="complated"
          class="subtitle-1"
        >
          <span>Complate</span>
        </v-btn>
      </v-bottom-navigation>

      <v-spacer></v-spacer>

      <v-btn
        href="https://gitlab.com/alirezahamid/todolist-vuejs-1"
        target="_blank"
        text
      >
        <span class="mr-2 subtitle-1 font-weight-bold">Gitlab</span>
        <v-icon>mdi-git</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>
