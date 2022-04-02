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
            >{{ task.id + "º - " + task.title }}
            </v-list-item-title
          >
        </v-list-item-content>
        <!-- MENU -->
       <TarefaMenu :taskID="task.id" :taskTitle="task.title" />
      </template>
    </v-list-item>
    <v-divider />
  </div>
</template>

<script>
import TarefaMenu from '@/components/TarefaMenu.vue';

export default {
  name: "Tarefa-App",
  components:{
    TarefaMenu
  },
  data: () => ({
    state: String,
    change: Boolean,
  }),
  props: ["task"],
  methods: {
    
  },
  mounted() {
    this.change = this.task.done;
  },
};
</script>