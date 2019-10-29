<template>
  <div>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12>
          <template>
            <v-carousel>
              <v-carousel-item
                v-for="(ad, i) in ads"
                :key="i"
                :src="ad.imageSrc"
                reverse-transition="fade-transition"
                transition="fade-transition"
              ></v-carousel-item>
            </v-carousel>
          </template>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout row>
        <v-flex xs12 v-for="(ad, num) of ads" :key="ad.id">
          <v-card class="mx-auto" max-width="400">
            <v-img class="white--text align-end" height="200px" :src="ad.imageSrc">
              <v-card-title>{{ ad.title }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">Number {{ num + 1 }}</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>{{ ad.discription }}</div>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text>Open</v-btn>

              <v-btn class="primary" raised>Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ads: [
        {
          title: "First",
          description: "Hello I am description",
          promo: false,
          imageSrc:
            "https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg",
          id: 12
        },
        {
          title: "Second",
          description: "Hello I am description",
          promo: true,
          imageSrc: "https://klike.net/uploads/posts/2019-07/1563795460_1.jpg",
          id: 13
        },
        {
          title: "Third",
          description: "Hello I am description",
          promo: true,
          imageSrc: "https://bipbap.ru/wp-content/uploads/2017/04/2-16.jpg",
          id: 27
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>