<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Orders</h1>
        <v-list subheader two-line flat>
          <v-list-item-group v-model="settings" multiple>
            <v-list-item v-for="order in orders" :key="order.id">
              <template v-slot:default="{ active, toggle }">
                <v-list-item-action>
                  <v-checkbox @change="markDown(order)" :input-value="order.done" color="success"></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>{{ order.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-tile-action>
                  <v-btn class="primary">Open</v-btn>
                </v-list-tile-action>
              </template>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        {
          id: "asdf",
          name: "Vasiliy",
          phone: "345245",
          adId: 121,
          done: false
        }
      ]
    };
  },
  methods: {
    markDown(order) {
      order.done = true;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>