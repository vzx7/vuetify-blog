<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-img contain height="300" src="https://bipbap.ru/wp-content/uploads/2017/04/2-16.jpg"></v-img>
          <v-card-text>
              <h1 class="text--primary">lorem</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, inventore suscipit. Ratione animi, accusamus labore nostrum obcaecati tenetur error reprehenderit sit magnam. Laborum, delectus cumque? Iste excepturi deserunt possimus id.</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="warning" text>Edit</v-btn>
            <v-btn class="success">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>