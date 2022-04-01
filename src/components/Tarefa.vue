<template>
  <div>
    <v-list-item
      :class="{ 'blue lighten-1': change }"
      @click="change = !change"
    >
      <template v-slot:default="{}">
        <v-list-item-action>
          <v-checkbox :input-value="change"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': change }"
            >{{ task.id + "º - " + task.title }}</v-list-item-title
          >
        </v-list-item-content>

        <!-- ICON -->
        <v-btn icon @click.stop="removerTask(task.id)">
          <v-icon color="red">mdi-trash-can</v-icon>
        </v-btn>
      </template>
    </v-list-item>
    <v-divider />
  </div>
</template>

<script>
export default {
  name: "Tarefa-App",
  data: () => ({
    state: String,
    change: Boolean,
  }),
  props: ["task"],
  methods: {
    removerTask(id) {
      this.$store.commit("deteleTask", id);
    },
  },
  mounted() {
    this.change = this.task.done;
  },
};
</script>