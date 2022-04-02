<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" icon>
        <v-icon>mdi-dots-horizontal-circle</v-icon>
      </v-btn>
    </template>

    <v-list>
      <!-- TASK -->
      <v-list-item v-for="(item, index) in items" :key="index" @click="item.action()">
        <v-icon :color="item.color" left>{{ item.icon }}</v-icon>
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

import DialogEdit from '@/components/Dialog/DialogEdit.vue'
import DialogDelete from '@/components/Dialog/DialogDelete.vue'

export default {
  name: "Tarefa-Menu",
  components:{
      DialogEdit,
      DialogDelete
  },
  data: () => ({
    items: [
      {
        icon: "mdi-pencil",
        title: "Editar",
        color: "blue",
        action(){
            alert('EDITAR')
        }
      },
      {
        icon: "mdi-trash-can",
        title: "Remover",
        color: "red",
        action(){
            alert('ELIMINAR')
        }
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