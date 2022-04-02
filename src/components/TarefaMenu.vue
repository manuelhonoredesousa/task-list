<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" icon>
        <v-icon>mdi-dots-horizontal-circle</v-icon>
      </v-btn>
    </template>

    <v-list>
      <!-- TASK -->
      <v-list-item v-for="(item, index) in items" :key="index">
        <v-icon :color="item.color" left>{{ item.icone }}</v-icon>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
        <!-- ICON -->
        <!-- <v-btn icon @click.stop="removerTask(task.id)">
          <v-icon color="red">mdi-trash-can</v-icon>
        </v-btn> -->
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "Tarefa-Menu",
  data: () => ({
    items: [
      {
        icone: "mdi-pencil",
        title: "Editar",
        color: "blue",
      },
      {
        icone: "mdi-trash-can",
        title: "Remover",
        color: "red",
      },
    ],
  }),
  methods: {
    removerTask(id) {
      this.$store.commit("deteleTask", id);
    },
  },
};
</script>

<style>
</style>