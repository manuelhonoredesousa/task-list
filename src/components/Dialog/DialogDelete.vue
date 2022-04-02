<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="290">

      <v-card>
        <v-card-title class="text-h5">
          Eliminar Tarefa
        </v-card-title>
        <v-card-text>Realmente deseja "Eliminar" a tarefa actual?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialog = false"> Cancelar </v-btn>
          <v-btn color="red" text @click="dialog = false"> Eliminar </v-btn>
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
