<template>
  <!-- App.vue -->

  <v-app id="inspire">
    <template>
      <div>
        <v-toolbar>
          <v-toolbar-title>
            <router-link to="/" tag="span" class="pointer">MY APP</router-link>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn v-for="(item, index) of items" :key="index" :to="item.url" text>{{ item.title }}</v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </div>
    </template>

    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    items: [
      { title: "Login", icon: "mdi-lock", url: "/login" },
      { title: "Registrtation", icon: "mdi-face", url: "/registration" },
      { title: "Orders", icon: "mdi-bookmark", url: "/orders" },
      { title: "New ad", icon: "mdi-note-plus", url: "/new" },
      { title: "My ad", icon: "mdi-format-list-bulleted-square", url: "/list" }
    ]
  }),
  methods: {}
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
