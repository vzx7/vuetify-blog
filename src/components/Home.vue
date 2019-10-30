<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <template>
            <v-carousel>
              <v-carousel-item
                v-for="(ad, i) in promoAds"
                :key="i"
                :src="ad.imageSrc"
                reverse-transition="fade-transition"
                transition="fade-transition"
              >
                <div class="card-link">
                  <v-btn class="error" :to="`/ad/${ad.id}`">{{ ad.title }}</v-btn>
                </div>
              </v-carousel-item>
            </v-carousel>
          </template>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid>
      <v-layout row wrap>
        <v-card
          xs12
          sm6
          md4
          v-for="(ad, num) of ads"
          :key="ad.id"
          class="d-inline-block mx-auto"
          max-width="400"
          flat
        >
          <v-img class="white--text align-end" height="200px" :src="ad.imageSrc">
            <v-card-title>{{ ad.title }}</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">Number {{ num + 1 }}</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{ ad.discription }}</div>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :to="`/ad/${ad.id}`" text>Open</v-btn>

            <v-btn class="primary" raised>Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    promoAds() {
      return this.$store.getters.promoAds;
    },
    ads() {
      return this.$store.getters.ads;
    }
  }
};
</script>

<style lang="scss" scoped>
.card-link {
  position: absolute;
  bottom: 50px;
  left: 50%;
  background: rgba($color: #000000, $alpha: 0.5);
  transform: translate(-50%, 0);
  padding: 5px 15px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>