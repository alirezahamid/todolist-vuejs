<template>

  <v-row>
    <v-btn
      text
      large
      color="amber accent-4"
      @click.stop="showAddTodo = true"
    >
      <v-icon>mdi-plus</v-icon>
      Add New Task
    </v-btn>

    <v-dialog
      v-model="showAddTodo"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Add new todo</v-card-title>

        <v-form class="ml-2 mr-2">
          <v-text-field
            required
            label="Todo Title"
            v-model="newTask.title"
          ></v-text-field>
          <v-textarea
            v-model="newTask.description"
            label="Todo Description"
          ></v-textarea>
        </v-form>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="red darken-1"
            text
            @click="showAddTodo =false"
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

</template>
<script>
import Api from '../services/api/api'
export default {
  name: 'addtask',
  data: () => ({
    showAddTodo: false,
    newTask: { title: '', description: '', done: false }
  }),
  methods: {
    postTask () {
      Api.addTask(this.newTask)
        .then((res) => {
          this.showAddTodo = false
          this.$store.dispatch('fetchTasks')
        })
        .catch()
    }
  }
}
</script>
<style>
</style>
