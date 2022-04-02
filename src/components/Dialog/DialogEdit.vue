<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5"> Editar Tarefa </v-card-title>
        <v-card-text>Insira a tarefa que substituirá a outra.</v-card-text>
        <v-text-field
          class="px-3"
          label="Editar Tarefa"
          placeholder="Actualize a Tarefa"
          outlined
          v-model="title"
        ></v-text-field>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="$emit('dialogState')"> Cancelar </v-btn>
          <v-btn
            color="primary"
            text
            @click="functionEdit()"
          >
            Actualizar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Dialog-Edit",
  data: () => ({
    dialog: true,
    title: null,
  }),
  props: {
    task: Array,
  },
  methods:{
    functionEdit(){
      this.$store.commit('editTask', {id: this.task.id, title: this.title})
      this.$emit('dialogAction')
    }
  },
  created() {
    this.title = this.task.title;
  },
};
</script>
