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
    <template v-if="error">
      <v-snackbar :value="true" :multi-line="true" :timeout="5000" color="error" @input="closeError">
        {{error}}
        <v-btn dark text @click.native="closeError">close</v-btn>
      </v-snackbar>
    </template>
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
  methods: {
    closeError() {
      this.$store.dispatch("clearError");
    }
  },
  computed: {
    error() {
      return this.$store.getters.error;
    }
  }
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
