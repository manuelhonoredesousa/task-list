<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="290">

      <v-card>
        <v-card-title class="text-h5"> Editar Tarefa </v-card-title>
        <v-card-text>Insira a tarefa que substituirá a outra.</v-card-text>
        <v-text-field class="px-3"
          v-model="inputTask"
          label="Editar Tarefa"
          placeholder="Qual Tarefa Deseja Actualizar"
          outlined
        ></v-text-field>
        <v-card-actions> 
          <v-spacer></v-spacer>
          <v-btn text @click="dialog = false"> Cancelar </v-btn>
          <v-btn color="primary" text @click="dialog = false">
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
  }),
};
</script>
