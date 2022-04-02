<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" icon>
          <v-icon>mdi-dots-horizontal-circle</v-icon>
        </v-btn>
      </template>

      <v-list>
        <!-- TASK -->
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="item.choose()"
        >
          <v-icon :color="item.color" left>{{ item.icon }}</v-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <!--  -->
    <DialogEdit
      v-if="items[0].state"
      :title="task.title"
      @dialogState="items[0].state = false"
      @dialogAction="edit(task.title)"
    />
    <!--  -->
    <DialogDelete
      v-if="items[1].state"
      @dialogState="items[1].state = false"
      @dialogAction="delet(task.id)"
    />
  </div>
</template>

<script>
import DialogEdit from "@/components/Dialog/DialogEdit.vue";
import DialogDelete from "@/components/Dialog/DialogDelete.vue";

export default {
  name: "Tarefa-Menu",
  data: () => ({
    items: [
      {
        icon: "mdi-pencil",
        title: "Editar",
        color: "blue",
        state: false,
        choose() {
          this.state = true;
        },
      },
      {
        icon: "mdi-trash-can",
        title: "Remover",
        color: "red",
        state: false,
        choose() {
          this.state = true;
        },
      },
    ],
  }),
  components: {
    DialogEdit,
    DialogDelete,
  },
  props: {
    task: Array,
  },

  methods: {
    delet(id) {
      this.$store.commit("deteleTask", id);
      this.items[1].state = false;
    },
    edit(title) {
      alert(title);
    },
  },
};
</script>
