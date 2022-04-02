<template>
  <div>
    <!-- Text Field (Task Builder) -->
    <v-col cols="12" sm="12" md="12">
      <v-text-field
        v-model="inputTask"
        label="Criar Tarefa"
        placeholder="Qual Tarefa Deseja Criar"
        outlined
        @keyup.enter="add"
      ></v-text-field>
    </v-col>

    <!-- List -->
    <v-list flat subheader>
      <v-list-item-group
        v-model="settings"
        multiple
        active-class=""
      >
        <!-- Item -->
        <div v-for="(task, index) in $store.state.tasks" :key="index">
          <tarefa-app :task="task"/>
        </div>
      </v-list-item-group>
    </v-list>

   <!--  {{ settings }} -->
  </div>
</template>

<script>
import TarefaApp from "@/components/Tarefa.vue";

export default {
  name: "Home-App",
  data: () => ({
    inputTask: null,
    settings: [],
  }),
  components: {
    TarefaApp,
  },
  methods:{
    add(){
      this.$store.commit('inserir', this.inputTask);
      this.inputTask = null;
    }
  }
};
</script>

