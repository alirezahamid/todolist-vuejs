<template>
  <v-container>
    <v-app-bar
      color="transparent"
      flat
    >
      <v-toolbar-title class="mr-10">My Tasks</v-toolbar-title>
      <AddTask />
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-layout justify-center>
      <v-flex
        row
        calss="todocards"
      >

        <v-card
          raised
          class="todoCard elevation-15 yellow lighten-2"
          v-for="(task,key) in tasks"
          :key="key"
        >
          <v-card-title>{{task.title}}</v-card-title>
          <v-card-text>{{task.description}}</v-card-text>
          <v-card-actions style="margin-left:.5em">
            <v-btn icon>
              <v-icon
                @click="showEdit(task)"
                color="pink"
              >mdi-pencil</v-icon>
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
        <v-row justify-center>
          <v-dialog
            v-model="showEditTodo"
            max-width="290"
          >
            <v-card>
              <v-card-title class="headline">Edit todo</v-card-title>

              <v-form class="ml-2 mr-2">
                <v-text-field
                  required
                  label="Todo Title"
                  :value="editTask.title"
                  v-model="editTask.title"
                ></v-text-field>
                <v-textarea
                  label="Todo Description"
                  :value="editTask.description"
                  v-model="editTask.description"
                ></v-textarea>
              </v-form>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  color="red darken-1"
                  text
                  @click="showEditTodo =false"
                >
                  Cancell
                </v-btn>

                <v-btn
                  color="green darken-1"
                  text
                  @click="updateTask(editTask._id)"
                >
                  Edit
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>

</template>
<script>
import Api from '../services/api/api'
import { mapState } from 'vuex'
import AddTask from './AddTask'
export default {
  name: 'tasks',
  components: { AddTask },
  data: () => ({
    showEditTodo: false,
    isDone: false,
    editTask: {}
  }),
  computed: {
    ...mapState(['tasks'])
  },
  methods: {
    doneTask (id) {
      Api.doneSingleTask(id)
        .then((res) => {
          this.$store.dispatch('fetchTasks')
        })
        .catch()
    },
    showEdit (task) {
      this.showEditTodo = true
      this.editTask = task
    },
    updateTask (id) {
      Api.updateSingleTask(id, this.editTask)
        .then((res) => {
          this.showEditTodo = false
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
