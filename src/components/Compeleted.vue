<template>
  <v-container>
    <v-app-bar
      color="transparent"
      flat
    >
      <v-toolbar-title>My Compeleted Tasks</v-toolbar-title>

    </v-app-bar>

    <v-layout justify-center>
      <v-flex
        row
        class="todocards"
      >
        <v-card
          raised
          class="todoCard elevation-15 yellow lighten-2"
          v-for="(task,key) in doneTasks.slice().reverse()"
          :key="key"
        >
          <v-card-title>{{task.title}}</v-card-title>
          <v-card-text>{{task.description}}</v-card-text>
          <v-card-actions style="margin-left:.5em">
            <v-btn
              @click="deleteTask(task._id)"
              icon
            >
              <v-icon color="red">mdi-close</v-icon>
            </v-btn>

          </v-card-actions>

        </v-card>

      </v-flex>
    </v-layout>
  </v-container>

</template>
<script>
import { mapState } from 'vuex'
import Axios from 'axios'
export default {
  name: 'compeleted',
  data: () => ({
  }),
  computed: {
    ...mapState(['doneTasks'])
  },
  methods: {
    deleteTask (id) {
      const baseApi = 'http://127.0.0.1:3000'
      Axios.delete(baseApi + '/api/tasks/' + id)
        .then((res) => {
          this.$store.dispatch('fetchDoneTasks')
        })
        .catch()
    }
  },
  created () {
    this.$store.dispatch('fetchDoneTasks')
  }

}
</script>
<style>
.todocards {
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  align-items: center;
}
.todoCard {
  flex: 0 0 200px;
  margin: 1em;
}
</style>
