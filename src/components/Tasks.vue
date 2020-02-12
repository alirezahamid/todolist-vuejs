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
          @click.stop="dialog = true"
        >
          <v-card-text class="title">Add Todo</v-card-text>
          <v-card-text>
            <v-icon large>mdi-plus</v-icon>
          </v-card-text>
        </v-card>

        <v-row justify="center">
          <v-dialog
            v-model="dialog"
            max-width="290"
          >
            <v-card>
              <v-card-title class="headline">Add new todo</v-card-title>

              <v-form class="ml-2 mr-2">
                <v-text-field
                  required
                  label="Todo Title"
                  v-model="singleTask.title"
                ></v-text-field>
                <v-textarea
                  v-model="singleTask.description"
                  label="Todo Description"
                ></v-textarea>
              </v-form>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  color="red darken-1"
                  text
                  @click="dialog =false"
                >
                  Cancell
                </v-btn>

                <v-btn
                  color="green darken-1"
                  text
                  @click="postTask"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>

        <v-card
          shaped
          class="todoCard elevation-15"
          v-for="(task,key) in tasks"
          :key="key"
        >
          <v-card-title>{{task.title}}</v-card-title>
          <v-card-text>{{task.description}}</v-card-text>
          <v-card-actions style="margin-left:.5em">
            <v-btn icon>
              <v-icon color="pink">mdi-pencil</v-icon>
            </v-btn>
            <v-btn
              @click="doneTask(task._id)"
              icon
            >
              <v-icon
                v-if="task.done"
                color="green"
              >mdi-checkbox-marked-circle</v-icon>
              <v-icon
                v-else
                color="grey"
              >mdi-checkbox-marked-circle</v-icon>
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
  name: 'tasks',
  data: () => ({
    dialog: false,
    isDone: false,
    singleTask: { title: '', description: '', done: false }
  }),
  computed: {
    ...mapState(['tasks'])
  },
  methods: {
    postTask () {
      const baseApi = 'http://127.0.0.1:3000'
      Axios.post(baseApi + '/api/tasks', this.singleTask)
        .then((res) => {
          this.dialog = false
          this.$store.dispatch('fetchTasks')
        })
        .catch()
    },
    doneTask (id) {
      const baseApi = 'http://127.0.0.1:3000'
      Axios.put(baseApi + '/api/tasks/' + id, { done: true })
        .then((res) => {
          this.$store.dispatch('fetchTasks')
        })
        .catch()
    }

  },
  created () {
    this.$store.dispatch('fetchTasks')
  }

}
</script>
<style>
.todoCard {
  width: 30%;
  flex-wrap: wrap;
  margin: 1em;
}
</style>
