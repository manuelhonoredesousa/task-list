<template>
  <v-app id="inspire">
    <!-- navigation-drawer -->
    <v-navigation-drawer
      v-model="drawer"
      app
      color="#0065a8"
      dark
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> MENU </v-list-item-title>
          <v-list-item-subtitle> sousoft </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- App Bar -->
    <v-app-bar
      app
      dark
      hide-on-scroll
      prominent
      scroll-target="#scrolling-techniques-4"
      src="./assets/img/bg/menu.jpg"
      @click="drawer = !drawer"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Task List 📜 </v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>

    <!-- main -->
    <v-main >
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    drawer: null,
    items: [
      { title: "Tarefas", icon: "mdi-view-dashboard", to: "/" },
      { title: "Sobre", icon: "mdi-help-box", to: "/about" },
    ],
    right: null,
  }),
};
</script>

<style scoped>

</style>